import React from 'react';
import { Link } from 'react-router-dom';

import classes from './UserAccount.module.css';

const UserAccount = () => {
	return (
		<Link to="/profile">
			<img className={classes.img} src="./images/avatar.svg" alt="avatar" />
		</Link>
	);
};

export default UserAccount;
