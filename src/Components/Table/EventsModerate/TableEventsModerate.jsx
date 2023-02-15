import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEvents } from '../../../api/events';
import { Adaptive } from '../../../Hoc/Adaptive';
import { getAuth } from '../../../redux/features/authSlice';
import { mySort } from '../../../utils/mysort';
import Button from '../../UI/Button/Button';
import classes from '../Table.module.css';
import ThSort from './ThSort';

const TableEventsModerate = () => {
	const [sort, setSort] = useState({
		sortDirection: 'up',
		sortField: 'eventDate',
	});
	const navigate = useNavigate();

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

	const deleteEvent = () => {};

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
					<th>Редактирование</th>
					<th>Удаление</th>
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
						<td>
							<Button getClick={() => navigate(event._id)} addClass="link__btn__sm">
								Редактировать
							</Button>
						</td>
						<td>
							<Button
								getClick={() => deleteEvent(event._id)}
								targetClass="warning"
								addClass="link__btn__sm"
							>
								Удалить
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableEventsModerate;
