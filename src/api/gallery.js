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
export async function getAlums(galleryId) {
	try {
		const response = await myAxios(`api/gallery/albums/${galleryId}`);
		return response;
	} catch (error) {
		throw error;
	}
}
export async function postAlbum(form) {
	try {
		const response = await myAxios(`api/gallery/album/create`, {
			method: 'POST',
			data: { form },
		});
		return response;
	} catch (error) {
		throw error;
	}
}
export async function postPhotos(form) {
	try {
		const response = await myAxios(`api/gallery/photos`, {
			method: 'POST',
			data: { form },
		});
		return response;
	} catch (error) {
		throw error;
	}
}
