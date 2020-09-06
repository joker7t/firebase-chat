import React from 'react';
import style from './scss/Search.module.scss';

const Search = ({ isOpen }) => {
	return <div className={`${style.Search} ${isOpen ? style.Open : ''}`}>Search</div>;
};

export default Search;
