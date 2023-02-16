import React, { useState } from 'react';
import TableResults from '../../Components/Table/Results/TableResults';

import { InputFileXlsBox } from '../../Components/UI/InputFileXlsBox/InputFileXlsBox';

import classes from '../PagesCss/Events.module.css';

export const Events = () => {
	const [results, setResults] = useState([]);
	const [event, setEvent] = useState({});

	const title = 'Загрузка протокола  в формате .xlsx';
	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Загрузка протоколов соревнований</h2>
			<article></article>
			<InputFileXlsBox
				results={results}
				setResults={setResults}
				event={event}
				setEvent={setEvent}
				title={title}
				keyObject={'protocol'}
				accept={'.xlsx'}
			/>
			<TableResults results={results} setResults={setResults} />
		</section>
	);
};
