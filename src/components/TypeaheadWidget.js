import React, { useState } from 'react';
import TypeaheadInput from './TypeaheadInput';
import SuggestionList from './SuggestionList';

const TypeaheadWidget = ({ searchList = [] }) => {
	const [inputText, setInputText] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	const suggestionSelected = item => {
		setInputText(item);
		setSuggestions([]);
		alert(`${item} selected`);
	};

	const clearInput = () => {
		setInputText('');
		setSuggestions([]);
	};

	//Utils function that helps to match the input to an item of the list
	const checkMatch = (text, str) => {
		var pattern = str.split("").map((x) => {
			return `(?=.*${x})`
		}).join("");
		var regex = new RegExp(`${pattern}`, "g")
		return text.match(regex);
	};

	const matchInput = e => {
		setInputText(e.target.value);

		//User friendly search, it considers:
		//	user typing letters in wrong order
		//	case insensitivity
		//	compares the first letters of the input
		//	because the user will get the desired option faster
		//	as it gets less options in the list that contain the same first 3 characters
		const inputSub = inputText.toLowerCase().substring(0, 3);

		const newSuggestions = searchList.filter((text) => {
			const textSub = text.substring(0, 3).toLowerCase();
			return text.toLowerCase().includes(inputSub) || checkMatch(textSub, inputSub)
		});

		if (newSuggestions.length > 0) {
			setSuggestions(newSuggestions);
		}
	};

	return (
		<div className="form">
			<TypeaheadInput
				inputText={inputText}
				handleChange={matchInput}
				handleClear={clearInput}
			/>
			{inputText && <SuggestionList
				suggestions={suggestions}
				handleSelectSuggestion={suggestionSelected}
				highlightedLetters={inputText}
			/>}
		</div>
	);
}

export default TypeaheadWidget;