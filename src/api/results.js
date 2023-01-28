import axios from 'axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getResults(eventId) {
	try {
		const response = await axios.get(`${server}/api/results?id=${eventId}`);
		return response.data.results;
	} catch (error) {
		console.log(error);
	}
}

export async function getResultsAthlete(athlete) {
	try {
		const response = await axios.get(`${server}/api/athlete/results?athlete=${athlete}`);
		return response.data.results;
	} catch (error) {
		console.log(error);
	}
}
