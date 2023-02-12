import React, { useEffect, useRef, useState } from 'react';
import { postCommentNews } from '../../../api/comment';
import autosize from 'autosize';

import classes from './CommentCreate.module.css';

const CommentCreate = ({ authUser, setTrigger, newsId }) => {
	const [comment, setComment] = useState('');
	const textAreaRef = useRef();

	useEffect(() => {
		autosize(textAreaRef.current);
	}, []);

	const sendComment = () => {
		postCommentNews(comment, newsId);
		setComment('');
		setTrigger(prev => !prev);
	};
	return (
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
	);
};

export default CommentCreate;
