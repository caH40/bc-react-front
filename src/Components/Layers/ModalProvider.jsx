import React from 'react';
import { useSelector } from 'react-redux';
import ActivateAccount from '../Authorization/ActivateAccount';
import Authorization from '../Authorization/Authorization';
import Registration from '../Authorization/Registration';

const ModalProvider = () => {
	const modal = useSelector(state => state.modal.value);

	return (
		<>
			{modal.component === 'Authentication' ? <Authorization /> : undefined}
			{modal.component === 'Registration' ? <Registration /> : undefined}
			{modal.component === 'Registered' ? <ActivateAccount email={modal.email} /> : undefined}
		</>
	);
};

export default ModalProvider;
