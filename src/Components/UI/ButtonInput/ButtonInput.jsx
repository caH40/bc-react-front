import React, { useRef } from 'react';

import classes from './ButtonInput.module.css';

const ButtonInput = ({ getClick, children, multiple = false }) => {
	const refInput = useRef('');

	return (
		<>
			<input
				ref={refInput}
				className={classes.hidden}
				onChange={getClick}
				type="file"
				accept=".jpg, .jpeg, .png, .webp"
				multiple={multiple}
			/>
			<button
				className={classes.button}
				onClick={event => {
					event.preventDefault();
					refInput.current.click();
				}}
			>
				{children}
			</button>
		</>
	);
};

export default ButtonInput;
