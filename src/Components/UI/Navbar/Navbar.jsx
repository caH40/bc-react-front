import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	const activeLink = ({ isActive }) => {
		return isActive ? `${classes.link} ${classes.activeLink}` : classes.link;
	};
	return (
		<ul className={classes.list}>
			<li className={classes.item}>
				<NavLink className={activeLink} to="/">
					Главная
				</NavLink>
			</li>
			<li className={classes.item}>
				<NavLink className={activeLink} to="/trails">
					Маршруты
				</NavLink>
			</li>
			<li className={classes.item}>
				<NavLink className={activeLink} to="/gallery">
					Галерея
				</NavLink>
			</li>
			<li className={classes.item}>
				<NavLink className={activeLink} to="/dzhilsu">
					Джилы-Су
				</NavLink>
			</li>
		</ul>
	);
};

export default Navbar;
