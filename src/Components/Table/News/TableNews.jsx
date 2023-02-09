import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import classes from '../Table.module.css';

const server = 'https://bike-caucasus.ru';
// const server = process.env.REACT_APP_SERVER_EXPRESS;

const TableNews = ({ news }) => {
	console.log(news);
	const navigate = useNavigate();

	const deleteNews = newsId => {
		console.log(newsId);
	};

	return (
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Дата</th>
					<th>Изображение</th>
					<th>Название</th>
					<th>Создатель</th>
					<th>Редактировать</th>
					<th>Удаление</th>
				</tr>
			</thead>
			<tbody>
				{news.map((newsOne, index) => (
					<tr key={newsOne._id}>
						<td>{index + 1}</td>
						<td>{new Date(newsOne.date).toLocaleDateString()}</td>
						<td>
							<img
								className={classes.td__news__image}
								src={`${server}/${newsOne.image}`}
								alt="news"
							></img>
						</td>
						<td className={classes.align__left}>{newsOne.newsTitle}</td>
						<td>{newsOne.postedBy.username}</td>
						<td>
							<Button getClick={() => navigate(newsOne._id)} addClass="link__btn__sm">
								Редактировать
							</Button>
						</td>
						<td>
							<Button
								getClick={() => deleteNews(newsOne._id)}
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

export default TableNews;
