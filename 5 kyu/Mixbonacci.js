const fib = (n) => {
	const sequence = [0, 1];
	while (sequence.length < n + 2) {
		const length = sequence.length;
		sequence.push(sequence[length - 1] + sequence[length - 2]);
	}
	return sequence[sequence.length - 2];
};

const pad = (n) => {
	const sequence = [1, 1, 1];
	while (sequence.length < n + 3) {
		const length = sequence.length;
		sequence.push(sequence[length - 2] + sequence[length - 3]);
	}
	return sequence[sequence.length - 3];
};

const jac = (n) => {
	const sequence = [0, 1];
	while (sequence.length < n + 2) {
		const length = sequence.length;
		sequence.push(sequence[length - 1] + sequence[length - 2] * 2);
	}
	return sequence[sequence.length - 2];
};

const pel = (n) => {
	const sequence = [0, 1];
	while (sequence.length < n + 2) {
		const length = sequence.length;
		sequence.push(sequence[length - 1] * 2 + sequence[length - 2]);
	}
	return sequence[sequence.length - 2];
};

const tri = (n) => {
	const sequence = [0, 0, 1];
	while (sequence.length < n + 3) {
		const length = sequence.length;
		sequence.push(sequence[length - 1] + sequence[length - 2] + sequence[length - 3]);
	}
	return sequence[sequence.length - 3];
}

const tet = (n) => {
	const sequence = [0, 0, 0, 1];
	while (sequence.length < n + 4) {
		const length = sequence.length;
		sequence.push(sequence[length - 1] + sequence[length - 2] + sequence[length - 3] + sequence[length - 4]);
	}
	return sequence[sequence.length - 4];
}

const sequences = {
    fib: {
        func: fib,
        count: 0,
    },
    pad: {
        func: pad,
        count: 0,
    },
    jac: {
        func: jac,
        count: 0,
    },
    pel: {
        func: pel,
        count: 0,
    },
    tri: {
        func: tri,
        count: 0,
    },
    tet: {
        func: tet,
        count: 0,
    }
}

const mixbonacci = (pattern, length) => {
    if (length == 0 || pattern.length == 0) return [];

    const newPattern = pattern;
    if (length > pattern.length)
    const originalLength = pattern.length;

    while(newPattern.length < length) {
        newPattern.push(newPattern[newPattern.length - 1 - originalLength])
    }
}
