import React from 'react';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

import classes from './ImagesURLBox.module.css';

const ImagesURLBox = ({ form, setForm }) => {
	const closeImage = name => {
		setForm(prev => ({
			...prev,
			descPhotos: prev.descPhotos.filter(photo => photo.name !== name),
		}));
	};

	return (
		<div className={classes.block__picture}>
			{form.descPhotos
				? form.descPhotos.map((photo, index) => (
						<div className={classes.box__img} key={index + photo.name}>
							<img className={classes.img} src={photo.source} alt="news" />
							<div className={classes.img__info}>
								<span>{photo.name}</span>
								<span>{photo.size}kB</span>
							</div>
							<div className={classes.cross__info}>
								<ButtonClose getClick={() => closeImage(photo.name)} />
							</div>
						</div>
				  ))
				: undefined}
		</div>
	);
};

export default ImagesURLBox;
