import React from 'react';
import style from './scss/UserItem.module.scss';
import { Link } from 'react-router-dom';
import { CHAT_PATH } from '../../asserts/links';

const UserItem = ({ isOpen }) => {
	return (
		<Link to={CHAT_PATH} className={`${style.UserItem} ${isOpen ? style.Open : ''}`}>
			<div className={style.Left}>Avatar</div>
			<div className={style.Right}>
				<div className={style.Name}>Name</div>
				<div className={style.Status}>Status</div>
			</div>
		</Link>
	);
};

export default UserItem;
