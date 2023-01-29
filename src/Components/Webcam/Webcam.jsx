import React, { useEffect, useState } from 'react';
import { getWebcam } from '../../api/webcam';

import classes from './Webcam.module.css';
const webcams = [1, 5, 6, 7];
console.log('render webcam');
const Webcam = () => {
	const [webcam, setWebcam] = useState('./images/transparent800.png');
	const [numberWebcam, setNumberWebcam] = useState(1);
	useEffect(() => {
		getWebcam('/api/webcam', numberWebcam).then(data => {
			const imageCamera = URL.createObjectURL(data);
			setWebcam(imageCamera);
		});
	}, [numberWebcam]);

	const chooseNumber = direction => {
		if (direction === 'left') {
			if (webcams.indexOf(numberWebcam) === 0) {
				setNumberWebcam(webcams[webcams.length - 1]);
			}
			setNumberWebcam(prev => webcams[webcams.indexOf(prev) - 1]);
		}
		if (direction === 'right') {
			if (webcams.indexOf(numberWebcam) === webcams.length - 1) {
				setNumberWebcam(webcams[0]);
			}
			setNumberWebcam(prev => webcams[webcams.indexOf(prev) + 1]);
		}
	};

	return (
		<div className={classes.webcam}>
			<div className={classes.arrow__left} onClick={() => chooseNumber('left')} />
			<div className={classes.arrow__right} onClick={() => chooseNumber('left')} />
			<h4 className={classes.title}>Вебкамера на горе Шаджатмаз</h4>
			<a
				className={classes.screenShot}
				href={`https://gw.cmo.sai.msu.ru/webcam${numberWebcam}.jpg`}
				target="_blank"
				rel="noreferrer"
			>
				<img className={classes.img} src={webcam} alt={`webcam${numberWebcam}`} />
			</a>
		</div>
	);
};

export default Webcam;
