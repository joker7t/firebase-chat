import React from 'react';
import style from './scss/UserDetails.module.scss';

const UserDetails = ({ toUser }) => {
	return toUser ? (
		<div className={style.UserDetails}>
			<div className={style.Left}>
				<img src={toUser.avatar} alt={toUser.name} />
			</div>
			<div className={style.Right}>
				<div className={style.Name}>{toUser.name}</div>
				<div className={style.Status}>Online</div>
			</div>
			<div className={style.Info}>
				<i className="fa fa-ellipsis-v fa-2x"></i>
			</div>
		</div>
	) : (
		<div></div>
	);
};

export default UserDetails;
