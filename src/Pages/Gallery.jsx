import React from 'react';
import { Link } from 'react-router-dom';

import HGallery from '../Components/Helmets/HGallery';

import classes from './PagesCss/Gallery.module.css';

const Gallery = () => {
	return (
		<div>
			<HGallery />
			<h1 className={classes.title}>Gallery</h1>
			<section className={classes.albums}>
				<div className={classes.album}>
					<h2 className={`${classes.title} ${classes.album__title}`}>Джилы-Су</h2>

					<Link className={classes.link} to="album">
						<img className={classes.img} src="./images/gallery/test/test-layout.jpg" alt="layout" />
					</Link>
				</div>
				<div className={classes.album}>
					<h2 className={`${classes.title} ${classes.album__title}`}>Джилы-Су</h2>

					<Link className={classes.link} to="album">
						<img className={classes.img} src="./images/gallery/test/test-layout.jpg" alt="layout" />
					</Link>
				</div>
				<div className={classes.album}>
					<h2 className={`${classes.title} ${classes.album__title}`}>Джилы-Су</h2>

					<Link className={classes.link} to="album">
						<img className={classes.img} src="./images/gallery/test/test-layout.jpg" alt="layout" />
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
