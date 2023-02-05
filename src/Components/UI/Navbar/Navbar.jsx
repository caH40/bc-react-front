import React from 'react';
import { NavLink } from 'react-router-dom';
import { Adaptive } from '../../../Hoc/Adaptive';
import classes from './Navbar.module.css';

const Navbar = ({ updateMenu }) => {
	const activeLink = ({ isActive }) => {
		return isActive ? `${classes.link} ${classes.activeLink}` : classes.link;
	};
	return (
		<ul className={classes.list}>
			<li className={classes.item}>
				<NavLink className={activeLink} to="/" onClick={updateMenu}>
					Главная
				</NavLink>
			</li>
			<Adaptive sizeScreen="lg" visible={true}>
				<li className={classes.item}>
					<NavLink className={activeLink} to="/webcam" onClick={updateMenu}>
						Вебкамеры
					</NavLink>
				</li>
			</Adaptive>
			<li className={classes.item}>
				<NavLink className={activeLink} to="/trails" onClick={updateMenu}>
					Маршруты
				</NavLink>
			</li>
			<li className={classes.item}>
				<NavLink className={activeLink} to="/gallery" onClick={updateMenu}>
					Галерея
				</NavLink>
			</li>
			<li className={classes.item}>
				<NavLink className={activeLink} to="/dzhilsu" onClick={updateMenu}>
					Джилы-Су
				</NavLink>
			</li>
		</ul>
	);
};

export default Navbar;
