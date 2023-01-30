import React, { useState } from 'react';

import Burger from '../Burger/Burger';
import classes from './NavbarMobile.module.css';

const NavbarMobile = () => {
	const [menuClass, setMenuClass] = useState(`${classes.menu} ${classes.hidden}`);
	console.log(menuClass);
	return (
		<nav>
			<Burger setMenuClass={setMenuClass} />
			<div className={menuClass}></div>
		</nav>
	);
};

export default NavbarMobile;
