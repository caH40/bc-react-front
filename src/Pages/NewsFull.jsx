import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { getNewsOne } from '../api/news';
import NewsInteractive from '../Components/NewsInteractive/NewsInteractive';

const NewsFull = () => {
	const [news, setNews] = useState({});
	const { newsId } = useParams();

	useEffect(() => {
		getNewsOne(newsId).then(data => setNews(data));
	}, [newsId]);
	return (
		<>
			{news._id ? (
				<div className="container__news">
					<Helmet>
						<meta name="description" content={`Описание новости, события ${news.newsTitle}`} />
						<meta property="og:title" content={news.newsTitle} />
						<meta
							property="og:description"
							content={`Описание новости, события "${news.newsTitle}"`}
						/>
						<meta property="og:image" content="/images/b.jpg" />
					</Helmet>
					<h2 className="title__page title__page__news">{news.newsTitle}</h2>
					<div className="news__date">{new Date(news.date).toLocaleString()}</div>
					<img className="news__img" src={news.newsImage} alt={news.newsTitle} />
					<div className="news__text" dangerouslySetInnerHTML={{ __html: news.newsText }}></div>
					<NewsInteractive newsOne={news} />
				</div>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default NewsFull;
