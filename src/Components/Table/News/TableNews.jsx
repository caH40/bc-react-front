import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../Table.module.css';

const TableNews = ({ news }) => {
	const navigate = useNavigate();
	return (
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Дата</th>
					<th>Название</th>
					<th>Создатель</th>
				</tr>
			</thead>
			<tbody>
				{news.map((newsOne, index) => (
					<tr key={newsOne._id} onClick={() => navigate(newsOne._id)}>
						<td>{index + 1}</td>
						<td>{new Date(newsOne.date).toLocaleDateString()}</td>
						<td className={classes.align__left}>{newsOne.newsTitle}</td>
						<td>{newsOne.postedBy.username}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableNews;
