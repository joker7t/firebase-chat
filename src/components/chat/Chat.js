import React, { useEffect, useState } from 'react';
import style from './scss/Chat.module.scss';
import Header from './Header';
import UserSideDrawer from '../side-drawer/UserSideDrawer';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import UserDetails from './UserDetails';
import { connect } from 'react-redux';
import { REGISTER } from '../../asserts/links';
import firebase from '../../firebase';
import firebaseLooper from '../../asserts/firebaseLooper';

const Chat = ({ history, signInUser, message }) => {
	const messageRef = firebase.database().ref('messages');
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		if (signInUser === null) {
			history.push(REGISTER);
		}
		//eslint-disable-next-line
	}, [signInUser]);

	useEffect(() => {
		const loadData = async () => {
			const loadedMessages = await messageRef.child(buildMessageId()).once('value');
			setMessages(firebaseLooper(loadedMessages));
		};

		loadData();

		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		let loadedMessages = [];
		messageRef.child(buildMessageId()).on('child_added', (messageNode) => {
			loadedMessages.push(messageNode.val());
			setMessages(loadedMessages);
		});
		console.log(loadedMessages);

		//eslint-disable-next-line
	}, [message]);

	const buildMessageId = () => {
		if (signInUser) {
			return signInUser.uid < message.toUser.uid
				? `${signInUser.uid}/${message.toUser.uid}`
				: `${message.toUser.uid}/${signInUser.uid}`;
		}
		return '';
	};

	return (
		<div className={style.Chat}>
			<Header />
			<div className={style.Content}>
				<UserSideDrawer mustOpen={true} history={history} />
				<div className={style.MessageContainer}>
					<UserDetails />
					<ChatMessages messages={messages} />
					<ChatInput user={signInUser} messageId={buildMessageId()} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	signInUser: state.auth.user,
	message: state.message,
});

export default connect(mapStateToProps, null)(Chat);
