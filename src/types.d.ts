import { ANIVABLE_TAGS } from "./constans";

export type Tags = keyof typeof ANIVABLE_TAGS;

export type Post = {
	id: string;
	tags: Tags[];
	edited: boolean;
	createdAt: Date;
};
