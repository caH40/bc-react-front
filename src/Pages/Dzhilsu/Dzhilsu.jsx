import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { getEvents } from '../../api/events';
import TableDzhiliSuEvents from '../../Components/Table/DzhiliSuEvents/TableDzhiliSuEvents';
import { getAuth } from '../../redux/features/authSlice';

import { mySort } from '../../utils/mysort';

const Dzhilsu = () => {
	const [events, setEvents] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		getEvents()
			.then(data => {
				if (!data) return;
				const dataSorted = mySort(data, 'eventDate', 'up');
				setEvents(dataSorted);
			})
			.catch(error => {
				if (error.response.status === 401) {
					dispatch(getAuth({ state: false }));
				}
			});
	}, [dispatch]);

	return (
		<section>
			<Helmet>
				<meta
					name="description"
					content="Высокогорные соревнования на Джилы-Су. Ежегодная гонка-тренировка шоссейный велоспорт."
				/>
				<meta property="og:title" content="Список прошедших гонок-тренировок на Джилы-Су" />
				<meta
					property="og:description"
					content="Высокогорные соревнования на Джилы-Су. Ежегодная гонка-тренировка шоссейный велоспорт."
				/>
			</Helmet>
			<h3 className="title__page">Высокогорные соревнования на Джилы-Су</h3>
			<TableDzhiliSuEvents events={events} setEvents={setEvents} />
		</section>
	);
};

export default Dzhilsu;
