import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getComments, postCommentNews } from '../../../api/comment';

import classes from './CommentBlock.module.css';

const CommentBlock = ({ newsId }) => {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);
	const [trigger, setTrigger] = useState(false);
	const authUser = useSelector(state => state.checkAuth.value);

	const sendComment = () => {
		postCommentNews(comment, newsId);
		setComment('');
		setTrigger(prev => !prev);
	};
	console.log(comments);
	useEffect(() => {
		getComments(newsId).then(data => setComments(data.data.comments));
	}, [newsId, trigger]);

	return (
		<div className={classes.wrapper}>
			<div className={classes.create}>
				<div className={classes.box__avatar}>
					<img className={classes.avatar} src={authUser.user.photoProfile} alt="avatar" />
				</div>
				<textarea
					value={comment}
					onChange={e => setComment(e.target.value)}
					className={classes.textarea}
					placeholder="Комментарий"
				/>
				{comment ? (
					<div onClick={sendComment} className={classes.box__send}>
						<img className={classes.send} src="/images/icons/arrow-send.svg" alt="arrow-send" />
					</div>
				) : undefined}
			</div>

			{comments.map(commentOne => {
				const userAvatar = commentOne.postedBy?.photoProfile
					? commentOne.postedBy.photoProfile
					: '/images/avatar.svg';
				const userName = commentOne.postedBy?.username ? commentOne.postedBy?.username : 'Гость';
				return (
					<div className={classes.comment}>
						<div className={classes.box__user}>
							<div className={classes.box__avatar}>
								<img className={classes.avatar} src={userAvatar} alt="avatar" />
							</div>
							<p className={classes.name} src="" alt="avatar">
								{userName}
							</p>
						</div>
						<p className={classes.box__text}>{commentOne.text}</p>
						<div className={classes.box__menu}>
							<img className={classes.menu} src="/images/icons/3points.svg" alt="menu" />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CommentBlock;
