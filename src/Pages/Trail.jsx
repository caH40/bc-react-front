import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { getTrail } from '../api/trail';
import TrailDescription from '../Components/TrailDescription/TrailDescription';
import TrailTotal from '../Components/TrailTotal/TrailTotal';
import TrailVideo from '../Components/TrailVideo/TrailVideo';

const Trail = () => {
	const [trail, setTrail] = useState({});
	const { trailId } = useParams();

	useEffect(() => {
		getTrail(trailId).then(data => {
			setTrail(data);
		});
	}, [trailId]);
	return (
		<>
			{trail.nameRoute ? (
				<section className="trail__body">
					<Helmet>
						<meta
							name="description"
							content={`Велосипедный маршрут "${trail.nameRoute}" (${trail.state}), тип велосипеда - ${trail.bikeType}`}
						/>
						<meta property="og:title" content={`Описание маршрута "${trail.nameRoute}"`} />
						<meta
							property="og:description"
							content={`Велосипедный маршрут "${trail.nameRoute}" (${trail.state}), тип велосипеда - ${trail.bikeType}`}
						/>
						<meta property="og:image" content="/images/b.jpg" />
					</Helmet>
					<h3 className="title__page align__center">
						{trail?.nameRoute}
						<br />({trail?.state})
					</h3>
					<div className="trail__inner">
						<TrailDescription trail={trail} />
						{trail.urlVideo ? <TrailVideo url={trail.urlVideo} /> : ''}
						<TrailTotal trail={trail} />
					</div>
				</section>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default Trail;
