import axios from 'axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getNews() {
	try {
		const response = await axios.get(`${server}/api/news`);
		return response.data.news;
	} catch (error) {
		console.log(error);
	}
}
export async function getNewsOne(newsId) {
	try {
		const response = await axios.get(`${server}/api/news/${newsId}`);
		return response.data.newsOne;
	} catch (error) {
		console.log(error);
	}
}
