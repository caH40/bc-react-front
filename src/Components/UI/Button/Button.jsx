import React from 'react';
import classes from './Button.module.css';

const Button = ({ getClick, children }) => {
	return (
		<button className={classes.button} onClick={() => getClick()}>
			{children}
		</button>
	);
};

export default Button;
