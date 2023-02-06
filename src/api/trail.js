import axios from 'axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getTrails(filter, sort, cardsOnPage, page) {
	try {
		const response = await axios.post(`${server}/api/trails`, {
			filter,
			sort,
			cardsOnPage,
			page,
		});
		return response.data.trails;
	} catch (error) {
		console.log(error);
	}
}

export async function getTrail(trailId) {
	try {
		const response = await axios.get(`${server}/api/trail?id=${trailId}`);
		return response.data.trail;
	} catch (error) {
		console.log(error);
	}
}
