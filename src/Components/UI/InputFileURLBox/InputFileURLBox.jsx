import React from 'react';
import { reduceImage } from '../../../utils/reduce-image';
import ButtonInput from '../ButtonInput/ButtonInput';
import Checkmark from '../Checkmark/Checkmark';

import classes from './InputFileURLBox.module.css';

const InputFileURLBox = ({ form, setForm, title, keyObject, boxStyle }) => {
	const getPicture = event => {
		const file = event.target.files[0];
		if (!file) return;
		const size = Math.trunc(file.size / 8000);

		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = async () => {
			const reducedImage = await reduceImage(reader.result, 10 / 16, 350);
			setForm(prev => ({
				...prev,
				[keyObject]: { source: reducedImage, name: file.name, size },
			}));
		};
	};

	return (
		<div className={classes.box__input} style={boxStyle}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<div>
					<ButtonInput getClick={getPicture}>Выбрать файл</ButtonInput>
				</div>
				<Checkmark isCompleted={form[keyObject]?.source} />
			</div>
		</div>
	);
};

export default InputFileURLBox;
