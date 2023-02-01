import React from 'react';
import { useSelector } from 'react-redux';
import ActivateAccount from '../Authorization/ActivateAccount';
import Authentication from '../Authorization/Authentication';
import Registration from '../Authorization/Registration';

const ModalProvider = () => {
	const modal = useSelector(state => state.modal.value);

	return (
		<>
			{modal.component === 'Authentication' ? <Authentication /> : undefined}
			{modal.component === 'Registration' ? <Registration /> : undefined}
			{modal.component === 'Registered' ? <ActivateAccount email={modal.email} /> : undefined}
		</>
	);
};

export default ModalProvider;
