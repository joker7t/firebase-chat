import React from 'react';
import style from './scss/UserSideDrawer.module.scss';
import UserItem from './UserItem';
import Search from './Search';

const UserSideDrawer = () => {
	const showUserItems = () => <UserItem isOpen={true} />;
	return (
		<div className={style.UserSideDrawer}>
			<Search isOpen={true} />
			{showUserItems()}
		</div>
	);
};

export default UserSideDrawer;
