import React, { useState, useEffect } from 'react';
import style from './scss/UserSideDrawer.module.scss';
import UserItem from './UserItem';
import Search from './Search';
import firebase from '../../firebase';
import { connect } from 'react-redux';

const UserSideDrawer = ({ user, history }) => {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);

	const usersRef = firebase.database().ref('users');

	useEffect(() => {
		const userId = user && user.uid;
		let loadedUsers = [];
		usersRef.on('child_added', (snap) => {
			if (userId !== snap.key) {
				loadedUsers.push({
					...snap.val(),
					uid: snap.key,
				});
			}
		});
		setUsers(loadedUsers);
		setFilteredUsers(loadedUsers);

		//eslint-disable-next-line
	}, []);

	const showUserItems = () =>
		filteredUsers.map((user, i) => (
			<UserItem isChangeView={false} history={history} user={user} isOpen={true} key={i} />
		));

	return (
		<div className={style.UserSideDrawer}>
			<Search isOpen={true} setFilteredUsers={setFilteredUsers} users={users} />
			{showUserItems()}
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(UserSideDrawer);
