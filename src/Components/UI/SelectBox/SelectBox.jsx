import React from 'react';
import Checkmark from '../Checkmark/Checkmark';

import classes from './SelectBox.module.css';

const SelectBox = ({ title, setForm, form, keyObject, values, boxStyle }) => {
	return (
		<div className={classes.box__input} style={boxStyle}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
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
				<Checkmark isCompleted={form[keyObject]} />
			</div>
		</div>
	);
};

export default SelectBox;
