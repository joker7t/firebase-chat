import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import LandingContent from './LandingContent';
import Footer from './Footer';
import style from './scss/Landing.module.scss';

const Landing = () => {
	return (
		<div className={style.Landing}>
			<i className={`${style.Arrow} fa fa-arrow-right fa-2x`} aria-hidden="true"></i>
			<Header />
			<SubHeader />
			<LandingContent />
			<Footer />
		</div>
	);
};

export default Landing;
