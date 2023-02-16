import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { changeTitlesEvent, changeTitlesResults } from '../../../utils/titles';

import ButtonInput from '../ButtonInput/ButtonInput';
import Checkmark from '../Checkmark/Checkmark';

import classes from './InputFileXlsBox.module.css';

export const InputFileXlsBox = ({
	results,
	setResults,
	setEvent,
	event,
	title,
	boxClass,
	keyObject,
	accept,
}) => {
	const [file, setFile] = useState({});

	const getFile = event => {
		const fileRow = event.target.files[0];
		setFile(fileRow);
		const reader = new FileReader();
		reader.onload = function (e) {
			const data = e.target.result;
			const book = XLSX.read(data, { type: 'binary' });
			const resultsRow = book.Sheets['Результаты'];
			const eventRow = book.Sheets['Описание'];

			const resultsJSON = XLSX.utils.sheet_to_json(resultsRow, { range: 0, raw: false });
			const eventJSON = XLSX.utils.sheet_to_json(eventRow, { range: 0, raw: false });

			setResults(changeTitlesResults(resultsJSON));
			setEvent(changeTitlesEvent(eventJSON));
		};
		reader.readAsBinaryString(fileRow);
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
				<Checkmark isCompleted={results} />
			</div>
		</div>
	);
};
