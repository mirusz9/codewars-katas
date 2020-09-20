// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

const number = (defaultValue) => (data) => {
	if (!data) return defaultValue;
	return data(defaultValue);
};

const operation = (fn) => (r) => (l) => fn(l, r);

const zero = number(0);
const one = number(1);
const two = number(2);
const three = number(3);
const four = number(4);
const five = number(5);
const six = number(6);
const seven = number(7);
const eight = number(8);
const nine = number(9);

const plus = operation((l, r) => l + r);
const minus = operation((l, r) => l - r);
const times = operation((l, r) => l * r);
const dividedBy = operation((l, r) => Math.floor(l / r));

// you can do
// three(times(four())) 12