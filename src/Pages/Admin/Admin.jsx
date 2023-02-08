import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HAdmin from '../../Components/Helmets/HAdmin';

import classes from '../PagesCss/Admin.module.css';

const Admin = () => {
	return (
		<section>
			<HAdmin />
			<h1 className={classes.title}>Страница администрирования сайтом</h1>
			<div className={classes.inner}>
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
				<Outlet />
			</div>
		</section>
	);
};

export default Admin;
