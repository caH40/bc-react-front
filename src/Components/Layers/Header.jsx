import React from 'react';

import classes from './Header.module.css';
import Navbar from '../UI/Navbar/Navbar';
import { Adaptive } from '../../Hoc/Adaptive';

import NavbarMobile from '../UI/NavbarMobile/NavbarMobile';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className="container">
				<div className={classes.inner}>
					<div>
						<img className={classes.logo} src="./images/icons/logo.svg" alt="Logo" />
					</div>
					<div className={classes.navbar}>
						<Adaptive sizeScreen="lg">
							<Navbar />
						</Adaptive>
						<Adaptive sizeScreen="lg" visible={true}>
							<NavbarMobile />
						</Adaptive>
						<div className="authorization"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
