import React from 'react';
import { useSelector } from 'react-redux';
import Authentication from '../Modals/Authorization/Authentication';
import Registration from '../Modals/Authorization/Registration';
import Message from '../Modals/Message';

const Modals = () => {
	const modal = useSelector(state => state.modal.value);

	return (
		<>
			{modal.component === 'Authentication' ? <Authentication buttonClose={true} /> : undefined}
			{modal.component === 'Registration' ? <Registration buttonClose={true} /> : undefined}
			{modal.component === 'UnAuthentication' ? (
				<Message timer={true}>Выход из авторизации...</Message>
			) : undefined}
			{modal.component === 'Logout' ? 'Logout' : undefined}
			{modal.component === 'NeedAuthentication' ? (
				<Message timer={true}>Необходима авторизация</Message>
			) : undefined}
			{modal.component === 'Registered' ? (
				<Message buttonClose={true}>
					Регистрация прошла успешно! На Вашу почту {modal.email} отправлено письмо, для активации
					аккаунта. Ссылка активна в течении трех суток.
				</Message>
			) : undefined}
		</>
	);
};

export default Modals;
