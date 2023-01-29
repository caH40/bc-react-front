import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Adaptive } from '../../../Hoc/Adaptive';
import classes from '../Table.module.css';
import ThSort from '../ThSort';

const TableDzhiliSuEvents = ({ events, setEvents }) => {
	const [sort, setSort] = useState({
		sortDirection: 'down',
		sortField: 'eventDate',
	});

	const navigate = useNavigate();
	const toLink = eventId => navigate(`results/${eventId}`);
	return (
		<table>
			<thead>
				<tr>
					<th scope="col">#</th>
					<ThSort
						sort={sort}
						setSort={setSort}
						data={events}
						setData={setEvents}
						field={'eventDate'}
					>
						Дата
					</ThSort>
					<th scope="col">Соревнование</th>
					<Adaptive sizeScreen="lg">
						<th scope="col">Город</th>
					</Adaptive>
					<ThSort
						sort={sort}
						setSort={setSort}
						data={events}
						setData={setEvents}
						field={'quantityRiders'}
					>
						Участ.
					</ThSort>
					<Adaptive sizeScreen="sm">
						<th scope="col">Сегмент в Страве</th>
					</Adaptive>
				</tr>
			</thead>
			<tbody>
				{events.map((event, index) => (
					<tr key={event._id} onClick={() => toLink(event.eventId)}>
						<td>{index + 1}</td>
						<td>{event.eventDate}</td>
						<td className={classes.align__left}>{event.eventName}</td>
						<Adaptive sizeScreen="lg">
							<td>{event.eventCity}</td>
						</Adaptive>
						<td>{event.quantityRiders}</td>
						<Adaptive sizeScreen="sm">
							<td>
								<a
									className={classes.link__btn}
									href={event.segmentStrava}
									target="_blank"
									rel="noreferrer"
								>
									Strava
								</a>
							</td>
						</Adaptive>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableDzhiliSuEvents;
