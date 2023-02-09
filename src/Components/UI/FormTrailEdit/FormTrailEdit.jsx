import React, { useState } from 'react';
import InputBox from '../InputBox/InputBox';

import classes from './FormTrailEdit.module.css';

const FormTrailEdit = () => {
	const [form, setForm] = useState({});
	console.log(form);
	return (
		<form className={classes.form}>
			<div className={classes.inner}>
				<InputBox form={form} keyObject="name" setForm={setForm} title="Название маршрута:" />
				<InputBox form={form} keyObject="start" setForm={setForm} title="Место старта маршрута:" />
				<InputBox form={form} keyObject="turn" setForm={setForm} title="Место разворота:" />
				<InputBox form={form} keyObject="finish" setForm={setForm} title="Место финиша маршрута:" />
				<InputBox
					form={form}
					keyObject="distance"
					setForm={setForm}
					title="Длина маршрута в километрах:"
				/>
				<InputBox
					form={form}
					keyObject="ascent"
					setForm={setForm}
					title="Общий набор в метрах на маршруте:"
				/>
			</div>
		</form>
	);
};

export default FormTrailEdit;
