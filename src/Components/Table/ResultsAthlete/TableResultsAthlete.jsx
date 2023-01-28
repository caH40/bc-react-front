import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../Table.module.css';
import ThSort from '../ThSort';

const TableResultsAthlete = ({ results, setResults }) => {
	const [sort, setSort] = useState({
		sortDirection: 'down',
		sortField: 'eventDate',
	});
	const navigate = useNavigate();
	const toLink = (eventId, eventName) =>
		navigate(`/dzhilsu/results/${eventId}`, { state: { eventName } });

	return (
		<table>
			<thead>
				<tr>
					<ThSort
						sort={sort}
						setSort={setSort}
						data={results}
						setData={setResults}
						field={'eventDate'}
					>
						Дата
					</ThSort>
					<th scope="col">Соревнование</th>
					<ThSort
						sort={sort}
						setSort={setSort}
						data={results}
						setData={setResults}
						field={'distance'}
					>
						Дистанция
					</ThSort>
					<ThSort sort={sort} setSort={setSort} data={results} setData={setResults} field={'place'}>
						Место
					</ThSort>
					<ThSort
						sort={sort}
						setSort={setSort}
						data={results}
						setData={setResults}
						field={'timeTotal'}
					>
						Время
					</ThSort>
					<th scope="col">Сегмент в Страве</th>
				</tr>
			</thead>
			<tbody>
				{results.map(result => (
					<tr key={result._id} onClick={() => toLink(result.eventId, result.eventName)}>
						<td>{result.eventDate}</td>
						<td className={classes.align__left}>{result.eventName}</td>
						<td>{result.distance}</td>
						<td>{result.place}</td>
						<td>{result.timeTotal}</td>
						<td>
							<a
								className={classes.link__btn}
								href={result.segmentStrava}
								target="_blank"
								rel="noreferrer"
							>
								Strava
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableResultsAthlete;
