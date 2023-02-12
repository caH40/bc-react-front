import React, { useEffect, useState } from 'react';

import classes from './NewsInteractive.module.css';
import Comments from '../UI/News/Comments/Comments';
import Dislike from '../UI/News/Dislike/Dislike';
import Like from '../UI/News/Like/Like';
import Share from '../UI/News/Share/Share';
import { useDispatch, useSelector } from 'react-redux';
import { getLikeAction } from '../../redux/features/likesSlice';
import { getAlert } from '../../redux/features/alertMessageSlice';
import { dateOnly } from '../../utils/date';
import { getNewsInteractive } from '../../api/news';

const NewsInteractive = ({ newsOne, isVisibleDate }) => {
	const [interactive, setInteractive] = useState({
		comments: {
			quantity: 0,
		},
		likes: {
			quantity: 0,
			userLiked: false,
			userDisliked: false,
		},
	});

	const authUser = useSelector(state => state.checkAuth.value.user.id);

	useEffect(() => {
		getNewsInteractive(newsOne._id).then(data => setInteractive(data.data.interactive));
	}, [newsOne]);

	const dispatch = useDispatch();

	const getLikes = target => {
		if (!authUser) {
			return dispatch(
				getAlert({ message: 'Необходима авторизация!', type: 'warning', isOpened: true })
			);
		}
		dispatch(getLikeAction({ action: target, newsId: newsOne._id, userId: authUser }));
	};

	return (
		<div className={classes.block}>
			<div className={classes.box}>
				<Like
					newsId={newsOne._id}
					likeQuantity={interactive.likes.quantity}
					liked={interactive.likes.userLiked}
					getLikes={getLikes}
				/>
				<Comments commentsQuantity={interactive.comments.quantity} />
				<Share newsId={newsOne._id} />
				<Dislike getLikes={getLikes} disliked={interactive.likes.userDisliked} />
			</div>
			{isVisibleDate ? <div className="date">{dateOnly(newsOne.date)}</div> : undefined}
		</div>
	);
};

export default NewsInteractive;
