import React, { useEffect, useState } from 'react';
import { getGalleries } from '../../api/gallery';
import TableAlbums from '../../Components/Table/Albums/TableAlbums';

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
			<TableAlbums galleries={galleries} />
		</section>
	);
};

export default GalleryEdit;
