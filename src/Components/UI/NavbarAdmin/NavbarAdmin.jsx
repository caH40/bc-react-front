import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavbarAdmin.module.css';

const NavbarAdmin = () => {
	return (
		<nav className={classes.nav}>
			<h2 className={classes.title__list}>Новости</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<Link to="create-news">Создание;</Link>
				</li>
				<li className={classes.item}>
					<Link to="#">Редактирование;</Link>
				</li>
				<li className={classes.item}>
					<Link to="#">Удаление;</Link>
				</li>
			</ul>
			<h2 className={classes.title__list}>Маршруты</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<Link to="#">Создание;</Link>
				</li>
				<li className={classes.item}>
					<Link to="#">Редактирование;</Link>
				</li>
				<li className={classes.item}>
					<Link to="#">Удаление;</Link>
				</li>
			</ul>
			<h2 className={classes.title__list}>Пользователи</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<Link to="#">Управление правами;</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarAdmin;
