import React from 'react';
import { Adaptive } from '../../../Hoc/Adaptive';
import classes from '../Table.module.css';

const TableEvent = ({ event }) => {
	return (
		<>
			{event?.eventName ? (
				<table>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th>Дата</th>
							<th scope="col">Соревнование</th>
							<Adaptive sizeScreen="lg">
								<th scope="col">Город</th>
							</Adaptive>
							<th scope="col">Участ.</th>
							<Adaptive sizeScreen="sm">
								<th scope="col">Сегмент в Страве</th>
							</Adaptive>
						</tr>
					</thead>
					<tbody>
						<tr key={event._id}>
							<td>{1}</td>
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
					</tbody>
				</table>
			) : undefined}
		</>
	);
};

export default TableEvent;
