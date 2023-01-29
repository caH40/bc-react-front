import React from 'react';

import classes from './Webcam.module.css';

const Webcam = ({ screenShot }) => {
	return (
		<div className={classes.webcam}>
			<h4 className={classes.title}>Вебкамера на горе Шаджатмаз</h4>
			<a
				className={classes.screenShot}
				href="https://gw.cmo.sai.msu.ru/webcam5.jpg"
				target="_blank"
				rel="noreferrer"
			>
				<img className={classes.img} src={screenShot} alt="webcam5" />
			</a>
		</div>
	);
};

export default Webcam;
