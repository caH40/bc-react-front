import React from 'react';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

import classes from './ImageURLBox.module.css';

const ImageURLBox = ({ form, setForm }) => {
	const closeImage = () => {
		setForm(prev => ({ ...prev, cardPhoto: {} }));
	};

	return (
		<div className={classes.block__picture}>
			{form.cardPhoto?.source ? (
				<div className={classes.box__img}>
					<img className={classes.img} src={form.cardPhoto.source} alt="news" />
					<div className={classes.img__info}>
						<span>{form.cardPhoto.name}</span>
						<span>{form.cardPhoto.size}kB</span>
					</div>
					<div className={classes.cross__info}>
						<ButtonClose getClick={closeImage} />
					</div>
				</div>
			) : undefined}
		</div>
	);
};

export default ImageURLBox;
