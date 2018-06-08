export const flexCenter = `
	display: flex;
	align-items: center;
	justify-content: center;
`
export function size(width, height = width) {
	if (width === undefined) throw Error('Size must be defined');
	return `
		width: ${width};
		height: ${height};
	`
}