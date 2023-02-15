import React from 'react';
import ButtonInput from '../ButtonInput/ButtonInput';
import Checkmark from '../Checkmark/Checkmark';

import classes from './InputFileXlsBox.module.css';

export const InputFileXlsBox = ({ file, setFile, title, boxClass, keyObject, accept }) => {
	const getFile = event => {
		file = { source: event.target.files[0] };
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);

		setFile(prev => ({ ...prev, [keyObject]: event.target.files[0].name }));
	};

	return (
		<div className={`${classes.box__input} ${classes[boxClass]}`}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<div>
					<ButtonInput getClick={getFile} accept={accept}>
						Выбрать файл
					</ButtonInput>
					<span className={classes.file}>{file.name}</span>
				</div>
				<Checkmark isCompleted={file} />
			</div>
		</div>
	);
};
