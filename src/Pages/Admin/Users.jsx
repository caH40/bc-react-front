import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/user';
import TableUsers from '../../Components/Table/Users/TableNews';

import classes from '../PagesCss/Users.module.css';

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then(data => setUsers(data.data.users));
	}, []);
	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Зарегистрированные пользователи</h2>
			<TableUsers users={users} setUsers={setUsers} />
		</section>
	);
};

export default Users;
