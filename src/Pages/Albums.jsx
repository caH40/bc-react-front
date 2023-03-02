import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '../Components/UI/Button/Button';

import classes from './PagesCss/Albums.module.css';
const server = process.env.REACT_APP_SERVER_EXPRESS;

const Albums = () => {
	const [albums, setAlbums] = useState();
	const { idAlbums } = useParams();

	const navigate = useNavigate();
	const getBack = () => navigate(-1);

	useEffect(() => {
		// getAlums(idAlbums).then(data => setAlbums(data?.data?.albums));
	}, [idAlbums]);
	return (
		<div>
			<h1 className={classes.title}>{`Альбомы Джилы-Су`}</h1>
			<section className={classes.albums}>
				<Link className={classes.card__link} to="album">
					<img
						className={classes.img}
						src={`${server}/images/gallery/test/test-layout.jpg`}
						alt="layout"
					/>
					<h2 className={classes.description__title}>Джилы-Су</h2>
					<div className={classes.description}>
						Большой и Малый Бермамыт. Сборник фотографий с поездок на МТБ в разные годы.
					</div>
				</Link>
				<Link className={classes.card__link} to="album">
					<img
						className={classes.img}
						src={`${server}/images/gallery/test/test-layout.jpg`}
						alt="layout"
					/>
					<h2 className={classes.description__title}>Джилы-Су</h2>
					<div className={classes.description}>
						Большой и Малый Бермамыт. Сборник фотографий с поездок на МТБ в разные годы.
					</div>
				</Link>
			</section>
			<Button getClick={getBack}>Назад</Button>
		</div>
	);
};

export default Albums;
