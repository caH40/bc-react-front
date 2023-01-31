import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth } from '../../../redux/features/authSlice';
import { getModal } from '../../../redux/features/modalSlice';

import classes from './Login.module.css';

const Login = ({ isAuth }) => {
	const dispatch = useDispatch();

	const srcIcon = isAuth ? './images/icons/logout.svg' : './images/icons/login.svg';

	const getClick = () => {
		if (isAuth) {
			console.log('Удаление токена из localStorage');
			dispatch(getAuth(false));
		} else {
			dispatch(getModal({ component: 'Authentication' }));
		}
	};
	return (
		<div className={classes.box} onClick={getClick}>
			<img src={srcIcon} alt="login" />
		</div>
	);
};

export default Login;
