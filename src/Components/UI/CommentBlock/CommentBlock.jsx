import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { postCommentNews } from '../../../api/comment';

import classes from './CommentBlock.module.css';

const CommentBlock = ({ newsId }) => {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);
	const authUser = useSelector(state => state.checkAuth.value);
	console.log(authUser);
	console.log({ comment });

	const sendComment = () => {
		postCommentNews(comment, newsId);
		setComment('');
	};

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
			<div className={classes.comment}>
				<div className={classes.box__user}>
					<div className={classes.box__avatar}>
						<img className={classes.avatar} src="/images/avatar.svg" alt="avatar" />
					</div>
					<p className={classes.name} src="" alt="avatar">
						Александр
					</p>
				</div>
				<p className={classes.box__text}>
					Тестовый комментарий для проверки заполнения поля для комментария и оценки качества
					расположения блока из нескольких строк.
				</p>
				<div className={classes.box__menu}>
					<img className={classes.menu} src="/images/icons/3points.svg" alt="menu" />
				</div>
			</div>
		</div>
	);
};

export default CommentBlock;
