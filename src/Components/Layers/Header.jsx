import React from 'react';

import classes from './Header.module.css';
import Navbar from '../UI/Navbar/Navbar';
import { Adaptive } from '../../Hoc/Adaptive';

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
						<div className="authorization"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
