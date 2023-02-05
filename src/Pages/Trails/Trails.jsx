import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { getTrails } from '../../api/trail';
import Card from '../../Components/Card/Card';
import SortFilterTrails from '../../Components/UI/SortFilterTrails/SortFilterTrails';
import { filterStart, sortStart } from './service';

const Trails = () => {
	const [trails, setTrails] = useState([]);
	const sortState = useRef(sortStart);
	const [filter, setFilter] = useState(filterStart);
	const [isVisible, setIsVisible] = useState(false);

	const getSorting = e => {
		const sortFromSelect = JSON.parse(e.target.value);
		localStorage.setItem('sortField', sortFromSelect.sortField);
		localStorage.setItem('sortDirection', sortFromSelect.sortDirection);
		const sortedTrails = sortTrail(sortFromSelect, trails);
		setTrails(sortedTrails);
		sortState.current = sortFromSelect;
	};

	const sortTrail = (sortFromSelect, cards) => {
		if (sortFromSelect.sortDirection === 'up') {
			return [...cards].sort((a, b) => a[sortFromSelect.sortField] - b[sortFromSelect.sortField]);
		} else {
			return [...cards].sort((a, b) => b[sortFromSelect.sortField] - a[sortFromSelect.sortField]);
		}
	};

	const getFilter = (isChecked, field) => {
		if (isChecked) {
			setFilter(prev => {
				const newState = [...prev, field];
				localStorage.setItem('filterFields', newState);
				return newState;
			});
		} else
			setFilter(prev => {
				const newState = prev.filter(element => element !== field);
				localStorage.setItem('filterFields', newState);
				return newState;
			});
	};

	const filterTrail = (filterFromSelect, cards) => {
		return [...cards].filter(
			card => filterFromSelect.includes(card.state) && filterFromSelect.includes(card.bikeType)
		);
	};

	const getVisible = () => {
		setIsVisible(true);
		document
			.querySelector('#trails__checkbox')
			.addEventListener('mouseleave', () => setIsVisible(false), { once: true });
	};

	useEffect(() => {
		getTrails(filter).then(data => {
			const dataSorted = sortTrail(sortState.current, data);
			const dataSortedFiltered = filterTrail(filter, dataSorted);
			setTrails(dataSortedFiltered);
		});
	}, [filter]);

	return (
		<section className="trails__body">
			<Helmet>
				<meta
					name="description"
					content="Велосипедные маршруты по Кавказу для шоссейный и МТБ велосипедов."
				/>
			</Helmet>
			<h1 className="title__page title__page__trails">Велосипедные маршруты</h1>
			<SortFilterTrails
				getSorting={getSorting}
				getFilter={getFilter}
				filter={filter}
				isVisible={isVisible}
				getVisible={getVisible}
			/>
			<div className="trails__cards">
				{trails.map(trail => (
					<Card trail={trail} key={trail._id} />
				))}
			</div>
		</section>
	);
};

export default Trails;
