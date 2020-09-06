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

const Chat = ({ history, signInUser }) => {
	useEffect(() => {
		if (signInUser === null) {
			history.push(REGISTER);
		}

		//eslint-disable-next-line
	}, [signInUser]);

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

Chat.propTypes = {
	signInUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	signInUser: state.auth.user,
});

export default connect(mapStateToProps, null)(Chat);
