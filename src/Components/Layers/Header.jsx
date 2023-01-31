import React from 'react';

import classes from './Header.module.css';
import Navbar from '../UI/Navbar/Navbar';
import { Adaptive } from '../../Hoc/Adaptive';

import NavbarMobile from '../UI/NavbarMobile/NavbarMobile';
import UserAccount from '../UI/UserAccount/UserAccount';

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
							<div className={classes.item}>
								<UserAccount />
							</div>
						</Adaptive>
						<Adaptive sizeScreen="lg" visible={true}>
							<NavbarMobile />
						</Adaptive>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
