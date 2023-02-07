import React from 'react';
import ButtonInput from '../ButtonInput/ButtonInput';

import classes from './InputFileBox.module.css';

const InputFileBox = ({ form, setForm, setPicture, title }) => {
	const getPicture = event => {
		const file = event.target.files[0];
		const size = Math.trunc(file.size / 8000);

		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = async () => {
			setPicture({ source: reader.result, name: file.name, size });
		};

		const formData = new FormData();
		formData.append('files', file);
		formData.append('title', form.title);
		formData.append('textBody', form.textBody);
		setForm(prev => ({ ...prev, source: formData }));
	};
	return (
		<div className={classes.box__input}>
			<h2 className={classes.box__title}>{title}</h2>
			<ButtonInput getClick={getPicture}>Выбрать файл</ButtonInput>
		</div>
	);
};

export default InputFileBox;
