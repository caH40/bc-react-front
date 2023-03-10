import React from 'react';
import { useDispatch } from 'react-redux';
import { getAlert } from '../../../../redux/features/alertMessageSlice';

import classes from './Share.module.css';

const server = process.env.REACT_APP_SERVER_FRONT;

const Share = ({ newsId }) => {
	const dispatch = useDispatch();

	const saveToBuffer = () => {
		navigator.clipboard.writeText(`${server}/news/${newsId}`);
		dispatch(
			getAlert({
				message: `Ссылка скопирована в буфер обмена!`,
				type: 'success',
				isOpened: true,
			})
		);
	};
	return (
		<div className={classes.box} onClick={saveToBuffer}>
			<span className={classes.image}>
				<svg
					width="28"
					height="25"
					viewBox="0 0 28 25"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M28 11.8016L14.9649 0.163086V7.78769C11.0596 7.97051 7.41716 9.41548 4.63121 11.9029C1.64473 14.5694 0 18.1146 0 21.8857V24.8367L1.58971 22.2495C4.07001 18.2128 8.81792 15.7052 13.9804 15.7052C14.3078 15.7052 14.6369 15.7156 14.9649 15.7361V23.4401L28 11.8016ZM13.9804 14.1925C9.35698 14.1925 5.03021 15.989 2.06188 19.0209C3.51843 13.4458 9.13057 9.28052 15.8119 9.28052H16.659V3.81484L25.6041 11.8016L16.659 19.7883V14.3813L15.916 14.2991C15.2768 14.2284 14.6256 14.1925 13.9804 14.1925Z"
						fill="#959FA8"
					/>
					<path
						d="M13.9804 14.1925C9.35698 14.1925 5.03021 15.989 2.06188 19.0209C3.51843 13.4458 9.13057 9.28052 15.8119 9.28052H16.659V3.81484L25.6041 11.8016L16.659 19.7883V14.3813L15.916 14.2991C15.2768 14.2284 14.6256 14.1925 13.9804 14.1925Z"
						fill="none"
					/>
				</svg>
			</span>
		</div>
	);
};

export default Share;
