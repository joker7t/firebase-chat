import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './scss/Message.module.scss';

const Message = ({ message, signInUser }) => {
	useEffect(() => {
		setTimeout(() => {
			const messageContent = document.querySelector('#messageContent');
			if (messageContent !== null) {
				messageContent.scrollTop = messageContent.scrollHeight;
			}
		}, 1);
	});

	return message && message.user ? (
		signInUser.uid === message.user.id ? (
			<div className={`${style.Message} ${style.Self}`}>
				<div className={style.Content}>{message.content}</div>
				<div className={style.Avatar}>
					<img src={message.user.avatar} alt={message.user.name} />
				</div>
			</div>
		) : (
			<div className={style.Message}>
				<div className={style.Avatar}>
					<img src={message.user.avatar} alt={message.user.name} />
				</div>
				<div className={style.Content}>{message.content}</div>
			</div>
		)
	) : (
		<div></div>
	);
};

const mapStateToProps = (state) => ({
	signInUser: state.auth.user,
});

export default connect(mapStateToProps, null)(Message);
