import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import classes from '../Table.module.css';

const server = process.env.REACT_APP_SERVER_EXPRESS;

const TableAlbums = ({ galleries, deleteTrail }) => {
	const navigate = useNavigate();

	return (
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Дата</th>
					<th>Изображение</th>
					<th>Название</th>
					<th>Создатель</th>
					<th>Изменение галереи</th>
					<th>Добавление альбома</th>
					<th>Удаление галереи</th>
				</tr>
			</thead>
			<tbody>
				{galleries.map((gallery, index) => (
					<tr key={gallery._id}>
						<td>{index + 1}</td>
						<td>{new Date(gallery.date).toLocaleDateString()}</td>
						<td>
							<img
								className={classes.td__news__image}
								src={`${server}/${gallery.urlCover}`}
								alt="news"
							></img>
						</td>
						<td className={classes.align__left}>{gallery.name}</td>
						<td>{gallery.creatorId.username}</td>
						<td>
							<Button getClick={() => navigate(gallery._id)} additionalClasses="td__link">
								Редактировать
							</Button>
						</td>
						<td>
							<Button
								getClick={() => navigate(`album-add/${gallery._id}`)}
								additionalClasses="td__link"
							>
								Добавить
							</Button>
						</td>
						<td>
							<Button getClick={() => deleteTrail(gallery._id)} additionalClasses="td__link warning">
								Удалить
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableAlbums;
