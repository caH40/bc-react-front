import React, { useState } from 'react';

import InputBox from '../InputBox/InputBox';
import SelectBox from '../SelectBox/SelectBox';

import classes from './FormTrailEdit.module.css';

const FormTrailEdit = () => {
	const [form, setForm] = useState({});

	console.log({ form });

	return (
		<form className={classes.form}>
			<div className={classes.inner}>
				<SelectBox
					form={form}
					setForm={setForm}
					keyObject="state"
					title="Республика по которой проходит маршрут:"
					values={[
						{ id: 1, name: 'КавМинВоды' },
						{ id: 2, name: 'Карачаево-Черкессия' },
						{ id: 3, name: 'Кабардино-Балкария' },
						{ id: 4, name: 'Северная Осетия' },
						{ id: 5, name: 'Адыгея' },
					]}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="name"
					title="Название маршрута:"
					type="text"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="start"
					title="Место старта маршрута:"
					type="text"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="turn"
					title="Место разворота:"
					type="text"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="finish"
					title="Место финиша маршрута:"
					type="text"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="distance"
					title="Длина маршрута в километрах:"
					type="number"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="ascent"
					title="Общий набор в метрах на маршруте:"
					type="number"
				/>
			</div>
		</form>
	);
};

export default FormTrailEdit;
