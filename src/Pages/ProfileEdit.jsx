import React, { useEffect, useState } from 'react';
import { getUser } from '../api/user';
import ImageAvatarBox from '../Components/ImageAvatarBox/ImageAvatarBox';
import ButtonSendBox from '../Components/UI/ButtonSendBox/ButtonSendBox';
import InputBox from '../Components/UI/InputBox/InputBox';
import InputFileURLBox from '../Components/UI/InputFileURLBox/InputFileURLBox';

import classes from './PagesCss/ProfileEdit.module.css';
import { resetFormProfile } from './service';

const ProfileEdit = () => {
	const [form, setForm] = useState(() => resetFormProfile);

	useEffect(() => {
		getUser().then(data =>
			setForm(prev => ({
				...prev,
				...data.data.user,
				photoProfile: { source: data.data.user.photoProfile },
			}))
		);
	}, []);
	const sendForm = e => {
		e.preventDefault();
		console.log('Отправить', form);
	};

	return (
		<section className={classes.wrapper}>
			<h1 className={classes.title}>Редактирование личных данных пользователя: {form.username}</h1>
			<form className={classes.form}>
				<div className={classes.block}>
					<InputBox
						title="Фамилия*"
						form={form}
						setForm={setForm}
						keyObject="lastName"
						type="text"
						boxStyle={{ marginRight: '5px' }}
					/>
					<InputBox
						title="Имя*"
						form={form}
						setForm={setForm}
						keyObject="firstName"
						type="text"
						boxStyle={{ marginRight: '5px' }}
					/>
					<InputBox
						title="Отчество"
						form={form}
						setForm={setForm}
						keyObject="patronymic"
						type="text"
						boxStyle={{ marginRight: '5px' }}
					/>
					<InputBox
						title="Год рождения*"
						form={form}
						setForm={setForm}
						keyObject="birthday"
						type="number"
						boxStyle={{ marginRight: '5px' }}
					/>
					<InputBox
						title="Пол*"
						form={form}
						setForm={setForm}
						keyObject="gender"
						type="text"
						boxStyle={{ marginRight: '5px' }}
					/>
					<InputBox
						title="Город"
						form={form}
						setForm={setForm}
						keyObject="city"
						type="text"
						boxStyle={{ marginRight: '5px' }}
					/>
					<InputBox
						title="Команда"
						form={form}
						setForm={setForm}
						keyObject="team"
						type="text"
						boxStyle={{ marginRight: '5px' }}
					/>
					<InputBox
						title="Контактный телефон"
						form={form}
						setForm={setForm}
						keyObject="phone"
						type="text"
						boxStyle={{ marginRight: '5px' }}
					/>
					<InputBox
						title="Адрес электронной почты"
						form={form}
						setForm={setForm}
						keyObject="email"
						type="text"
						boxStyle={{ marginRight: '5px' }}
						disabled={true}
					/>
				</div>
				<div className={classes.block__avatar}>
					<InputFileURLBox
						title="Картинка профиля"
						form={form}
						setForm={setForm}
						keyObject="photoProfile"
						boxStyle={{ marginRight: '5px' }}
					/>
					<div className={classes.box__avatar}>
						<ImageAvatarBox form={form} setForm={setForm} keyObject="photoProfile" />
					</div>
				</div>
				<ButtonSendBox title="Сохранение введенных данных" sendForm={sendForm} />
			</form>
			{/* <p>* - Поле обязательно для заполнения</p> */}
		</section>
	);
};

export default ProfileEdit;
