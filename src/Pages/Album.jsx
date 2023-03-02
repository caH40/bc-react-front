import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/UI/Button/Button';
import { useFancy } from '../hooks/use-fancy';

import classes from './PagesCss/Album.module.css';
const server = process.env.REACT_APP_SERVER_EXPRESS;

const Album = () => {
	const navigate = useNavigate();
	const getBack = () => navigate(-1);
	useFancy();
	return (
		<div className={classes.wrapper}>
			<h1 className={classes.title}>Фотографии Джилы-Су</h1>
			<div className={classes.inner}>
				<a
					className={classes.preview}
					data-fancybox="gallery"
					href="http://localhost:3000/images/gallery/test/1-normal.jpg"
				>
					<img
						className={`rounded ${classes.img}`}
						src={`${server}/images/gallery/test/1-small.jpg`}
						alt="test"
					/>
				</a>
				<a
					className={classes.preview}
					data-fancybox="gallery"
					href="http://localhost:3000/images/gallery/test/2-normal.jpg"
				>
					<img
						className={`rounded ${classes.img}`}
						src={`${server}/images/gallery/test/2-small.jpg`}
						alt="test"
					/>
				</a>
				<a
					className={classes.preview}
					data-fancybox="gallery"
					href="http://localhost:3000/images/gallery/test/3-normal.jpg"
				>
					<img
						className={`rounded ${classes.img}`}
						src={`${server}/images/gallery/test/3-small.jpg`}
						alt="test"
					/>
				</a>
			</div>
			<Button getClick={getBack}>Назад</Button>
		</div>
	);
};

export default Album;
