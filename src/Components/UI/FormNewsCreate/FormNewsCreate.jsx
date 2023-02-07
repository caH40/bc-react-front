import React, { useState } from 'react';
import { postNews } from '../../../api/news';

import Button from '../Button/Button';
import ButtonInput from '../ButtonInput/ButtonInput';

import classes from './FormNewsCreate.module.css';

const FormNewsCreate = () => {
	const [form, setForm] = useState({ title: '', textBody: '' });
	const [picture, setPicture] = useState({});

	const sendForm = e => {
		e.preventDefault();
		postNews(form.source).then(data => console.log(data));
		setForm({ title: '', textBody: '', source: '' });
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
					<div className={classes.box__input}>
						<h2 className={classes.box__title}>Заголовок новости:</h2>
						<input
							value={form.title}
							onChange={e => setForm(prev => ({ ...prev, title: e.target.value }))}
							className={classes.input}
							type="text"
							name="title"
						/>
					</div>
					<div className={classes.box__input}>
						<h2 className={classes.box__title}>Картинка для новости:</h2>
						<ButtonInput getClick={getPicture}>Выбрать файл</ButtonInput>
					</div>
				</div>
				<div className={classes.block__picture}>
					<div className={classes.box__img}>
						{picture.source ? (
							<img className={classes.img} src={picture.source} alt="news" />
						) : undefined}
					</div>
				</div>
			</div>
			<div className={classes.box__textarea}>
				<h2 className={classes.box__title}>Текст новости:</h2>
				<textarea
					value={form.textBody}
					onChange={e => setForm(prev => ({ ...prev, textBody: e.target.value }))}
					className={classes.textarea}
				/>
			</div>
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
