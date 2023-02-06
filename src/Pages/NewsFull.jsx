import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getNewsOne } from '../api/news';
import HNewsFull from '../Components/Helmets/HNewsFull';
import NewsInteractive from '../Components/NewsInteractive/NewsInteractive';
import classes from './PagesCss/NewsFull.module.css';

const NewsFull = () => {
	const [news, setNews] = useState({});
	const { newsId } = useParams();

	useEffect(() => {
		getNewsOne(newsId).then(data => setNews(data));
	}, [newsId]);
	return (
		<>
			{news._id ? (
				<div className={classes.container}>
					<HNewsFull news={news} />
					<h1 className={classes.title}>{news.newsTitle}</h1>
					<div className={classes.date}>{new Date(news.date).toLocaleString()}</div>
					<img className={classes.img} src={news.newsImage} alt={news.newsTitle} />
					<div className={classes.text} dangerouslySetInnerHTML={{ __html: news.newsText }}></div>
					<NewsInteractive newsOne={news} />
				</div>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default NewsFull;
