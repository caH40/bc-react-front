import React, { useState } from 'react';

import Burger from '../Burger/Burger';
import Navbar from '../Navbar/Navbar';
import classes from './NavbarMobile.module.css';

const NavbarMobile = () => {
	const [isBurgerClicked, setIsBurgerClicked] = useState(false);
	if (isBurgerClicked) {
		document.body.setAttribute('class', 'fixed');
	} else {
		document.body.removeAttribute('class', 'fixed');
	}

	const menuClass = isBurgerClicked
		? `${classes.menu} ${classes.visible}`
		: `${classes.menu} ${classes.hidden}`;

	const updateMenu = () => {
		setIsBurgerClicked(prev => !prev);
	};

	return (
		<nav>
			<Burger isBurgerClicked={isBurgerClicked} updateMenu={updateMenu} />
			<div className={menuClass}>
				<Navbar isMobile={true} updateMenu={updateMenu} />
			</div>
		</nav>
	);
};

export default NavbarMobile;
