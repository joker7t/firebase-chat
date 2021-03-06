import React from 'react';
import style from './scss/UserItem.module.scss';
import { CHAT_PATH } from '../../asserts/links';
import { connect } from 'react-redux';
import { setMessageUser, setMessages } from '../../actions/messageAction';

const UserItem = ({ isOpen, user, isChangeView, history, setMessageUser }) => {
	const handleClick = () => {
		setMessageUser(user);

		if (isChangeView) {
			history.push(`${CHAT_PATH}/${user.uid}`);
		}
	};

	return (
		<div onClick={handleClick} className={`${style.UserItem} ${isOpen ? style.Open : ''}`}>
			<div className={style.Left}>
				<img src={user.avatar} alt={user.name} />
			</div>
			<div className={style.Right}>
				<div className={style.Name}>{user.name}</div>
				<div className={style.Status}>Online</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	signInUser: state.auth.user,
});

export default connect(mapStateToProps, { setMessageUser, setMessages })(UserItem);
