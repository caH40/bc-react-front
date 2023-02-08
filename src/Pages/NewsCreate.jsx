import React from 'react';
import HNewsCreate from '../Components/Helmets/HNewsCreate';
import FormNewsCreate from '../Components/UI/FormNewsCreate/FormNewsCreate';

import classes from './PagesCss/NewsCreate.module.css';

const NewsCreate = () => {
	return (
		<section className={classes.wrapper}>
			<HNewsCreate />
			<h1 className={classes.title}>Создание новости для главной страницы сайта</h1>
			<FormNewsCreate />
		</section>
	);
};

export default NewsCreate;
