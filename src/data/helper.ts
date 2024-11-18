export const LIMIT = 20;

export function displayTitle(str: string, maxLength = 150) {
	if (str.length > maxLength) {
		return str.slice(0, maxLength) + "...";
	}
	return str;
}

export interface PageInfo {
	nextPage: boolean;
	cursor: string;
}
