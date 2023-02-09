import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavbarAdmin.module.css';

const NavbarAdmin = () => {
	const liClass = ({ isActive }) => (isActive ? classes.activeLink : '');
	return (
		<nav className={classes.nav}>
			<h2 className={classes.title__list}>Новости</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink to="create-news" className={liClass}>
						Создание;
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="edit-news" className={liClass}>
						Редактирование;
					</NavLink>
				</li>
			</ul>
			<h2 className={classes.title__list}>Маршруты</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink to="/" className={liClass}>
						Создание;
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="/" className={liClass}>
						Редактирование;
					</NavLink>
				</li>
			</ul>
			<h2 className={classes.title__list}>Пользователи</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink to="/" className={liClass}>
						Управление правами;
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarAdmin;
