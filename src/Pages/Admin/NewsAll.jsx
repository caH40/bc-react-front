import React, { useEffect, useState } from 'react';
import { getNewsEdit } from '../../api/news';
import HNewsEdit from '../../Components/Helmets/HNewsEdit';
import TableNews from '../../Components/Table/News/TableNews';

import classes from '../PagesCss/NewsAll.module.css';

const NewsAll = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		getNewsEdit().then(data => {
			setNews(data);
		});
	}, []);

	return (
		<section className={classes.wrapper}>
			<HNewsEdit />
			<h2 className={classes.title}>Таблица выбора новости для редактирования</h2>
			<TableNews news={news} />
		</section>
	);
};

export default NewsAll;
