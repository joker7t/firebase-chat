import React, { useState } from 'react';
import style from './scss/ChatInput.module.scss';
import firebase from '../../firebase';

const ChatInput = ({ messageId, user, messages, setMessages }) => {
	const messageRef = firebase.database().ref('messages');
	const [messageText, setMessageText] = useState('');

	const handleChange = (e) => {
		setMessageText(e.target.value);
	};

	const createMessage = () => {
		const messageObj = {
			timestamp: firebase.database.ServerValue.TIMESTAMP,
			user: {
				id: user.uid,
				name: user.displayName,
				avatar: user.photoURL,
			},
		};
		messageObj['content'] = messageText;
		return messageObj;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (messageText !== '') {
			try {
				await messageRef.child(messageId).push().set(createMessage());
				setMessages([...messages, createMessage()]);
			} catch (error) {
				console.log(error);
			}
			setMessageText('');
			setTimeout(() => {
				const messageContent = document.querySelector('#messageContent');
				if (messageContent !== null) {
					messageContent.scrollTop = messageContent.scrollHeight;
				}
			}, 1);
		}
	};

	return (
		<form onSubmit={handleSubmit} className={style.Container}>
			<input
				className={style.ChatInput}
				type="text"
				name="messageText"
				value={messageText}
				onChange={handleChange}
			/>
			<button type="submit">send</button>
		</form>
	);
};

export default ChatInput;
