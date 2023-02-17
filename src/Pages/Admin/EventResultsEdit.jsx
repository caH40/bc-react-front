import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getResults } from '../../api/results';

import { TableResultsEdit } from '../../Components/Table/ResultsEdit/TableResultsEdit';

import classes from '../PagesCss/EventResultsEdit.module.css';

export const EventResultsEdit = () => {
	const [results, setResults] = useState([]);

	const { eventId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getResults(eventId).then(data => setResults(data));
	}, [eventId]);

	const editResult = resultId => {
		navigate(`/admin/events/edit/result/${resultId}`);
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование результатов соревнования</h2>
			<TableResultsEdit results={results} setResults={setResults} getClick={editResult} />
		</section>
	);
};
