import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getModal } from '../../../redux/features/modalSlice';

import classes from './UserAccount.module.css';

const UserAccount = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.checkAuth.value);
	const navigate = useNavigate();

	const getClick = () => {
		if (isAuth) {
			navigate('/profile');
		} else {
			dispatch(getModal({ component: 'NeedAuthentication' }));
		}
	};
	return (
		<>
			<img className={classes.img} src="./images/avatar.svg" alt="avatar" onClick={getClick} />
		</>
	);
};

export default UserAccount;
