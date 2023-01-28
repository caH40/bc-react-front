import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getFile } from '../api/file';
import { postLikeNews } from '../api/likes';
import { getNews } from '../api/news';
import News from '../Components/NewsCard/NewsCard';
import Webcam from '../Components/Webcam/Webcam';

const Home = () => {
	const [screenShot, setScreenShot] = useState('');
	const [news, setNews] = useState([]);
	const likes = useSelector(state => state.likesNews.value);

	useEffect(() => {
		getFile('/api/screenshot').then(data => {
			const imageCamera = URL.createObjectURL(data);
			setScreenShot(imageCamera);
		});
	}, []);

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
			<div className="main__inner">
				<News news={news} />
				<Webcam screenShot={screenShot} />
			</div>
		</section>
	);
};

export default Home;
