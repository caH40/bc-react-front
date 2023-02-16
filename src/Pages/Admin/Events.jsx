import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postResults } from '../../api/protocol';
import TableEvent from '../../Components/Table/EventUpdate/TableEvent';
import TableDzhiliSuEvents from '../../Components/Table/EventUpdate/TableEvent';
import TableResults from '../../Components/Table/Results/TableResults';
import Button from '../../Components/UI/Button/Button';

import { InputFileXlsBox } from '../../Components/UI/InputFileXlsBox/InputFileXlsBox';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/Events.module.css';

export const Events = () => {
	const [results, setResults] = useState([]);
	const [event, setEvent] = useState({});

	const dispatch = useDispatch();

	const saveResults = () => {
		postResults(results).then(data => {
			if (data.status === 201) {
				dispatch(
					getAlert({
						message: 'Протокол соревнований сохранен на сервере!',
						type: 'success',
						isOpened: true,
					})
				);
				return;
			}
		});
		dispatch(
			getAlert({
				message: 'Ошибка при сохранении протокола нас сервере!',
				type: 'error',
				isOpened: true,
			})
		);
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Загрузка протоколов соревнований</h2>
			<article></article>
			<InputFileXlsBox
				results={results}
				setResults={setResults}
				event={event}
				setEvent={setEvent}
				title={'Загрузка протокола  в формате .xlsx'}
				keyObject={'protocol'}
				accept={'.xlsx'}
			/>
			<TableEvent event={event} />
			<TableResults results={results} setResults={setResults} />
			<Button getClick={saveResults}>Сохранить</Button>
			<Button>Отменить</Button>
		</section>
	);
};
