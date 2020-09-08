import React from 'react';
import style from './scss/ChatMessages.module.scss';

const ChatMessages = ({ messages }) => {
	const showMessages = () => messages.map((message, i) => <div key={i}>123</div>);

	return <div className={style.ChatMessages}>{showMessages()}</div>;
};

export default ChatMessages;
