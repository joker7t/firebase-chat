import React, { useState } from 'react';
import style from './scss/Search.module.scss';

const Search = ({ isOpen, setFilteredUsers, users }) => {
	const [search, setSearch] = useState('');

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSearch = () => {
		if (search !== '') {
			const searchUsers = [...users];
			setFilteredUsers([...searchUsers.filter((user) => user.name.includes(search))]);
		} else {
			setFilteredUsers(users);
		}
	};

	return (
		<div className={`${style.Search} ${isOpen ? style.Open : ''}`}>
			<input type="text" name="search" value={search} onChange={handleChange} />
			<i className="fa fa-search fa-2x" onClick={handleSearch}></i>
		</div>
	);
};

export default Search;
