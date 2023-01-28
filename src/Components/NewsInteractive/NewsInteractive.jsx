import React, { useState } from 'react';

import classes from './NewsInteractive.module.css';
import Comments from '../UI/News/Comments/Comments';
import Dislike from '../UI/News/Dislike/Dislike';
import Like from '../UI/News/Like/Like';
import Share from '../UI/News/Share/Share';
import { useDispatch } from 'react-redux';
import { getLikeAction } from '../../redux/features/likesSlice';

const NewsInteractive = ({ newsOne }) => {
	const [likeQuantity, setLikeQuantity] = useState(newsOne?.likeQuantity);
	const [liked, setLiked] = useState(() =>
		newsOne.kudoses.usersIdLike.includes('6276ae21f8b87f186ffd6c1f')
	);
	const [disliked, setDisliked] = useState(() =>
		newsOne.kudoses.usersIdDislike.includes('6276ae21f8b87f186ffd6c1f')
	);

	const dispatch = useDispatch();

	const getLikes = target => {
		dispatch(
			getLikeAction({ action: target, newsId: newsOne._id, userId: '6276ae21f8b87f186ffd6c1f' })
		);

		if (target === 'like') {
			if (liked) {
				setLiked(false);
				setLikeQuantity(prev => prev - 1);
			} else {
				setLiked(true);
				//если данный Юзер ставил дизлайк, то количество лайков изменяется на 2
				if (disliked) setLikeQuantity(prev => prev + 1);
				setDisliked(false);
				setLikeQuantity(prev => prev + 1);
			}
		}

		if (target === 'dislike') {
			if (disliked) {
				setDisliked(false);
				setLikeQuantity(prev => prev + 1);
			} else {
				setDisliked(true);
				if (liked) setLikeQuantity(prev => prev - 1);
				setLiked(false);
				setLikeQuantity(prev => prev - 1);
			}
		}
	};

	return (
		<div className={classes.block}>
			<div className={classes.box}>
				<Like newsId={newsOne._id} likeQuantity={likeQuantity} liked={liked} getLikes={getLikes} />
				<Comments newsOne={newsOne} />
				<Share newsId={newsOne._id} />
				<Dislike newsId={newsOne._id} disliked={disliked} getLikes={getLikes} />
			</div>
			<div className="date">{new Date(newsOne.date).toLocaleString()}</div>
		</div>
	);
};

export default NewsInteractive;
