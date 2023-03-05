import React, { useEffect, useState } from 'react';
import { getGalleries } from '../../api/gallery';
import TableGallery from '../../Components/Table/Gallery/TableGallery';

import classes from '../PagesCss/NewsCreate.module.css';

const GalleryEdit = () => {
	const [galleries, setGalleries] = useState([]);

	useEffect(() => {
		getGalleries().then(data => {
			setGalleries(data.data.galleries);
		});
	}, []);

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование галереи</h2>
			<TableGallery galleries={galleries} />
		</section>
	);
};

export default GalleryEdit;
