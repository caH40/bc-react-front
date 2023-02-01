import axios from 'axios';

const API_URL = process.env.REACT_APP_SERVER_EXPRESS;

export const myAxios = axios.create({
	//что бы куки цеплялись автоматически
	withCredentials: true,
	baseURL: API_URL,
});

myAxios.interceptors.request.use(config => {
	config.headers.Authorization = 'Bearer sdsdsd';
	// config.headers.Authorization = ` Bearer ${localStorage.getItem('tokenBikeCaucasus')}`
	return config;
});
