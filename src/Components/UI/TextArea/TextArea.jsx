import React from 'react';
import Checkmark from '../Checkmark/Checkmark';
import classes from './TextArea.module.css';
const TextArea = ({ form, setForm, title, keyObject, boxStyle }) => {
	return (
		<div className={classes.box__textarea} style={boxStyle}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<textarea
					value={form[keyObject]}
					onChange={e => setForm(prev => ({ ...prev, [keyObject]: e.target.value }))}
					className={classes.textarea}
				/>
				<Checkmark isCompleted={form[keyObject]} />
			</div>
		</div>
	);
};

export default TextArea;
