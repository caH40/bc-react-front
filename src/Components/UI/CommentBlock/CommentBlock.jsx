import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getComments, postCommentNews, postCommentDelete } from '../../../api/comment';
import autosize from 'autosize';

import classes from './CommentBlock.module.css';

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
			<div className={classes.create}>
				<div className={classes.box__avatar}>
					<img
						className={classes.avatar}
						src={authUser.user.photoProfile || '/images/avatar.svg'}
						alt="avatar"
					/>
				</div>
				<textarea
					ref={textAreaRef}
					value={comment}
					onChange={e => setComment(e.target.value)}
					className={classes.textarea}
					placeholder="Комментарий"
				/>
				{comment ? (
					<div onClick={sendComment} className={classes.box__send}>
						<svg
							className={classes.send}
							width="28"
							height="21"
							viewBox="0 0 28 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 2L25 10.5427L2 19L5.5 10.5427L2 2Z"
								fill="#FF8C06"
								stroke="#FF8C06"
								strokeWidth="2"
							/>
						</svg>
					</div>
				) : undefined}
			</div>

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
