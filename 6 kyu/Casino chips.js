function getNumOfNotEmptyPiles(arr) {
	let notEmpty = 0;
	for (let i = 0; i < arr.length; i++) {
		notEmpty += arr[i] > 0 ? 1 : 0;
	}
	return notEmpty;
}

function getTwoTallestIndex(arr) {
	let shortest = arr[0];
	let shortestIndex = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < shortest) {
			shortest = arr[i];
			shortestIndex = i;
		}
	}
	let tallestIndexes = [0, 1, 2];
	tallestIndexes.splice(shortestIndex, 1);
	return tallestIndexes;
}

function solve(arr) {
	let steps = 0;
	while (getNumOfNotEmptyPiles(arr) >= 2) {
		const tallestIndexes = getTwoTallestIndex([...arr]);
		for (const index of tallestIndexes) {
			arr[index]--;
		}
		steps++;
	}
	return steps;
}
