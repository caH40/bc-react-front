import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import classes from '../Table.module.css';

const server = process.env.REACT_APP_SERVER_EXPRESS;

const TableAlbums = ({ albums, deleteTrail }) => {
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
					<th>Изменение альбома</th>
					<th>Добавление фотографий</th>
					<th>Удаление альбома</th>
				</tr>
			</thead>
			<tbody>
				{albums.map((album, index) => (
					<tr key={album._id}>
						<td>{index + 1}</td>
						<td>{new Date(album.date).toLocaleDateString()}</td>
						<td>
							<img
								className={classes.td__news__image}
								src={`${server}/${album.urlCover}`}
								alt="news"
							></img>
						</td>
						<td className={classes.align__left}>{album.name}</td>
						<td>{album.creatorId.username}</td>
						<td>
							<Button getClick={() => navigate(album._id)} additionalClasses="td__link">
								Редактировать
							</Button>
						</td>
						<td>
							<Button getClick={() => navigate(`album-add/${album._id}`)} additionalClasses="td__link">
								Добавить
							</Button>
						</td>
						<td>
							<Button getClick={() => deleteTrail(album._id)} additionalClasses="td__link warning">
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
