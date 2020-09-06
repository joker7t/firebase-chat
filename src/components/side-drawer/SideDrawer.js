import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './scss/SideDrawer.module.scss';
import UserItem from './UserItem';
import Search from './Search';

const SideDrawer = ({ isOpen, mustOpen }) => {
	const [statusOpen, setStatusOpen] = useState(false);

	useEffect(() => {
		if (mustOpen) {
			setStatusOpen(true);
		} else {
			if (isOpen) {
				setStatusOpen(true);
			}
		}
	}, [isOpen, mustOpen]);

	const showUserItems = () => <UserItem isOpen={statusOpen} />;

	return (
		<div className={`${style.SideDrawer} ${statusOpen ? style.Open : ''}`}>
			<Search />
			{showUserItems()}
		</div>
	);
};

SideDrawer.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isOpen: state.sideDrawer.isOpen,
});

export default connect(mapStateToProps, null)(SideDrawer);
