import React, { useState } from 'react';
import ImageURLBox from '../../ImageURLBox/ImageURLBox';

import InputBox from '../InputBox/InputBox';
import InputFileURLBox from '../InputFileURLBox/InputFileURLBox';
import SelectBox from '../SelectBox/SelectBox';

import classes from './FormTrailEdit.module.css';

const FormTrailEdit = () => {
	const [form, setForm] = useState({});
	const [pictureUrl, setPictureUrl] = useState('');
	const [pictureSource, setPictureSource] = useState('');

	console.log(form);

	return (
		<form className={classes.form}>
			<div className={classes.block}>
				<SelectBox
					form={form}
					setForm={setForm}
					keyObject="state"
					title="Республика маршрута:"
					values={[
						{ id: 1, name: 'КавМинВоды' },
						{ id: 2, name: 'Карачаево-Черкессия' },
						{ id: 3, name: 'Кабардино-Балкария' },
						{ id: 4, name: 'Северная Осетия' },
						{ id: 5, name: 'Адыгея' },
					]}
				/>
				<SelectBox
					form={form}
					setForm={setForm}
					keyObject="bikeType"
					title="Тип активности:"
					values={[
						{ id: 1, name: 'Шоссейный' },
						{ id: 2, name: 'Горный' },
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
			<div className={classes.block}>
				<InputFileURLBox setForm={setForm} title="Картинка для новости:" />
				<ImageURLBox form={form} setForm={setForm} />
			</div>
		</form>
	);
};

export default FormTrailEdit;
