import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postNews } from '../../../api/news';
import { getAlert } from '../../../redux/features/alertMessageSlice';
import ImageBox from '../../ImageBox/ImageBox';
import Button from '../Button/Button';
import ButtonInput from '../ButtonInput/ButtonInput';
import InputBox from '../InputBox/InputBox';
import TextArea from '../TextArea/TextArea';

import classes from './FormNewsCreate.module.css';

const FormNewsCreate = () => {
	const [form, setForm] = useState({ title: '', textBody: '', source: '' });
	const [picture, setPicture] = useState({});
	const dispatch = useDispatch();

	const sendForm = e => {
		e.preventDefault();
		if (!form.source || !form.textBody || !form.textBody) {
			dispatch(getAlert({ message: 'Не все поля заполнены!', type: 'warning', isOpened: true }));
			return console.log('empty');
		}
		postNews(form.source).then(data => console.log(data));
		//очистка формы
		setForm({ title: '', textBody: '', source: '' });
		setPicture({});
	};

	const getPicture = event => {
		const file = event.target.files[0];
		const size = Math.trunc(file.size / 8000);

		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = async () => {
			setPicture({ source: reader.result, name: file.name, size });
		};

		const formData = new FormData();
		formData.append('files', file);
		formData.append('title', form.title);
		formData.append('textBody', form.textBody);
		setForm(prev => ({ ...prev, source: formData }));
	};

	return (
		<form className={classes.form}>
			<div className={classes.inner__picture}>
				<div className={classes.block__picture}>
					<InputBox value={form.title} setForm={setForm} title="Заголовок новости:" />
					<div className={classes.box__input}>
						<h2 className={classes.box__title}>Картинка для новости:</h2>
						<ButtonInput getClick={getPicture}>Выбрать файл</ButtonInput>
					</div>
				</div>
				<ImageBox picture={picture} />
			</div>
			<TextArea value={form.textBody} setForm={setForm} title="Текст новости:" />

			<div className={classes.box__input}>
				<h2 className={classes.box__title}>Сохранение новости на сервере!</h2>
				<Button getClick={sendForm} type="submit">
					Отправить
				</Button>
			</div>
		</form>
	);
};

export default FormNewsCreate;
