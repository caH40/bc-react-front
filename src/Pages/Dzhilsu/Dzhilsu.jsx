import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getEvents } from '../../api/events';
import TableDzhiliSuEvents from '../../Components/Table/DzhiliSuEvents/TableDzhiliSuEvents';

import { mySort } from '../../utils/mysort';

const Dzhilsu = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		getEvents().then(data => {
			const dataSorted = mySort(data, 'eventDate', 'down');
			setEvents(dataSorted);
		});
	}, []);

	return (
		<section>
			<h3 className="title__page">Высокогорные соревнования на Джилы-Су</h3>
			<TableDzhiliSuEvents events={events} setEvents={setEvents} />
		</section>
	);
};

export default Dzhilsu;
