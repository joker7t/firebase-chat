import React, { useEffect } from 'react';
import style from './scss/Chat.module.scss';
import Header from './Header';
import UserSideDrawer from '../side-drawer/UserSideDrawer';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import UserDetails from './UserDetails';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REGISTER } from '../../asserts/links';

const Chat = ({ history, signInUser, message }) => {
	useEffect(() => {
		if (signInUser === null) {
			history.push(REGISTER);
		}
		//eslint-disable-next-line
	}, [signInUser]);

	useEffect(() => {
		console.log(message);

		//eslint-disable-next-line
	}, [message]);

	return (
		<div className={style.Chat}>
			<Header />
			<div className={style.Content}>
				<UserSideDrawer mustOpen={true} history={history} />
				<div className={style.MessageContainer}>
					<UserDetails />
					<ChatMessages />
					<ChatInput />
				</div>
			</div>
		</div>
	);
};

Chat.propTypes = {
	signInUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	signInUser: state.auth.user,
	message: state.message,
});

export default connect(mapStateToProps, null)(Chat);
