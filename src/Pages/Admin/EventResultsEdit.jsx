import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { deletePostResult, getResults } from '../../api/results';

import { TableResultsEdit } from '../../Components/Table/ResultsEdit/TableResultsEdit';
import Button from '../../Components/UI/Button/Button';

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

	const addResult = () => {
		navigate(`/admin/events/edit/result/add/${results[0].eventId}`);
	};

	const deleteResult = resultId => {
		console.log({ resultId });
		// deletePostResult(resultId);
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование результатов соревнования</h2>
			<TableResultsEdit
				results={results}
				setResults={setResults}
				getClick={editResult}
				deleteResult={deleteResult}
			/>
			<Button getClick={addResult} addClass="mr-20">
				Добавить результат
			</Button>
			<Button getClick={() => navigate(-1)} addClass="warning">
				Назад
			</Button>
		</section>
	);
};
