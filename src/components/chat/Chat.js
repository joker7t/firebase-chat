import React from 'react';
import style from './scss/Chat.module.scss';
import Header from './Header';
import UserSideDrawer from '../side-drawer/UserSideDrawer';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import UserDetails from './UserDetails';

const Chat = () => {
	return (
		<div className={style.Chat}>
			<Header />
			<div className={style.Content}>
				<UserSideDrawer mustOpen={true} />
				<div className={style.MessageContainer}>
					<UserDetails />
					<ChatMessages />
					<ChatInput />
				</div>
			</div>
		</div>
	);
};

export default Chat;
