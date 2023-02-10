import React, { useRef, useState } from 'react';
import ImagesURLBox from '../../ImagesURLBox/ImagesURLBox';
import ImageURLBox from '../../ImageURLBox/ImageURLBox';

import InputBox from '../InputBox/InputBox';
import InputFilesURLBox from '../InputFilesURLBox/InputFilesURLBox';
import InputFileTrekBox from '../InputFileTrekBox/InputFileTrekBox';
import InputFileURLBox from '../InputFileURLBox/InputFileURLBox';
import SelectBox from '../SelectBox/SelectBox';
import TextArea from '../TextArea/TextArea';

import classes from './FormTrailEdit.module.css';

const FormTrailEdit = () => {
	const [form, setForm] = useState({ descPhotos: [] });
	const fileTrek = useRef('');

	console.log(form);
	console.log(fileTrek.current);

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
					boxStyle={{ marginRight: '15px' }}
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
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="name"
					title="Название маршрута:"
					type="text"
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="start"
					title="Место старта маршрута:"
					type="text"
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="turn"
					title="Место разворота:"
					type="text"
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="finish"
					title="Место финиша маршрута:"
					type="text"
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="distance"
					title="Длина маршрута в километрах:"
					type="number"
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="ascent"
					title="Общий набор в метрах на маршруте:"
					type="number"
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="urlTrekGConnect"
					title="Ссылка на маршрут в GConnect:"
					type="text"
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="urlVideo"
					title="Ссылка на видео с маршрута:"
					type="text"
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputFileTrekBox
					fileRef={fileTrek}
					keyObject="fileTrekName"
					setForm={setForm}
					title="Трек в формате FIT/GPX/TCX:"
					boxStyle={{ marginRight: '15px' }}
				/>
				<TextArea
					form={form}
					setForm={setForm}
					title="Блок подробного описание маршрута. Особенности, детали, достопримечательности, важные моменты на маршруте."
					keyObject="descriptionArea"
					boxStyle={{ marginRight: '15px' }}
				/>
			</div>

			<div className={classes.block}>
				<InputFileURLBox
					setForm={setForm}
					title="Картинка для карточки:"
					keyObject="cardPhoto"
					boxStyle={{ marginRight: '15px' }}
				/>
				<ImageURLBox form={form} setForm={setForm} keyObject="cardPhoto" />
			</div>
			<InputFilesURLBox
				setForm={setForm}
				title="Картинки для описания:"
				boxStyle={{ marginRight: '15px' }}
			/>
			<ImagesURLBox form={form} setForm={setForm} boxStyle={{ marginRight: '15px' }} />
		</form>
	);
};

export default FormTrailEdit;
