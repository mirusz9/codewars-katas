// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

// Implemented addition
const add = (a, b) => {
	if (a.length < b.length) {
		a = a.padStart(b.length, '0');
	} else if (b.length < a.length) {
		b = b.padStart(a.length, '0');
	}

	let result = '';
	let carry = 0;

	for (let i = a.length - 1; i >= 0; i--) {
		const sum = +a[i] + +b[i] + carry;
		carry = sum > 9 ? 1 : 0;
		result = (sum % 10).toString() + result;
	}

	if (carry) result = '1' + result;

	return result;
};
