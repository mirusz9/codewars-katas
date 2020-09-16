function dup(s) {
	const result = [];

	for (let i = 0; i < s.length; i++) {
		let lastChar = '';

		result.push(
			s[i].split('').reduce((acc, curr) => {
				if (curr !== lastChar) {
					acc += curr;
					lastChar = curr;
				}
				return acc;
			}, '')
		);
	}
	
	return result;
}
