export const LIMIT = 20;

export const TITLELIMIT = 128;

export function displayTitle(str: string, maxLength = 128) {
	if (str.length > maxLength) {
		return str.slice(0, maxLength) + "...";
	}
	return str;
}

export interface PageInfo {
	nextPage: boolean;
	cursor: string;
}

export enum location {
	hero = "hero",
	diff = "diff",
}
