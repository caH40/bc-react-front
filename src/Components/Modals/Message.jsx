import React from 'react';
import Modal from '../Modal/Modal';

const Message = ({ children }) => {
	return <Modal timer={true}>{children}</Modal>;
};

export default Message;
