function solve(arr) {
	arr = arr.map((x) => Math.abs(x));
	const counts = arr.reduce((counts, current) => {
		if (counts.hasOwnProperty(current)) {
			counts[current]++;
		} else {
			counts[current] = 1;
		}
		return counts
	}, {});
	return Object.keys(counts).find((key) => counts[key] === 1);
}
