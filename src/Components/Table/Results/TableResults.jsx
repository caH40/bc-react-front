import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from '../Table.module.css';
import ThSort from '../ThSort';

const TableResults = ({ results, setResults }) => {
	const [sort, setSort] = useState({
		sortDirection: 'down',
		sortField: 'place',
	});

	const navigate = useNavigate();
	const toLink = athlete =>
		navigate(`/dzhilsu/results/athlete/${athlete}`, { state: { athlete } });
	return (
		<div>
			<table className="table tableResult">
				<thead>
					<tr>
						<ThSort sort={sort} setSort={setSort} data={results} setData={setResults} field={'place'}>
							Место
						</ThSort>
						<ThSort
							sort={sort}
							setSort={setSort}
							data={results}
							setData={setResults}
							field={'number'}
						>
							Номер
						</ThSort>
						<ThSort
							sort={sort}
							setSort={setSort}
							data={results}
							setData={setResults}
							field={'athlete'}
						>
							Участник
						</ThSort>
						<ThSort
							sort={sort}
							setSort={setSort}
							data={results}
							setData={setResults}
							field={'athleteCity'}
						>
							Город
						</ThSort>
						<ThSort
							sort={sort}
							setSort={setSort}
							data={results}
							setData={setResults}
							field={'athleteTeam'}
						>
							Команда
						</ThSort>
						<ThSort
							sort={sort}
							setSort={setSort}
							data={results}
							setData={setResults}
							field={'distance'}
						>
							Дистанция
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
						<th scope="col">Отс.лид.</th>
						<th scope="col">Отс.пр.</th>
						<ThSort
							sort={sort}
							setSort={setSort}
							data={results}
							setData={setResults}
							field={'birthday'}
						>
							Возр. гр.
						</ThSort>
						<th scope="col">Место гр</th>
					</tr>
				</thead>
				<tbody>
					{results.map(result => (
						<tr key={result._id} onClick={() => toLink(result.athlete)}>
							<td>{result.place}</td>
							<td>{result.number}</td>
							<td className={classes.align__left}>{result.athlete}</td>
							<td>{result.athleteCity}</td>
							<td>{result.athleteTeam}</td>
							<td>{result.distance}</td>
							<td>{result.timeTotal}</td>
							<td>{result.gap}</td>
							<td>{result.gapPrev}</td>
							<td>{result.birthday}</td>
							<td></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableResults;
