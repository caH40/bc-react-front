import { myAxios } from './axios';

export async function checkAuth() {
	try {
		const response = await myAxios({
			method: 'post',
			url: `/api/auth/refresh`,
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
