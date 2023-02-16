import React from 'react';
import TableEventsModerate from '../../Components/Table/EventsModerate/TableEventsModerate';

import classes from '../PagesCss/EventsEdit.module.css';

export const EventsEdit = () => {
	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Загрузка протоколов соревнований</h2>
			<TableEventsModerate />
		</section>
	);
};
