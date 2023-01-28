export function dateToNumber(date) {
	try {
		if (!/\d\d\.\d\d\.\d{4}/.test(date)) return date;
		const dateArr = date.split('.');
		return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]).getTime();
	} catch (error) {
		console.log(error);
	}
}
