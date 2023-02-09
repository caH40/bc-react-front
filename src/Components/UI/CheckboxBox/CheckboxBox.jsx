import React from 'react';

import classes from './CheckboxBox.module.css';

const CheckboxBox = ({ title, setForm, form, keyObject }) => {
	return (
		<div className={classes.box__input}>
			<h2 className={classes.box__title}>{title}</h2>
			<input
				form={form[keyObject]}
				onChange={e => setForm(prev => ({ ...prev, [keyObject]: e.target.value }))}
				className={classes.input}
				name="title"
			/>
		</div>
	);
};

export default CheckboxBox;
