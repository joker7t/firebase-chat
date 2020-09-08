import React from 'react';
import style from './scss/Footer.module.scss';

const Footer = () => {
	return (
		<div className={style.Footer}>
			<i className="fa fa-youtube fa-2x"></i>
			<i className="fa fa-twitter fa-2x"></i>
			<i className="fa fa-facebook fa-2x"></i>
		</div>
	);
};

export default Footer;
