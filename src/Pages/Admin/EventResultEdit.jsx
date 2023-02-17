import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getResult } from '../../api/results';
import TableResults from '../../Components/Table/Results/TableResults';

import classes from '../PagesCss/EventResultEdit.module.css';

export const EventResultEdit = () => {
	const [results, setResults] = useState([]);

	const { eventId } = useParams();

	useEffect(() => {
		getResult(eventId).then(data => setResults(data));
	}, [eventId]);

	console.log(results);

	const sendForm = e => {};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование результата спортсмена</h2>
		</section>
	);
};
