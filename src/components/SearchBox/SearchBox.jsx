import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => (
	<input
		type='search'
		value={props.searchValue}
		onChange={props.search}
		className='SearchBox'
		placeholder='Search Robots'
	/>
);

export default SearchBox;
