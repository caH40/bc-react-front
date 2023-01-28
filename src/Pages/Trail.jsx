import React, { useEffect, useState } from 'react';
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
