function recycle(array) {
	const bins = {
		paper: [],
		glass: [],
		organic: [],
		plastic: [],
	};

	for (let i = 0; i < array.length; i++) {
		const { type, material, secondMaterial } = array[i];
		bins[material].push(type);
		if (secondMaterial) bins[secondMaterial].push(type);
	}

	return Object.values(bins);
}
