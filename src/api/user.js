import { myAxios } from './axios';

export async function getUser() {
	try {
		const response = await myAxios({ url: `/api/user` });
		return response;
	} catch (error) {
		console.log(error);
	}
}
export async function getUsers() {
	try {
		const response = await myAxios({ url: `/api/users` });
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function postUserData(formUser) {
	try {
		const response = await myAxios({ method: 'POST', url: `/api/user-post`, data: { formUser } });
		return response;
	} catch (error) {
		console.log(error);
	}
}
