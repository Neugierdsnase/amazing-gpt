import type { GPTInfoType } from "../types/gpt";
import type { UuidType } from "../types/util";
import _ from "lodash";

export const isUuid = (uuid: string | UuidType): UuidType => {
	if (
		/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi
			.test(uuid)
	) {
		return uuid as UuidType;
	}

	throw new Error("Invalid UUID");
};

export const getTagsFromGpts = (gpts: GPTInfoType[]): string[] => {
	const tags = gpts.map((gpt) => gpt.tags).flat();

	return tags;
};

export const getUniqueTags = (
	tags: (string | undefined)[] | undefined,
): string[] => {
	const filteredTags = tags?.filter(Boolean) as string[] ?? [];

	if (!filteredTags || filteredTags.length === 0) {
		return [];
	}

	return _.uniq(filteredTags);
};
