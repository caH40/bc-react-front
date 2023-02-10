import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postFromTrail, postTrek } from '../../../api/trail';
import { getAlert } from '../../../redux/features/alertMessageSlice';
import ImagesURLBox from '../../ImagesURLBox/ImagesURLBox';
import ImageURLBox from '../../ImageURLBox/ImageURLBox';
import ButtonSendBox from '../ButtonSendBox/ButtonSendBox';

import InputBox from '../InputBox/InputBox';
import InputFilesURLBox from '../InputFilesURLBox/InputFilesURLBox';
import InputFileTrekBox from '../InputFileTrekBox/InputFileTrekBox';
import InputFileURLBox from '../InputFileURLBox/InputFileURLBox';
import SelectBox from '../SelectBox/SelectBox';
import TextArea from '../TextArea/TextArea';

import classes from './FormTrailEdit.module.css';
import { createFormData, resetForm, validate } from './service';

const FormTrailEdit = () => {
	const [form, setForm] = useState(resetForm);
	const fileTrek = useRef('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	console.log(form);

	const sendForm = event => {
		event.preventDefault();
		const isValidate = true;
		// const isValidate = validate(form);
		if (!isValidate)
			return dispatch(
				getAlert({ message: 'Не все поля заполнены!', type: 'warning', isOpened: true })
			);
		const formData = createFormData(fileTrek.current.source);
		postTrek(formData)
			.then(data => {
				if (data?.status === 200) {
					dispatch(
						getAlert({ message: 'Маршрут сохранен на сервере!', type: 'success', isOpened: true })
					);
				}
				// navigate(-1);
			})
			.catch(error => console.log(error))
			.finally(() => {
				fileTrek.current = '';
				setForm(resetForm);
			});

		postFromTrail(form);
	};

	return (
		<form className={classes.form}>
			<div className={classes.block}>
				<SelectBox
					form={form}
					setForm={setForm}
					keyObject="state"
					title="Республика маршрута:"
					values={[
						{ id: 0, name: '' },
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
						{ id: 0, name: '' },
						{ id: 1, name: 'Шоссейный' },
						{ id: 2, name: 'Горный' },
					]}
					boxStyle={{ marginRight: '15px' }}
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="nameRoute"
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
					form={form}
					setForm={setForm}
					title="Картинка для карточки:"
					keyObject="cardPhoto"
					boxStyle={{ marginRight: '15px' }}
				/>
				<ImageURLBox form={form} setForm={setForm} keyObject="cardPhoto" />
			</div>
			<InputFilesURLBox
				form={form}
				setForm={setForm}
				title="Картинки для описания:"
				boxStyle={{ marginRight: '15px' }}
			/>
			<ImagesURLBox form={form} setForm={setForm} boxStyle={{ marginRight: '15px' }} />
			<ButtonSendBox sendForm={sendForm} title="Отправка формы на сервер!" />
		</form>
	);
};

export default FormTrailEdit;
