import React from 'react';
import CheckboxTrails from './Checkbox/CheckboxTrails';
import classes from './NavbarTrails.module.css';
import SelectTrails from './Select/SelectTrails';

const NavbarTrails = ({ getSorting, getFilter, filter, isVisible, getVisible }) => {
	return (
		<nav className={classes.menu}>
			<SelectTrails getSorting={getSorting} />
			<CheckboxTrails
				getFilter={getFilter}
				filter={filter}
				isVisible={isVisible}
				getVisible={getVisible}
			/>
		</nav>
	);
};

export default NavbarTrails;
