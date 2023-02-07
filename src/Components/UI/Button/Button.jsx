import React from 'react';
import classes from './Button.module.css';

const Button = ({ getClick, children, type }) => {
	return (
		<button className={classes.button} onClick={e => getClick(e)} type={type}>
			{children}
		</button>
	);
};

export default Button;
