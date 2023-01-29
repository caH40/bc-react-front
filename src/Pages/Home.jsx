import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { postLikeNews } from '../api/likes';
import { getNews } from '../api/news';
import News from '../Components/NewsCard/NewsCard';
import Webcam from '../Components/Webcam/Webcam';

const Home = () => {
	const [news, setNews] = useState([]);
	const likes = useSelector(state => state.likesNews.value);

	useEffect(() => {
		getNews().then(data => setNews(data));
	}, []);

	useEffect(() => {
		if (!likes.action) return;
		postLikeNews(likes);
	}, [likes]);

	return (
		<section className="home">
			<h3 className="title__page">Новости, события и анонсы мероприятий. </h3>
			{news ? (
				<div className="main__inner">
					<News news={news} />
					<Webcam />
				</div>
			) : (
				'Loading...'
			)}
		</section>
	);
};

export default Home;
