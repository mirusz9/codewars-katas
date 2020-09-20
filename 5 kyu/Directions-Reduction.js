// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr) {
	const opposites = {
		NORTH: 'SOUTH',
		SOUTH: 'NORTH',
		WEST: 'EAST',
		EAST: 'WEST',
	};

	const reduced = [...arr];

	w: while (true) {
		for (let i = 0; i < reduced.length - 1; i++) {
			const elem1 = reduced[i];
			const elem2 = reduced[i + 1];
			if (opposites[elem1] === elem2) {
				reduced.splice(i, 2);
				continue w;
			}
		}
		break;
	}

	return reduced;
}
