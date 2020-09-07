import React from 'react';
import style from './scss/UserItem.module.scss';
import { Link } from 'react-router-dom';
import { CHAT_PATH } from '../../asserts/links';

const UserItem = ({ isOpen, user }) => {
	return (
		<Link to={CHAT_PATH} className={`${style.UserItem} ${isOpen ? style.Open : ''}`}>
			<div className={style.Left}>
				<img src={user.avatar} alt={user.name} />
			</div>
			<div className={style.Right}>
				<div className={style.Name}>{user.name}</div>
				<div className={style.Status}>{user.name}</div>
			</div>
		</Link>
	);
};

export default UserItem;
