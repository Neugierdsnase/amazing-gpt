import argparse
import json
import os
import re
from datetime import datetime

from bs4 import BeautifulSoup

parser = argparse.ArgumentParser()

# Add the argument for the path
parser.add_argument("path", type=str, help="Path to a directory or a file")

# Parse the arguments
args = parser.parse_args()


class Author:
    def __init__(self, name, url):
        self.name = name
        self.url = url

    def as_dict(self):
        return {"name": self.name, "url": self.url}


class Name:
    def __init__(self, display, sort):
        self.display = display
        self.sort = sort

    def as_dict(self):
        return {"display": self.display, "sort": self.sort}


class GptRecord:
    def __init__(
        self,
        gpt_id,
        author,
        name,
        description,
        tags,
        added,
        updated,
        slug,
        image,
        curatorsnotes,
        curatorsrating,
        ytshorturl,
    ):
        self.gpt_id = gpt_id
        self.author = (
            author  # Assume this is an object with 'name' and 'url' attributes
        )
        self.name = (
            name  # Assume this is an object with 'display' and 'sort' attributes
        )
        self.description = description
        self.tags = tags
        self.added = added
        self.updated = updated
        self.slug = slug
        self.image = image
        self.curatorsnotes = curatorsnotes
        self.curatorsrating = curatorsrating
        self.ytshorturl = ytshorturl
        self.__dict__ = {
            "gpt_id": self.gpt_id,
            "author": self.author.as_dict() if self.author else None,
            "name": self.name.as_dict() if self.name else None,
            "description": self.description,
            "tags": self.tags,
            "added": self.added.isoformat(),
            "updated": self.updated.isoformat(),
            "slug": self.slug,
            "image": self.image,
            "curatorsnotes": self.curatorsnotes,
            "curatorsrating": self.curatorsrating,
            "ytshorturl": self.ytshorturl,
        }

    def __getitem__(self, key):
        if key == "display_name":
            return self.name["display"] if self.name else None
        if key == "sort_name":
            return self.name["sort"] if self.name else None
        if key == "author_name":
            return self.author["name"] if self.author else None
        if key == "author_url":
            return self.author["url"] if self.author else None

        return self.__dict__[key]

    def write_to_file_as_json(self):
        # create file
        with open(f"json_content/{self['sort_name']}.json", "w") as file:
            json.dump(self.__dict__, file)

    @staticmethod
    def from_json(json_string):
        json_dict = json.loads(json_string)

        return GptRecord(
            json_dict["gpt_id"],
            json_dict["author"],
            json_dict["name"],
            json_dict["description"],
            json_dict["tags"],
            json_dict["added"],
            json_dict["updated"],
            json_dict["slug"],
            json_dict["image"],
            json_dict["curatorsnotes"],
            json_dict["curatorsrating"],
            json_dict["ytshorturl"],
        )


def parse_url(soup):
    return soup.select_one(
        "a.flex.items-center.rounded-lg.bg-green-600.px-4.py-2.font-medium.text-white.transition"
    )


def parse_slug(soup):
    url = parse_url(soup)
    return url["href"].split("next=/g/")[-1] if url else ""


def parse_id(soup):
    slug = parse_slug(soup)
    return slug.replace("-", "_") if slug else ""


def parse_display_name(soup):
    return soup.select_one("div.text-center.text-2xl.font-medium").text


def parse_sort_name(soup):
    display_name = parse_display_name(soup)
    return re.sub(r"[^a-z0-9]", "", display_name.lower().strip())


def parse_name(soup):
    display_name = parse_display_name(soup)
    sort_name = parse_sort_name(soup)
    return Name(display_name, sort_name)


def parse_image(soup):
    return soup.select_one(".gizmo-shadow-stroke.overflow-hidden.rounded-full > img")[
        "src"
    ]


def parse_description(soup):
    description = soup.select_one(
        "div.max-w-md.text-center.text-xl.font-normal.text-token-text-secondary"
    ).text

    description_with_cleaned_whitespace = (
        re.sub(r"\s+", " ", description) if description else ""
    )

    return description_with_cleaned_whitespace.strip()


def parse_author_from_link_element(soup):
    author_link_element = soup.select_one("a.underline")
    if author_link_element:
        author_name = author_link_element.text.strip()
        author_url = author_link_element["href"]
        return Author(author_name, author_url)
    else:
        return None


def parse_author_from_plain_text_element(soup):
    author_name = (soup.select_one(".text-sm.text-token-text-tertiary").text)[
        :3
    ].strip()
    if author_name:
        return Author(author_name, None)
    return None


def parse_author(soup):
    author_from_link_element = parse_author_from_link_element(soup)
    if author_from_link_element:
        return author_from_link_element

    author_from_plain_text_element = parse_author_from_plain_text_element(soup)
    if author_from_plain_text_element:
        return author_from_plain_text_element

    fallback_url_element = soup.select_one("span#author-url")
    fallback_url = fallback_url_element.text if fallback_url_element else None

    return Author(None, fallback_url) if fallback_url else None


def parse_tags(soup):
    tags_element = soup.select_one("span#gpt-tags")
    return tags_element.text.split(",") if tags_element else []


def parse_curatorsnotes(soup):
    curatorsnotes_element = soup.select_one("div#curators-notes")
    return (
        "".join(str(child) for child in curatorsnotes_element.children)
        if curatorsnotes_element
        else None
    )


def parse_curatorsrating(soup):
    curatorsrating_element = soup.select_one("input#curators-rating")
    return curatorsrating_element["value"] if curatorsrating_element else None


def parse_ytshorturl(soup):
    ytshorturl_element = soup.select_one("span#ytshorturl")
    return ytshorturl_element.text if ytshorturl_element else None


def parse(soup):
    gpt_id = parse_id(soup)
    author = parse_author(soup)
    name = parse_name(soup)
    description = parse_description(soup)
    tags = parse_tags(soup)
    added = datetime.now()
    updated = datetime.now()
    slug = parse_slug(soup)
    image = parse_image(soup)
    curatorsnotes = parse_curatorsnotes(soup)
    curatorsrating = parse_curatorsrating(soup)
    ytshorturl = parse_ytshorturl(soup)

    return GptRecord(
        gpt_id,
        author,
        name,
        description,
        tags,
        added,
        updated,
        slug,
        image,
        curatorsnotes,
        curatorsrating,
        ytshorturl,
    )


def parse_all(file_paths):
    for file_path in file_paths:
        print(f"Parsing {file_path}...")
        with open(file_path, "r", encoding="utf-8") as file:
            html = file.read()

            soup = BeautifulSoup(html, "html.parser")
            parsed_gpt = parse(soup)

            if parsed_gpt["author_name"]:
                print(
                    f"Parsed {parsed_gpt['display_name']} by {parsed_gpt['author_name']}.\n"
                )
            else:
                print(f"Parsed {parsed_gpt['display_name']}.\n")

            parsed_gpt.write_to_file_as_json()

            print(f"Wrote {parsed_gpt['sort_name']}.json\n")


def get_file_paths(directory_path):
    if not os.path.isdir(directory_path):
        raise FileNotFoundError("Directory not found")

    file_paths = []
    for entry in os.listdir(directory_path):
        full_path = os.path.join(directory_path, entry)
        if os.path.isfile(full_path):
            file_paths.append(full_path)

    return file_paths


def main():
    file_paths = []
    path = args.path
    if os.path.isfile(path):
        file_paths.append(path)
    elif os.path.isdir(path):
        file_paths = get_file_paths(path)

    parse_all(file_paths)


main()
