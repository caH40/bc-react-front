import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import classes from './Authentication.module.css';
import ButtonAuth from '../UI/ButtonAuth/ButtonAuth';
import InputAuth from '../UI/InputAuth/InputAuth';
import { validatePassword, validateUsername } from '../../utils/validatorService';
import Modal from '../Modal/Modal';

const Authentication = () => {
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
		<Modal>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
				<h4 className={classes.title}>Вход на Bike-Caucasus</h4>
				<InputAuth
					register={validateUsername(register)}
					label="Логин"
					validationText={errors.username ? errors.username.message : ''}
					input={{ id: 'username', autoComplete: 'username', type: 'text' }}
				/>
				<InputAuth
					register={validatePassword(register)}
					label="Пароль"
					labelLink="Забыли пароль?"
					validationText={errors.password ? errors.password.message : ''}
					input={{ id: 'password', autoComplete: 'current-password', type: 'password' }}
				/>
				<ButtonAuth
					label="Впервые на сайте?"
					labelLink="Создать аккаунт!"
					linkContent="Registration"
					validationText={validationAll}
				>
					Вход
				</ButtonAuth>
			</form>
		</Modal>
	);
};

export default Authentication;
