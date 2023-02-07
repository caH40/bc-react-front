import React, { useRef } from 'react';

import classes from './ButtonInput.module.css';

const ButtonInput = ({ getClick }) => {
	const refInput = useRef('');

	return (
		<>
			<input
				ref={refInput}
				className={classes.hidden}
				onChange={getClick}
				type="file"
				accept=".jpg, .jpeg, .png, .webp"
			/>
			<button
				className={classes.button}
				onClick={event => {
					event.preventDefault();
					refInput.current.click();
				}}
			>
				Выберите файл
			</button>
		</>
	);
};

export default ButtonInput;
