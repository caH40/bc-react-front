import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/date';

import Button from '../../UI/Button/Button';
import classes from '../Table.module.css';

const server = process.env.REACT_APP_SERVER_EXPRESS;

const TableUsers = ({ users, setUsers, deleteNews }) => {
	const navigate = useNavigate();

	return (
		<table className={classes.table}>
			<thead>
				<tr>
					<th>#</th>
					<th>Регист.</th>
					<th>username</th>
					<th>email</th>
					<th>phone</th>
					<th>firstName</th>
					<th>lastName</th>
					<th>firstName</th>
					<th>patronymic</th>
					<th>gender</th>
					<th>birthday</th>
					<th>city</th>
					<th>team</th>
					<th>role</th>
					<th>photo</th>
					<th>Удалить акк.</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => (
					<tr key={user._id}>
						<td>{index + 1}</td>
						<td>{formatDate(user.date, '2-digit')}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
						<td>{user.firstName}</td>
						<td>{user.lastName}</td>
						<td>{user.firstName}</td>
						<td>{user.patronymic}</td>
						<td>{user.gender}</td>
						<td>{user.birthday}</td>
						<td>{user.city}</td>
						<td>{user.team}</td>
						<td>{user.role}</td>
						<td>{user.photo}</td>
						<td>
							<Button
								getClick={() => deleteNews(user._id)}
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

export default TableUsers;
