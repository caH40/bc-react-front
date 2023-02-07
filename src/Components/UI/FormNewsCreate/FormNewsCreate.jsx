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
		if (!form.source || !form.textBody || !form.textBody) {
			dispatch(getAlert({ message: 'Не все поля заполнены!', type: 'warning', isOpened: true }));
			return;
		}
		postNews(form.source).then(data => console.log(data));

		setForm({ title: '', textBody: '', source: '' });
		setPicture({});
	};

	return (
		<form className={classes.form}>
			<div className={classes.inner__picture}>
				<div className={classes.block__picture}>
					<InputBox value={form.title} setForm={setForm} title="Заголовок новости:" />
					<InputFileBox
						form={form}
						setForm={setForm}
						setPicture={setPicture}
						title="Картинка для новости:"
					/>
				</div>
				<ImageBox picture={picture} />
			</div>
			<TextArea value={form.textBody} setForm={setForm} title="Текст новости:" />
			<ButtonSendBox sendForm={sendForm} title="Сохранение новости на сервере!" />
		</form>
	);
};

export default FormNewsCreate;
