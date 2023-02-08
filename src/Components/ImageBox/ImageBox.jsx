import React from 'react';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

import classes from './ImageBox.module.css';

const ImageBox = ({ picture, setPicture }) => {
	const closeImage = () => setPicture({});
	return (
		<div className={classes.block__picture}>
			{picture.source ? (
				<div className={classes.box__img}>
					<img className={classes.img} src={picture.source} alt="news" />
					<div className={classes.img__info}>
						<span>{picture.name}</span>
						<span>{picture.size}kB</span>
					</div>
					<div className={classes.cross__info}>
						<ButtonClose getClick={closeImage} />
					</div>
				</div>
			) : undefined}
		</div>
	);
};

export default ImageBox;
