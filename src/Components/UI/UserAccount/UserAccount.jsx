import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getModal } from '../../../redux/features/modalSlice';

import classes from './UserAccount.module.css';

const UserAccount = () => {
	const dispatch = useDispatch();
	const getClick = () => {
		dispatch(getModal({ component: 'NeedAuthentication' }));
	};
	return (
		<>
			{/* <Link to="/profile"> */}
			<img className={classes.img} src="./images/avatar.svg" alt="avatar" onClick={getClick} />
			{/* </Link> */}
		</>
	);
};

export default UserAccount;
