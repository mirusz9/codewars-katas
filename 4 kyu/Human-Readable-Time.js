// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

function formatDuration(time) {
	if (time === 0) return 'now';

	// Calculating each
	let years = Math.floor(time / (60 * 60 * 24 * 365));
	let days = Math.floor((time % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
	let hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);

	// Formatting each time (plural, singular or an empty string)
	days = days > 0 ? (days > 1 ? `${days} days` : `${days} day`) : null;
	hours = hours > 0 ? (hours > 1 ? `${hours} hours` : `${hours} hour`) : null;
	minutes =
		minutes > 0
			? minutes > 1
				? `${minutes} minutes`
				: `${minutes} minute`
			: null;
	seconds =
		seconds > 0
			? seconds > 1
				? `${seconds} seconds`
				: `${seconds} second`
			: null;
	years = years > 0 ? (years > 1 ? `${years} years` : `${years} year`) : null;

	// Concating them together
	return [years, days, hours, minutes, seconds].reduceRight(
		(result, curr) => {
			// Only add if it is not 0
			if (curr) {
				// decide if should add 'and' a ',' or nothing
				switch (result.count) {
					case 0:
						result.result = curr;
						break;
					case 1:
						result.result = `${curr} and ${result.result}`;
						break;
					default:
						result.result = `${curr}, ${result.result}`;
				}
				result.count++;
			}
			return result;
		},
		{
			result: '',
			count: 0,
		}
	).result;
}

console.log(formatDuration(196424223));
