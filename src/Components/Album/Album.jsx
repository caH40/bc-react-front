import React from 'react';
import { useFancy } from '../../hooks/use-fancy';
import classes from './Album.module.css';

const Album = () => {
	useFancy();
	return (
		<div className={classes.inner}>
			<a
				className={classes.preview}
				data-fancybox="gallery"
				href="http://localhost:3000/images/gallery/test/1-normal.jpg"
			>
				<img
					className={`rounded ${classes.img}`}
					src="./images/gallery/test/1-small.jpg"
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
					src="./images/gallery/test/2-small.jpg"
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
					src="./images/gallery/test/3-small.jpg"
					alt="test"
				/>
			</a>
		</div>
	);
};

export default Album;
