import React from 'react';
import classes from './TextArea.module.css';
const TextArea = ({ value, setForm, title }) => {
	return (
		<div className={classes.box__textarea}>
			<h2 className={classes.box__title}>{title}</h2>
			<textarea
				value={value}
				onChange={e => setForm(prev => ({ ...prev, textBody: e.target.value }))}
				className={classes.textarea}
			/>
		</div>
	);
};

export default TextArea;
