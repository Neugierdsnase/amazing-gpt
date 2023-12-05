import type { GPTInfoType } from "../types/gpt";
import sql from "../db";

export async function load() {
	const gpts =
		await sql`SELECT id, name, author, description, image, slug FROM gpt_entries;` as Partial<
			GPTInfoType
		>[];

	return {
		gpts,
	};
}
