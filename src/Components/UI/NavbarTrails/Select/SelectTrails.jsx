import React from 'react';

import classes from '../NavbarTrails.module.css';

const SelectTrails = ({ getSorting }) => {
	return (
		<div className={classes.item}>
			<select
				className={[classes.btn, classes.select].join(' ')}
				name="filter-card"
				onChange={getSorting}
			>
				<option
					className={classes.option}
					value={JSON.stringify({ sortField: 'distance', sortDirection: 'up' })}
				>
					увеличение дистанции
				</option>
				<option
					className={classes.option}
					value={JSON.stringify({ sortField: 'distance', sortDirection: 'down' })}
				>
					уменьшение дистанции
				</option>
				<option
					className={classes.option}
					value={JSON.stringify({ sortField: 'ascent', sortDirection: 'up' })}
				>
					увеличение набора
				</option>
				<option
					className={classes.option}
					value={JSON.stringify({ sortField: 'ascent', sortDirection: 'down' })}
				>
					уменьшение набора
				</option>
			</select>
		</div>
	);
};

export default SelectTrails;
