import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getModal } from '../../../redux/features/modalSlice';

import classes from './UserAccount.module.css';

const UserAccount = ({ isAuth }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	console.log(isAuth.user);
	const avatar = isAuth?.user?.photoProfile ? isAuth.user.photoProfile : './images/avatar.svg';
	const getClick = () => {
		if (isAuth.status) {
			navigate('/profile');
		} else {
			dispatch(getModal({ component: 'NeedAuthentication' }));
		}
	};
	return (
		<>
			<img className={classes.img} src={avatar} alt="avatar" onClick={getClick} />
		</>
	);
};

export default UserAccount;
