import { v4 as uuidv4 } from 'uuid';

export function changeTitlesEvent(data) {
	return {
		eventDate: data?.['Дата'],
		eventName: data?.['Название'],
		distance: data?.['Дистанция'],
		type: data?.['Тип заезда'],
		eventCity: data?.['Место старта'],
	};
}
export function changeTitlesResults(data) {
	const results = [];
	data.forEach(result => {
		const interim = {};
		interim.id = uuidv4();
		interim.place = result?.['Место'];
		interim.number = result?.['Номер'];
		interim.athlete = result?.['ФИО'];
		interim.athleteCity = result?.['Город'];
		interim.athleteTeam = result?.['Команда'];
		interim.timeTotal = result?.['Время'];
		interim.distance = result?.['Дистанция'];
		interim.мужской = result?.['Пол'];
		interim.birthday = result?.['Год рождения'];
		results.push(interim);
	});
	return results;
}
