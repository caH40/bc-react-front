import React from 'react';
import ButtonInput from '../ButtonInput/ButtonInput';
import Checkmark from '../Checkmark/Checkmark';

import classes from './InputFileTrekBox.module.css';

const InputFileTrekBox = ({ fileRef, setForm, title, boxStyle, keyObject }) => {
	const getFile = event => {
		fileRef.current = { source: event.target.files[0] };
		setForm(prev => ({ ...prev, [keyObject]: event.target.files[0].name }));
	};
	return (
		<div className={classes.box__input} style={boxStyle}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<div>
					<ButtonInput getClick={getFile} accept=".gpx, .fit, .tcx">
						Выбрать файл
					</ButtonInput>
				</div>
				<Checkmark isCompleted={fileRef.current} />
			</div>
		</div>
	);
};

export default InputFileTrekBox;
