import React from 'react';

import classes from './SelectBox.module.css';

const SelectBox = ({ title, setForm, form, keyObject, values }) => {
	return (
		<div className={classes.box__input}>
			<h2 className={classes.box__title}>{title}</h2>
			<select
				className={classes.select}
				onChange={e => setForm(prev => ({ ...prev, [keyObject]: e.target.value }))}
			>
				<option className={classes.option} defaultValue={' '}></option>
				{values.map(value => (
					<option className={classes.option} value={value.name} key={value.id}>
						{value.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectBox;
