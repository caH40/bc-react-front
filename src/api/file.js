import axios from 'axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getFile(url) {
	try {
		const response = await axios.get(`${server}${url}`, { responseType: 'blob' });
		return response.data;
	} catch (error) {
		console.log(error);
	}
}
