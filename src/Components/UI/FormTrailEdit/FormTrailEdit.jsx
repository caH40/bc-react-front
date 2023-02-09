import React, { useState } from 'react';
import InputBox from '../InputBox/InputBox';

import classes from './FormTrailEdit.module.css';

const FormTrailEdit = () => {
	const [form, setForm] = useState({});
	console.log(form);
	return (
		<form className={classes.form}>
			<div className={classes.inner}>
				<InputBox
					form={form}
					keyObject="name"
					setForm={setForm}
					title="Название маршрута:"
					type="text"
				/>
				<InputBox
					form={form}
					keyObject="start"
					setForm={setForm}
					title="Место старта маршрута:"
					type="text"
				/>
				<InputBox
					form={form}
					keyObject="turn"
					setForm={setForm}
					title="Место разворота:"
					type="text"
				/>
				<InputBox
					form={form}
					keyObject="finish"
					setForm={setForm}
					title="Место финиша маршрута:"
					type="text"
				/>
				<InputBox
					form={form}
					keyObject="distance"
					setForm={setForm}
					title="Длина маршрута в километрах:"
					type="number"
				/>
				<InputBox
					form={form}
					keyObject="ascent"
					setForm={setForm}
					title="Общий набор в метрах на маршруте:"
					type="number"
				/>
			</div>
		</form>
	);
};

export default FormTrailEdit;
