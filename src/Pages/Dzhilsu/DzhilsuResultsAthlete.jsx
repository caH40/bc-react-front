import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResultsAthlete } from '../../api/results';
import TableResultsAthlete from '../../Components/Table/ResultsAthlete/TableResultsAthlete';
import Button from '../../Components/UI/Button/Button';
import { mySort } from '../../utils/mysort';

const DzhilsuResultsAthlete = () => {
	const [results, setResults] = useState([]);
	const { athlete } = useParams();

	useEffect(() => {
		getResultsAthlete(athlete).then(data => {
			const dataSorted = mySort(data, 'eventDate', 'down');
			setResults(dataSorted);
		});
	}, [athlete]);

	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return (
		<div>
			<h3 className="title__page">Результаты: {results[0]?.athlete}</h3>
			<TableResultsAthlete results={results} setResults={setResults} />
			<div className="box__align-right">
				<Button getClick={goBack}>назад</Button>
			</div>
		</div>
	);
};

export default DzhilsuResultsAthlete;
