import React, { useState } from 'react';

import classes from './Burger.module.css';

const Burger = ({ setMenuClass }) => {
	const [burgerClass, setBurgerClass] = useState(`${classes.bar} ${classes.unClicked}`);

	const [isMenuClicked, setIsMenuClicked] = useState(false);

	const updateMenu = () => {
		if (isMenuClicked) {
			setBurgerClass(`${classes.bar} ${classes.unClicked}`);
			setMenuClass(`${classes.menu} ${classes.hidden}`);
		} else {
			setBurgerClass(`${classes.bar} ${classes.clicked}`);
			setMenuClass(`${classes.menu} ${classes.visible}`);
		}
		setIsMenuClicked(prev => !prev);
	};
	return (
		<>
			<div className={classes.burger} onClick={updateMenu}>
				<div className={burgerClass}></div>
				<div className={burgerClass}></div>
				<div className={burgerClass}></div>
			</div>
		</>
	);
};

export default Burger;
