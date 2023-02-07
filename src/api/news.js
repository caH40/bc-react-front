import axios from 'axios';
import { myAxios } from './axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getNews(page, newsOnPage) {
	try {
		const response = await axios.get(`${server}/api/news/${page}/${newsOnPage}`);
		return response.data.news;
	} catch (error) {
		console.log(error);
	}
}
export async function getNewsOne(newsId) {
	try {
		const response = await axios.get(`${server}/api/newsone/${newsId}`);
		return response.data.newsOne;
	} catch (error) {
		console.log(error);
	}
}
export async function postNews(dataForm) {
	try {
		const response = await myAxios(`/api/postnews`, {
			method: 'POST',
			data: dataForm,
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
