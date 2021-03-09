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
				id="search-input"
				onChange={handleChange}
				placeholder="Fruit name"
				value={inputText}
				startAdornment={
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				}
				endAdornment={
					<InputAdornment position="end">
						<ClearIcon onClick={handleClear} />
					</InputAdornment>
				}
			/>
		</>
	);
}

export default TypeaheadInput;