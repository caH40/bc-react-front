import { myAxios } from './axios';

export async function getUser() {
	try {
		const response = await myAxios({ url: `/api/user` });
		return response;
	} catch (error) {
		console.log(error);
	}
}
