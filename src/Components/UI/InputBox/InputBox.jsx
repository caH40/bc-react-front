import React from 'react';

import classes from './InputBox.module.css';

const InputBox = ({ value, setForm, title }) => {
	return (
		<div className={classes.box__input}>
			<h2 className={classes.box__title}>{title}</h2>
			<input
				value={value}
				onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
				className={classes.input}
				type="text"
				name="title"
			/>
		</div>
	);
};

export default InputBox;
