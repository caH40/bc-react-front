import React from 'react';
import classes from './Button.module.css';

const Button = ({ getClick, children, type, targetClass, addClass }) => {
	let buttonClass = targetClass ? `${classes.button} ${classes[targetClass]}` : classes.button;
	buttonClass = addClass ? `${buttonClass} ${classes[addClass]}` : buttonClass;
	return (
		<button
			className={buttonClass}
			onClick={e => {
				e.stopPropagation();
				getClick(e);
			}}
			type={type}>
			{children}
		</button>
	);
};

export default Button;
