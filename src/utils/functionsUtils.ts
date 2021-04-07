export const StringArrayUtil = (array: string[]) => {
	const formatedString = array.map((item, i) =>
		i !== array.length - 1 ? item + ', ' : item
	);

	return formatedString;
};
