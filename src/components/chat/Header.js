import React from 'react';
import style from './scss/Header.module.scss';
import { Link } from 'react-router-dom';
import { LANDING_PATH } from '../../asserts/links';

const Header = () => {
	return (
		<div className={style.Header}>
			<Link to={LANDING_PATH}>
				<i className="fa fa-arrow-circle-left fa-2x"></i>
			</Link>
		</div>
	);
};

export default Header;
