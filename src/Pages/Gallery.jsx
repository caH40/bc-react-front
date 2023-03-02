import React from 'react';
import Album from '../Components/Album/Album';
import HGallery from '../Components/Helmets/HGallery';

import classes from './PagesCss/Gallery.module.css';

const Gallery = () => {
	return (
		<div>
			<HGallery />
			<h1 className={classes.title}>Gallery</h1>
			<Album />
		</div>
	);
};

export default Gallery;
