import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { postLikeNews } from '../api/likes';
import { getNews } from '../api/news';
import News from '../Components/NewsCard/NewsCard';
import Webcam from '../Components/Webcam/Webcam';
import { Adaptive } from '../Hoc/Adaptive';
import classes from './PagesCss/Home.module.css';

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
		<section className={classes.wrapper}>
			<h3 className={classes.title}>Новости, события и анонсы мероприятий. </h3>
			{news ? (
				<div className={classes.inner}>
					<News news={news} />
					<Adaptive sizeScreen="lg" visible={false}>
						<Webcam />
					</Adaptive>
				</div>
			) : (
				'Loading...'
			)}
		</section>
	);
};

export default Home;
