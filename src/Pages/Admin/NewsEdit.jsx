import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsOne } from '../../api/news';
import HNewsEdit from '../../Components/Helmets/HNewsEdit';

import classes from '../PagesCss/NewsEdit.module.css';

const NewsEdit = () => {
	const [newsOne, setNewsOne] = useState([]);

	const { newsId } = useParams();

	useEffect(() => {
		getNewsOne(newsId).then(data => {
			setNewsOne(data);
		});
	}, [newsId]);

	console.log(newsOne);
	return (
		<section className={classes.wrapper}>
			<HNewsEdit />
			<h2 className={classes.title}>Редактирование новости</h2>
		</section>
	);
};

export default NewsEdit;
