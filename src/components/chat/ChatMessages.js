import React from 'react';
import style from './scss/ChatMessages.module.scss';
import Message from './Message';

const ChatMessages = ({ messages }) => {
	const showMessages = () => messages.map((message, i) => <Message key={i} message={message} />);

	return (
		<div className={style.ChatMessages} id="messageContent">
			{showMessages()}
		</div>
	);
};

export default ChatMessages;
