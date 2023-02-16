import { myAxios } from './axios';

export async function postEvent(event) {
	try {
		const response = await myAxios({ method: 'POST', url: '/api/event', data: { event } });
		return response;
	} catch (error) {
		console.log(error);
	}
}
export async function postResults(results) {
	try {
		const response = await myAxios({ method: 'POST', url: '/api/protocol', data: { results } });
		return response;
	} catch (error) {
		console.log(error);
	}
}
