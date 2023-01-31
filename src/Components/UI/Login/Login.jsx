import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Login.module.css';

const Login = () => {
	return (
		<Link to="/login">
			<div className={classes.box}>
				<img src="./images/icons/logout.svg" alt="login" />
			</div>
		</Link>
	);
};

export default Login;
