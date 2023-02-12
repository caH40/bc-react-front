import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getComments, postCommentNews, postCommentDelete } from '../../../api/comment';
import autosize from 'autosize';

import classes from './CommentBlock.module.css';
import CommentCreate from '../CommentCreate/CommentCreate';

const CommentBlock = ({ newsId }) => {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);
	const [popupId, setPopupId] = useState('');
	const [trigger, setTrigger] = useState(false);
	const textAreaRef = useRef();

	const authUser = useSelector(state => state.checkAuth.value);

	const sendComment = () => {
		postCommentNews(comment, newsId);
		setComment('');
		setTrigger(prev => !prev);
	};

	useEffect(() => {
		getComments(newsId).then(data => setComments(data?.data?.comments || []));
	}, [newsId, trigger]);

	const getMenu = newsId => {
		setPopupId(newsId);
		document.addEventListener('click', () => setPopupId(''), { once: true });
	};

	const deleteComment = commentId => {
		postCommentDelete(commentId).then(data => {
			setTrigger(prev => !prev);
		});
	};

	useEffect(() => {
		autosize(textAreaRef.current);
	}, []);

	return (
		<div className={classes.wrapper}>
			<CommentCreate
				textAreaRef={textAreaRef}
				authUser={authUser}
				sendComment={sendComment}
				comment={comment}
				setComment={setComment}
			/>

			{comments.map(commentOne => {
				const id = commentOne._id;
				const userAvatar = commentOne.postedBy?.photoProfile || '/images/avatar.svg';
				const userName = commentOne.postedBy?.username || 'Гость';
				const isVisiblePopupMenu = id === popupId;
				const isVisibleMenu =
					commentOne.postedBy?._id === authUser.user.id ||
					['admin', 'moderator'].includes(authUser.user.role);

				return (
					<div className={classes.comment} key={id}>
						<div className={classes.box__user}>
							<div className={classes.box__avatar}>
								<img className={classes.avatar} src={userAvatar} alt="avatar" />
							</div>
							<p className={classes.name} src="" alt="avatar">
								{userName}
							</p>
						</div>
						<p className={classes.box__text}>{commentOne.text}</p>
						{isVisibleMenu ? (
							<div className={classes.relative}>
								<div onMouseEnter={() => getMenu(id)} className={classes.box__menu}>
									<img className={classes.menu__img} src="/images/icons/3points.svg" alt="menu" />
								</div>
								{isVisiblePopupMenu ? (
									<div className={classes.popup__menu}>
										<div className={classes.popup__button} onClick={() => deleteComment(id)}>
											Удалить
										</div>
										{/* <div className={classes.popup__button}>Редактировать</div> */}
									</div>
								) : undefined}
							</div>
						) : undefined}
					</div>
				);
			})}
		</div>
	);
};

export default CommentBlock;
