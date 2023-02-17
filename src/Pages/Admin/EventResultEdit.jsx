import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getResult } from '../../api/results';
import Button from '../../Components/UI/Button/Button';
import ButtonSendBox from '../../Components/UI/ButtonSendBox/ButtonSendBox';
import InputBox from '../../Components/UI/InputBox/InputBox';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/EventResultEdit.module.css';

export const EventResultEdit = () => {
	const [resultsForm, setResultsForm] = useState({});

	const { resultId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		getResult(resultId)
			.then(data => setResultsForm(data.data.result))
			.catch(error => {
				dispatch(
					getAlert({
						message: 'Ошибка при запросе результата!',
						type: 'error',
						isOpened: true,
					})
				);
			});
	}, [resultId, dispatch]);

	const sendForm = e => {
		e.preventDefault();
		console.log(resultsForm);
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование результата спортсмена</h2>
			<form className={classes.form}>
				<div className={classes.block}>
					<InputBox
						title="Id пользователя в БД"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="userId"
						type="text"
						boxClass="mr-10"
						disabled={true}
					/>
					<InputBox
						title="ФИО (через пробел 'Ф И О')"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="athlete"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Место в финишном протоколе"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="place"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Номер спортсмена"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="number"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Город спортсмена"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="athleteCity"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Команда"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="athleteTeam"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Дистанция заезда"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="distance"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Общее время (чч:мм:сс)"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="timeTotal"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Год рождения"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="birthday"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Пол"
						form={resultsForm}
						setForm={setResultsForm}
						keyObject="gender"
						type="text"
						boxClass="mr-10"
					/>
					<div className={classes.box__button}>
						<ButtonSendBox title="Сохранение введенных данных" sendForm={sendForm} boxClass="mr-10" />
					</div>
				</div>
			</form>
			<Button getClick={() => navigate(-1)}>Назад</Button>
		</section>
	);
};
