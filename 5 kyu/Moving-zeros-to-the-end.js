// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

const moveZeros = (arr) => {
	let zeros = 0;
	arr = arr.filter((x) => {
		if (x === 0) {
			zeros++;
			return false;
		}
		return true;
	});
	return arr.concat(new Array(zeros).fill(0));
}