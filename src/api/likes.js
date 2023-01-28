import axios from 'axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function postLikeNews(changesLikes) {
	try {
		const response = await axios.post(`${server}/api/likes`, { changesLikes });
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
