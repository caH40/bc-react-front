import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from '../PagesCss/TrailEdit.module.css';

const TrailEdit = () => {
	const [trail, setTrail] = useState([]);

	const { trailId } = useParams({});

	useEffect(() => {}, [trail]);

	return <section className={classes.wrapper}></section>;
};

export default TrailEdit;
