import flow from 'lodash/flow';

export function lastItem(array) {
	return array.length ? array[array.length - 1] : null;
}

export function lastIndex(array) {
	return array.length - 1;
}

export function joinedValues(array) {
	return array.join(' ');
}

export function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function isMathSymbol(n) {
	return (/^(\-|\+|\*|\/)$/).test(n.toString());
}

export function concatNumbers(...digits) {
	return parseInt(
		digits.join(''),
		10
	);
}

export function modifiedLastItem(array, fn) {
	const copiedArray = [...array];
	copiedArray[lastIndex(copiedArray)] = fn(
		copiedArray[lastIndex(copiedArray)]
	);
	return copiedArray;
}

export function trimLastChar(n) {
	return (n || isNumber(n))
	? n.toString().substring(0, n.toString().length - 1)
	: '';
}

export function splitParsed(string) {
	return string.split(' ').map(value => {
		if (isNumber(value)) {
			value = parseInt(value, 10);
		}
		return value;

	}).filter(value => value !== '');
}

export const trimmedLastCharFromArray = flow(
	joinedValues,
	trimLastChar,
	splitParsed,
);
