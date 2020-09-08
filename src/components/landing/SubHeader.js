import React from 'react';
import style from './scss/SubHeader.module.scss';

const SubHeader = () => {
	return (
		<div className={style.SubHeader}>
			<div>About</div>
			<div>
				<i className="fa fa-plus-circle fa-2x"></i>
			</div>
			<div>Forum</div>
		</div>
	);
};

export default SubHeader;
