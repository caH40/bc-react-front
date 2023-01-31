import React from 'react';
import { useSelector } from 'react-redux';
import Authentication from '../Modals/Authorization/Authentication';
import Registration from '../Modals/Authorization/Registration';
import Message from '../Modals/Message';

const Modals = () => {
	const modal = useSelector(state => state.modal.value.component);

	return (
		<>
			{modal === 'Authentication' ? <Authentication /> : undefined}
			{modal === 'Registration' ? <Registration /> : undefined}
			{modal === 'UnAuthentication' ? <Message>Выход из авторизации...</Message> : undefined}
			{modal === 'Logout' ? 'Logout' : undefined}
			{modal === 'NeedAuthentication' ? <Message>Необходима авторизация</Message> : undefined}
		</>
	);
};

export default Modals;
