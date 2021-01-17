import React from 'react';
import searchIcon from './images/searchIcon.png';
import './SearchBox.css'

const SearchBox = ({ searchfield, searchChange }) => {
	console.log("SearchBox")
	return (
		<div className ='pa2'>
			<label> 
				<img className = 'box' alt="Search" src={searchIcon}/>
				<input
					className = 'pa3 ba b--green bg-lightest-blue'
					type='search' 
					placeholder = 'search robots'
					onChange = {searchChange}
				/>
			</label>
		</div>
	)
}

export default SearchBox;