import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './scss/SideDrawer.module.scss';
import UserItem from './UserItem';

const SideDrawer = ({ isOpen }) => {
	const showUserItems = () => <UserItem isOpen={isOpen} />;

	return <div className={`${style.SideDrawer} ${isOpen ? style.Open : ''}`}>{showUserItems()}</div>;
};

SideDrawer.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isOpen: state.sideDrawer.isOpen,
});

export default connect(mapStateToProps, null)(SideDrawer);
