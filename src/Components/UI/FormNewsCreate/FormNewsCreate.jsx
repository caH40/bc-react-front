import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postNews } from '../../../api/news';
import { getAlert } from '../../../redux/features/alertMessageSlice';
import ImageBox from '../../ImageBox/ImageBox';
import ButtonSendBox from '../ButtonSendBox/ButtonSendBox';
import InputBox from '../InputBox/InputBox';
import InputFileBox from '../InputFileBox/InputFileBox';
import TextArea from '../TextArea/TextArea';

import classes from './FormNewsCreate.module.css';

const FormNewsCreate = () => {
	const [form, setForm] = useState({ title: '', textBody: '', source: '' });
	const [picture, setPicture] = useState({});
	const dispatch = useDispatch();

	const sendForm = event => {
		event.preventDefault();
		if (!form.source || !form.textBody || !form.title) {
			dispatch(getAlert({ message: 'Не все поля заполнены!', type: 'warning', isOpened: true }));
			return;
		}

		const formData = new FormData();
		formData.append('files', form.source);
		formData.append('title', form.title);
		formData.append('textBody', form.textBody);

		postNews(formData)
			.then(data => {
				if (data?.status === 200) {
					dispatch(getAlert({ message: data.data.message, type: 'success', isOpened: true }));
				}
			})
			.catch(error =>
				dispatch(getAlert({ message: error.response.data.message, type: 'error', isOpened: true }))
			);

		setForm({ title: '', textBody: '', source: '' });
		setPicture({});
	};

	return (
		<form className={classes.form}>
			<div className={classes.inner__picture}>
				<div className={classes.block__picture}>
					<InputBox value={form.title} setForm={setForm} title="Заголовок новости:" />
					<InputFileBox setForm={setForm} setPicture={setPicture} title="Картинка для новости:" />
				</div>
				<ImageBox picture={picture} />
			</div>
			<TextArea value={form.textBody} setForm={setForm} title="Текст новости:" />
			<ButtonSendBox sendForm={sendForm} title="Сохранение новости на сервере!" />
		</form>
	);
};

export default FormNewsCreate;
