import React from 'react';
import classes from './TextArea.module.css';
const TextArea = ({ form, setForm, title, keyObject, boxStyle }) => {
	return (
		<div className={classes.box__textarea} style={boxStyle}>
			<h2 className={classes.box__title}>{title}</h2>
			<textarea
				value={form[keyObject]}
				onChange={e => setForm(prev => ({ ...prev, [keyObject]: e.target.value }))}
				className={classes.textarea}
			/>
		</div>
	);
};

export default TextArea;
