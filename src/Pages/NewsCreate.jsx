import React from 'react';
import HNewsCreate from '../Components/Helmets/HNewsCreate';
import Button from '../Components/UI/Button/Button';

import classes from './PagesCss/NewsCreate.module.css';

const NewsCreate = () => {
	return (
		<section className={classes.wrapper}>
			<HNewsCreate />
			<h1 className={classes.title}>Создание новости для главной страницы сайта</h1>
			<form className={classes.form}>
				<div className={classes.inner__picture}>
					<div className={classes.block__picture}>
						<div className={classes.box__input}>
							<h2 className={classes.box__title}>Заголовок новости:</h2>
							<input className={classes.input} type="text" />
						</div>
						<div className={classes.box__input}>
							<h2 className={classes.box__title}>Картинка для новости:</h2>
							<Button>Выбрать файл</Button>
						</div>
					</div>
					<div className={classes.block__picture}>
						<div className={classes.box__img}>
							<img className={classes.img} src="/images/transparent800.png" alt="news" />
						</div>
					</div>
				</div>
				<div className={classes.box__textarea}>
					<h2 className={classes.box__title}>Текст новости:</h2>
					<textarea className={classes.textarea} />
				</div>
				<div className={classes.box__input}>
					<h2 className={classes.box__title}>Сохранение новости на сервере!</h2>
					<Button>Отправить</Button>
				</div>
			</form>
		</section>
	);
};

export default NewsCreate;
