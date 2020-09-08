import React, { useState } from 'react';
import style from './scss/ChatInput.module.scss';
import firebase from '../../firebase';

const ChatInput = ({ messageId, user }) => {
	const messageRef = firebase.database().ref('messages');
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setMessage(e.target.value);
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
		messageObj['content'] = message;
		return messageObj;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (message !== '') {
			try {
				await messageRef.child(messageId).push().set(createMessage());
			} catch (error) {
				console.log(error);
			}
			setMessage('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className={style.Container}>
			<input className={style.ChatInput} type="text" name="message" value={message} onChange={handleChange} />
			<button type="submit">send</button>
		</form>
	);
};

export default ChatInput;
