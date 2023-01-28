import axios from 'axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getEvents() {
	try {
		const response = await axios.get(`${server}/api/events`);
		return response.data.events;
	} catch (error) {
		console.log(error);
	}
}
