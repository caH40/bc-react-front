import React from 'react';

import classes from './ArrowsWebcam.module.css';
const webcams = [1, 5, 6, 7];

const ArrowsWebcam = ({ numberWebcam, setNumberWebcam }) => {
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
		<>
			<span className={`${classes.arrow} ${classes.left}`} onClick={() => chooseNumber('left')}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
						stroke="#ffffff25"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			<span className={`${classes.arrow} ${classes.right}`} onClick={() => chooseNumber('right')}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
						stroke="#ffffff25"
						strokeWidth="1.5"
						strokeMiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
		</>
	);
};

export default ArrowsWebcam;
