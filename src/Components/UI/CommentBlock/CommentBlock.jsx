import React from 'react';

import classes from './CommentBlock.module.css';

const CommentBlock = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.create}>
				<div className={classes.box__avatar}>
					<img className={classes.img} src="/images/avatar.svg" alt="avatar" />
				</div>
				<textarea className={classes.textarea} placeholder="Комментарий" />
				<div className={classes.box__send}>
					<img className={classes.send} src="/images/icons/arrow-send.svg" alt="arrow-send" />
				</div>
			</div>
			<div className={classes.comment}>
				<div className={classes.box__user}>
					<div className={classes.box__avatar}>
						<img className={classes.img} src="/images/avatar.svg" alt="avatar" />
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
