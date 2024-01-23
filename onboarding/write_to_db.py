import argparse
import asyncio
import os

import asyncpg
from dotenv import load_dotenv
from parse_html import GptRecord

# Create the argument parser
parser = argparse.ArgumentParser(description="Load environment variables.")

# Add the flag for production
parser.add_argument("--prod", action="store_true", help="Load production environment")

# Add the flag for force update
parser.add_argument(
    "--force", action="store_true", help="Force update on existing GPTs"
)

# Add the argument for the path
parser.add_argument("path", type=str, help="Path to a directory or a file")

# Parse the arguments
args = parser.parse_args()

if args.prod:
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
    file_paths = []
    path = args.path
    if os.path.isfile(path):
        file_paths.append(path)
    elif os.path.isdir(path):
        file_paths = get_file_paths(path)

    connection = await connect()

    for file in file_paths:
        with open(file, "r") as f:
            json_string = f.read()
            gpt_info = GptRecord.from_json(json_string)

            if await gpt_exists(connection, gpt_info.gpt_id):
                if args.force:
                    print(
                        f"! > Updating {gpt_info.name.display} by {gpt_info.author.name}"
                    )
                    await update_gpt(connection, gpt_info)
                else:
                    print(
                        f"Skipping {gpt_info.name.display} by {gpt_info.author.name} as it already exists. To force update, use --force"
                    )
            else:
                await create_gpt(connection, gpt_info)

    await connection.close()
    print("Connection closed")


asyncio.run(main())
