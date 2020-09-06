import React, { useState } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import LandingContent from './LandingContent';
import Footer from './Footer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSideDrawer } from '../../actions/sideDrawerAction';
import style from './scss/Landing.module.scss';
import SideDrawer from '../side-drawer/SideDrawer';

const Landing = ({ setSideDrawer, isOpen }) => {
	const handleClickArrow = () => {
		setSideDrawer(true);
	};

	return (
		<div className={style.Container}>
			<SideDrawer />
			<div className={style.Landing}>
				<i
					className={`${style.Arrow} ${isOpen ? style.HideArrow : ''} fa fa-arrow-right fa-2x`}
					aria-hidden="true"
					onClick={handleClickArrow}
				></i>
				<Header />
				<SubHeader />
				<LandingContent />
				<Footer />
			</div>
		</div>
	);
};

Landing.propTypes = {
	setSideDrawer: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
	isOpen: state.sideDrawer.isOpen,
});

export default connect(mapStateToProps, { setSideDrawer })(Landing);
