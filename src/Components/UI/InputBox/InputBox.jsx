import React from 'react';

import classes from './InputBox.module.css';

const InputBox = ({ title, setForm, form, keyObject, type }) => {
	return (
		<div className={classes.box__input}>
			<h2 className={classes.box__title}>{title}</h2>
			<input
				form={form[keyObject]}
				onChange={e => setForm(prev => ({ ...prev, [keyObject]: e.target.value }))}
				className={classes.input}
				type={type}
				name="title"
			/>
		</div>
	);
};

export default InputBox;
