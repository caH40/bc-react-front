import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlums } from '../../api/gallery';
import TableAlbums from '../../Components/Table/Albums/TableAlbums';
import Button from '../../Components/UI/Button/Button';

import classes from '../PagesCss/NewsCreate.module.css';

const AlbumsEdit = () => {
	const [albums, setAlbums] = useState([]);

	const { galleryId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getAlums(galleryId).then(data => {
			setAlbums(data.data.albums);
		});
	}, [galleryId]);

	const getBack = () => navigate(-1);
	const addAlbum = () => navigate(`add`);

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование альбомов</h2>
			{albums.length ? <TableAlbums albums={albums} /> : 'Loading...'}
			<div className={classes.box__buttons}>
				<Button getClick={getBack}>Назад</Button>
				<Button getClick={addAlbum}>Добавить альбом</Button>
			</div>
		</section>
	);
};

export default AlbumsEdit;
