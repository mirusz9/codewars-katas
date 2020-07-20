function halvingSum(n) {
	let sum = n;
	while (Math.floor(n / 2) > 0) {
		n = Math.floor(n / 2);
		sum += n;
	}
	return sum;
}
