import os
import json
import asyncio
from datetime import datetime

from bs4 import BeautifulSoup
import asyncpg


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
        self, gpt_id, author, name, description, tags, added, updated, slug, image
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


def parse(file_paths):
    gpt_infos = []

    for file_path in file_paths:
        with open(file_path, "r", encoding="utf-8") as file:
            html = file.read()

        soup = BeautifulSoup(html, "html.parser")

        url = soup.select_one(
            "a.flex.items-center.rounded-lg.bg-green-600.px-4.py-2.font-medium.text-white.transition"
        )
        slug = url["href"].split("next=/g/")[-1]
        gpt_id = slug.replace("-", "_")
        image = soup.select_one(".gizmo-shadow-stroke > img")["src"]
        display_name = soup.select_one("div.text-center.text-2xl.font-medium").text
        sort_name = display_name.lower().strip().replace(" ", "_")
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
            author = Author(author_name, None)

        tags = []
        added = datetime.now()
        updated = datetime.now()

        print(f"Parsed {display_name} from {author.name}.\n")

        gpt_infos.append(
            GptRecord(
                gpt_id, author, name, description, tags, added, updated, slug, image
            )
        )

    return gpt_infos


async def connect():
    try:
        # Connect to the database
        connection = await asyncpg.connect(
            user="k8603427",
            password="4HaLxXKrl1cI",
            host="ep-still-union-32116685.eu-central-1.aws.neon.tech",
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
        INSERT INTO gpt_entries (id, author, name, description, tags, added, updated, slug, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    """

    # Serialize author and name objects to JSON
    author = json.dumps({"name": gpt.author.name, "url": gpt.author.url})
    name = json.dumps({"display": gpt.name.display, "sort": gpt.name.sort})

    await connection.execute(
        sql,
        gpt.gpt_id,
        author,
        name,
        gpt.description,
        ",".join(gpt.tags),
        gpt.added,
        gpt.updated,
        gpt.slug,
        gpt.image,
    )


async def main():
    directory_path = "onboarding/content"
    file_paths = get_file_paths(directory_path)
    gpt_infos = parse(file_paths)

    connection = await connect()

    for gpt_info in gpt_infos:
        await create_gpt(connection, gpt_info)

    await connection.close()
    print("Connection closed")


asyncio.run(main())
