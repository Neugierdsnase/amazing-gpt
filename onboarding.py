import os
import sys
import json
import re
import asyncio
from datetime import datetime

from dotenv import load_dotenv
from bs4 import BeautifulSoup
import asyncpg

# load env from correct file based on command line arg
if len(sys.argv) > 1 and sys.argv[1] == "prod":
    load_dotenv(".env.production")
else:
    load_dotenv(".env.development")


def get_file_paths(directory_path):
    if not os.path.isdir(directory_path):
        raise FileNotFoundError("Directory not found")

    file_paths = []
    for entry in os.listdir(directory_path):
        full_path = os.path.join(directory_path, entry)
        if os.path.isfile(full_path):
            file_paths.append(full_path)

    return file_paths


class Author:
    def __init__(self, name, url):
        self.name = name
        self.url = url


class Name:
    def __init__(self, display, sort):
        self.display = display
        self.sort = sort


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
        force_update,
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
        self.force_update = force_update
        self.ytshorturl = ytshorturl


def parse(file_paths):
    gpt_infos = []

    for file_path in file_paths:
        print(f"Parsing {file_path}...")
        with open(file_path, "r", encoding="utf-8") as file:
            html = file.read()

        soup = BeautifulSoup(html, "html.parser")

        url = soup.select_one(
            "a.flex.items-center.rounded-lg.bg-green-600.px-4.py-2.font-medium.text-white.transition"
        )
        slug = url["href"].split("next=/g/")[-1] if url else None
        gpt_id = slug.replace("-", "_")
        image = soup.select_one(".gizmo-shadow-stroke > img")["src"]
        display_name = soup.select_one("div.text-center.text-2xl.font-medium").text
        # remove all special characters and spaces
        sort_name = re.sub(r"[^a-z0-9]", "", display_name.lower().strip())
        name = Name(display_name, sort_name)
        description = soup.select_one(
            "div.max-w-md.text-center.text-xl.font-normal.text-token-text-secondary"
        ).text
        author = soup.select_one("a.underline")

        if author:
            author_text = (author.text)[3:].strip()
            author_name = author_text[3:].strip()
            author_url = author["href"]
            author = Author(author_name, author_url)
        else:
            author_text = (soup.select_one(".text-sm.text-token-text-tertiary").text)[
                3:
            ].strip()
            author_name = author_text[3:].strip()
            fallback_url_element = soup.select_one("span#author-url")
            fallback_url = fallback_url_element.text if fallback_url_element else None
            author = Author(author_name, fallback_url)

        tags_element = soup.select_one("span#gpt-tags")
        tags = tags_element.text.split(",") if tags_element else []
        added = datetime.now()
        updated = datetime.now()

        curatorsnotes_element = soup.select_one("div#curators-notes")
        curatorsnotes = (
            "".join(str(child) for child in curatorsnotes_element.children)
            if curatorsnotes_element
            else None
        )
        curatorsrating_element = soup.select_one("input#curators-rating")
        curatorsrating = (
            curatorsrating_element["value"] if curatorsrating_element else None
        )

        ytshorturl_element = soup.select_one("span#ytshorturl")
        ytshorturl = ytshorturl_element.text if ytshorturl_element else None

        force_update_element = soup.select_one("div#force-update")
        force_update = bool(force_update_element)

        print(f"Parsed {display_name} from {author.name}.\n")

        gpt_infos.append(
            GptRecord(
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
                force_update,
                ytshorturl,
            )
        )

    return gpt_infos


async def connect():
    try:
        # Connect to the database
        # Using env vars
        connection = await asyncpg.connect(
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            host=os.getenv("DB_HOST"),
            database="gpts",
            ssl="require",
        )

        print("Connected to database")
        return connection
    except Exception as e:
        print(f"Connection error: {e}")
        raise


# Example of how to use the connect function
# asyncio.run(connect())


async def create_gpt(connection, gpt: GptRecord):
    sql = """
        INSERT INTO gpt_entries (id, description, tags, added, updated, slug, image, authorname, authorurl, displayname, sortname, curatorsnotes, curatorsrating, ytshorturl) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
    """

    await connection.execute(
        sql,
        gpt.gpt_id,
        gpt.description,
        ",".join(gpt.tags),
        gpt.added,
        gpt.updated,
        gpt.slug,
        gpt.image,
        gpt.author.name,
        gpt.author.url,
        gpt.name.display,
        gpt.name.sort,
        gpt.curatorsnotes,
        gpt.curatorsrating,
        gpt.ytshorturl,
    )


async def update_gpt(connection, gpt: GptRecord):
    sql = """
    UPDATE gpt_entries SET description = $2, authorname = $3, authorurl = $4, displayname = $5, sortname = $6, curatorsnotes = $7, curatorsrating = $8, ytshorturl = $9 WHERE id = $1;
    """

    await connection.execute(
        sql,
        gpt.gpt_id,
        gpt.description,
        gpt.author.name,
        gpt.author.url,
        gpt.name.display,
        gpt.name.sort,
        gpt.curatorsnotes,
        gpt.curatorsrating,
        gpt.ytshorturl,
    )


async def gpt_exists(connection, gpt_id):
    sql = """
        SELECT EXISTS(SELECT 1 FROM gpt_entries WHERE id = $1);
    """

    return await connection.fetchval(sql, gpt_id)


async def main():
    directory_path = "onboarding/content"
    file_paths = get_file_paths(directory_path)
    gpt_infos = parse(file_paths)

    connection = await connect()

    for gpt_info in gpt_infos:
        if await gpt_exists(connection, gpt_info.gpt_id):
            if gpt_info.force_update:
                print(f"Updating {gpt_info.name.display} by {gpt_info.author.name}")
                await update_gpt(connection, gpt_info)
            else:
                print(f"Skipping {gpt_info.name.display} by {gpt_info.author.name}")
            continue
        await create_gpt(connection, gpt_info)

    await connection.close()
    print("Connection closed")


asyncio.run(main())
