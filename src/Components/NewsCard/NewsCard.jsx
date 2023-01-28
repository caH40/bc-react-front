import React from 'react';
import { Link } from 'react-router-dom';

import NewsInteractive from '../NewsInteractive/NewsInteractive';
import classes from './NewsCard.module.css';

const News = ({ news }) => {
	// console.log(news[0]);
	return (
		<div className={classes.content}>
			{news.map(newsOne => (
				<div className={classes.block} key={newsOne._id}>
					<img className={classes.img} src={newsOne.newsImage} alt="news" />
					<div className={classes.box__news}>
						<div className={classes.box__text}>
							<div className={classes.truncate}>
								<h3 className={classes.title}>{newsOne.newsTitle}</h3>
								<p className={classes.text} dangerouslySetInnerHTML={{ __html: newsOne.newsText }}></p>
							</div>
							<Link to={`/news/${newsOne._id}`} className={classes.link}>
								читать далее...
							</Link>
						</div>

						<NewsInteractive newsOne={newsOne} />
					</div>
				</div>
			))}
		</div>
	);
};

export default News;
