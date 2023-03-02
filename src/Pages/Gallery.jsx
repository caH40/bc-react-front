import React from 'react';
import { Link } from 'react-router-dom';

import HGallery from '../Components/Helmets/HGallery';

import classes from './PagesCss/Gallery.module.css';
const server = process.env.REACT_APP_SERVER_EXPRESS;

const Gallery = () => {
	const idAlbums = '63ff2e4c1c0f630840d681a8';
	return (
		<div>
			<HGallery />
			<h1 className={classes.title}>Gallery</h1>
			<section className={classes.category}>
				<Link className={classes.card__link} to={`albums/${idAlbums}`}>
					<img
						className={classes.img}
						src={`${server}/images/gallery/test/4-normal.jpg`}
						alt="RaceDzhiliSu"
					/>
					<h2 className={classes.description__title}>Высокогорная велогонка Джилы-Су</h2>
				</Link>
				<Link className={classes.card__link} to={`albums/${idAlbums}`}>
					<img
						className={classes.img}
						src={`${server}/images/gallery/test/4-normal.jpg`}
						alt="RaceDzhiliSu"
					/>
					<h2 className={classes.description__title}>Заезды на МТБ</h2>
				</Link>
				<Link className={classes.card__link} to={`albums/${idAlbums}`}>
					<img
						className={classes.img}
						src={`${server}/images/gallery/test/4-normal.jpg`}
						alt="RaceDzhiliSu"
					/>
					<h2 className={classes.description__title}>Заезды на МТБ</h2>
				</Link>
				<Link className={classes.card__link} to={`albums/${idAlbums}`}>
					<img
						className={classes.img}
						src={`${server}/images/gallery/test/4-normal.jpg`}
						alt="RaceDzhiliSu"
					/>
					<h2 className={classes.description__title}>Заезды на МТБ</h2>
				</Link>
			</section>
		</div>
	);
};

export default Gallery;
