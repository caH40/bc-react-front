import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { postNews } from '../../../api/news';
import { getAlert } from '../../../redux/features/alertMessageSlice';
import ImageBox from '../../ImageBox/ImageBox';
import ButtonSendBox from '../ButtonSendBox/ButtonSendBox';
import InputBox from '../InputBox/InputBox';
import InputFileBox from '../InputFileBox/InputFileBox';
import TextArea from '../TextArea/TextArea';

import classes from './FormNewsEdit.module.css';

const FormNewsEdit = ({ newsOne, type }) => {
	const [form, setForm] = useState(() => ({
		title: newsOne?.newsTitle ?? '',
		textBody: newsOne?.newsText ?? '',
		image: newsOne?.image ?? '',
		newsId: newsOne?._id ?? '',
	}));
	const [pictureSource, setPictureSource] = useState({});
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const pictureUrl = useRef(newsOne?.image ?? '');

	const sendForm = event => {
		event.preventDefault();
		const isCompleteSource = form.source || pictureUrl.current ? true : false;
		if (!isCompleteSource || !form.textBody || !form.title) {
			dispatch(getAlert({ message: 'Не все поля заполнены!', type: 'warning', isOpened: true }));
			return;
		}

		const formData = new FormData();
		formData.append('type', type);
		formData.append('newsId', form.newsId);
		formData.append('files', form.source);
		formData.append('title', form.title);
		formData.append('textBody', form.textBody);

		postNews(formData)
			.then(data => {
				if (data?.status === 200) {
					dispatch(getAlert({ message: data.data.message, type: 'success', isOpened: true }));
				}
				navigate(-1);
			})
			.catch(error =>
				dispatch(getAlert({ message: error.response.data.message, type: 'error', isOpened: true }))
			);

		setForm({ title: '', textBody: '', source: '' });
		setPictureSource({});
		pictureUrl.current = '';
	};

	return (
		<form className={classes.form}>
			<div className={classes.inner__picture}>
				<div className={classes.block__picture}>
					<InputBox value={form.title} setForm={setForm} title="Заголовок новости:" />
					<InputFileBox
						setForm={setForm}
						pictureUrl={pictureUrl}
						setPictureSource={setPictureSource}
						title="Картинка для новости:"
					/>
				</div>
				<ImageBox
					pictureUrl={pictureUrl}
					pictureSource={pictureSource}
					setPictureSource={setPictureSource}
				/>
			</div>
			<TextArea value={form.textBody} setForm={setForm} title="Текст новости:" />
			<ButtonSendBox sendForm={sendForm} title="Сохранение новости на сервере!" />
		</form>
	);
};

export default FormNewsEdit;
