import { AVAILABLE_TAGS } from "./constants";

export type AvailableTag = keyof typeof AVAILABLE_TAGS;

export type Post = {
	id: string;
	title: string;
	description: string;
	tags: Tags[];
	edited?: boolean;
	createdAt: Date;
};


