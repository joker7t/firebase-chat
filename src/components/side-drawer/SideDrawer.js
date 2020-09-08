import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './scss/SideDrawer.module.scss';
import UserItem from './UserItem';
import Search from './Search';
import firebase from '../../firebase';

const SideDrawer = ({ isOpen, user, history }) => {
	const [statusOpen, setStatusOpen] = useState(false);
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

	useEffect(() => {
		if (isOpen) {
			setStatusOpen(true);
		}
	}, [isOpen]);

	const showUserItems = () =>
		filteredUsers.map((user, i) => (
			<UserItem history={history} isChangeView={true} user={user} isOpen={statusOpen} key={i} />
		));

	return (
		<div className={`${style.SideDrawer} ${statusOpen ? style.Open : ''}`}>
			<Search isOpen={statusOpen} setFilteredUsers={setFilteredUsers} users={users} />
			{showUserItems()}
		</div>
	);
};

SideDrawer.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isOpen: state.sideDrawer.isOpen,
	user: state.auth.user,
});

export default connect(mapStateToProps, null)(SideDrawer);
