import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

const TypeaheadInput = ({ inputText = '', handleChange, handleClear }) => {

	return (
		<>
			<InputLabel htmlFor="search-input">Search for a fruit</InputLabel>
			<Input
				inputProps={{ 'aria-label': 'Search bar for fruit names' }}
				onChange={handleChange}
				placeholder="Fruit name"
				value={inputText}
				id="search-name"
				type="text"
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon color="primary" />
					</InputAdornment>
				}
				endAdornment={
					inputText.length > 0 &&
					<InputAdornment position="end" onClick={handleClear}>
						<ClearIcon />
					</InputAdornment>
				}
			/>

		</>
	)
};

export default TypeaheadInput;