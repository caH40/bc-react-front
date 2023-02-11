import { myAxios } from './axios';

export async function postCommentNews(comment, newsId) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: '/api/commentnews-post',
			data: { comment, newsId },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function getComments(newsId) {
	try {
		const response = await myAxios({
			method: 'get',
			url: `/api/comments-get/${newsId}`,
			data: { newsId },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
