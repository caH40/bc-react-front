import React from 'react';
import ButtonInput from '../ButtonInput/ButtonInput';

import classes from './InputFileTrekBox.module.css';

const InputFileTrekBox = ({ fileRef, setForm, title, boxStyle, keyObject }) => {
	const getFile = event => {
		fileRef.current = { source: event.target.files[0] };
		setForm(prev => ({ ...prev, [keyObject]: event.target.files[0].name }));
	};
	return (
		<div className={classes.box__input} style={boxStyle}>
			<h2 className={classes.box__title}>{title}</h2>
			<ButtonInput getClick={getFile} accept=".gpx, .fit, .tcx">
				Выбрать файл
			</ButtonInput>
		</div>
	);
};

export default InputFileTrekBox;
