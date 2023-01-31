import React from 'react';
import Modal from '../Modal/Modal';

const Message = ({ children, timer, buttonClose }) => {
	return (
		<Modal timer={timer} buttonClose={buttonClose}>
			{children}
		</Modal>
	);
};

export default Message;
