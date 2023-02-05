import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
			<Helmet>
				<link rel="canonical" href="https://bike-caucasus.ru/" />
				<meta name="description" content="Лента новостей, событий и анонсов мероприятий" />
				<meta property="og:title" content="Главная страница сайта Bike-Caucasus" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://bike-caucasus.ru/" />
				<meta property="og:description" content="Лента новостей, событий и анонсов мероприятий" />
			</Helmet>
			<h1 className={classes.title}>Новости, события и анонсы мероприятий</h1>
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
