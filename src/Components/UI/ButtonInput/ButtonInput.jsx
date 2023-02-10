import React, { useRef } from 'react';

import classes from './ButtonInput.module.css';

const ButtonInput = ({
	getClick,
	children,
	multiple = false,
	accept = '.jpg, .jpeg, .png, .webp',
}) => {
	const refInput = useRef('');

	return (
		<>
			<input
				ref={refInput}
				className={classes.hidden}
				onChange={getClick}
				type="file"
				multiple={multiple}
				accept={accept}
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
