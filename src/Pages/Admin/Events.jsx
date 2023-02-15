import React, { useState } from 'react';

import { InputFileXlsBox } from '../../Components/UI/InputFileXlsBox/InputFileXlsBox';

import classes from '../PagesCss/Events.module.css';

export const Events = () => {
	const [file, setFile] = useState({});
	const title = 'Загрузка протокола  в формате .xlsx';
	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Загрузка протоколов соревнований</h2>
			<article></article>
			<InputFileXlsBox
				file={file}
				setFile={setFile}
				title={title}
				keyObject={'protocol'}
				accept={'.xlsx'}
			/>
		</section>
	);
};
