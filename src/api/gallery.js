import { myAxios } from './axios';

export async function getGalleries() {
	try {
		const response = await myAxios(`api/galleries`);
		return response;
	} catch (error) {
		throw error;
	}
}
export async function postGallery(form) {
	try {
		const response = await myAxios(`api/gallery/create`, { method: 'POST', data: { form } });
		return response;
	} catch (error) {
		throw error;
	}
}
