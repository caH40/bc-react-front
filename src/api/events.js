import { myAxios } from './axios';

export async function getEvents() {
	try {
		const response = await myAxios.get(`/api/events`);

		return response.data.events;
	} catch (error) {
		console.log(error);
	}
}
