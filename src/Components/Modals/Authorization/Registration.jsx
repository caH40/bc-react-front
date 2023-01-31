import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ButtonAuth from '../../UI/ButtonAuth/ButtonAuth';
import InputAuth from '../../UI/InputAuth/InputAuth';
import classes from './Authentication.module.css';
import {
	validateUsername,
	validateEmail,
	validatePassword,
} from '../../../utils/validatorService';
import Modal from '../../Modal/Modal';

const Registration = () => {
	const [validationAll, setValidationAll] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });

	const onSubmit = async data => {
		console.log(data);
		setValidationAll('');
	};

	return (
		<Modal buttonClose={true}>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
				<h4 className={classes.title}>Регистрация аккаунта</h4>
				<InputAuth
					register={validateUsername(register)}
					label="Логин"
					validationText={errors.username ? errors.username.message : ''}
					input={{ id: 'username', autoComplete: 'username', type: 'text' }}
				/>
				<InputAuth
					register={validateEmail(register)}
					label="Email"
					validationText={errors.email ? errors.email.message : ''}
					input={{ id: 'email', autoComplete: 'email', type: 'text' }}
				/>
				<InputAuth
					register={validatePassword(register)}
					label="Пароль"
					labelLink="Забыли пароль?"
					validationText={errors.password ? errors.password.message : ''}
					input={{ id: 'password', autoComplete: 'current-password', type: 'password' }}
				/>
				<ButtonAuth
					label="Уже есть аккаунт?"
					labelLink="Вход!"
					linkContent="Authentication"
					validationText={validationAll}
				>
					Регистрация
				</ButtonAuth>
			</form>
		</Modal>
	);
};

export default Registration;
