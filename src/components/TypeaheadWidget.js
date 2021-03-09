import React, { useState } from 'react';
import TypeaheadInput from './TypeaheadInput';
import SuggestionList from './SuggestionList';

const TypeaheadWidget = ({ searchList = [] }) => {
	const [inputText, setInputText] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [cursor, setCursor] = useState(-1);

	const suggestionSelected = item => {
		setInputText(item);
		setSuggestions([]);
		setCursor(-1);
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

	//Create references for each list item
	const refs = suggestions.reduce((acc, value) => {
		acc[value] = React.createRef();
		return acc;
	}, {});

	const handleScroll = id => {
		refs[id].current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	const onKeyUp = e => {
		//Check if key is:
		//	Enter - to select the current input
		//	Up Arrow - to highlight next list item
		//	Down Arrow - to highlight previous list item
		//	any letter - to focus on input instead of list
		if (e.keyCode === 13 && cursor >= 0) {
			suggestionSelected(suggestions[cursor]);
		} else if (e.keyCode === 13) {
			suggestionSelected(inputText);
		} else if (e.keyCode === 38 && cursor >= 0) {
			updateCursor(cursor - 1);
		} else if (e.keyCode === 40 && cursor < suggestions.length - 1) {
			updateCursor(cursor + 1);
		} else if (e.keyCode >= 65 && e.keyCode <= 90) {
			setCursor(-1);
		}
	};

	//Update cursor and scroll to current item in list
	const updateCursor = i => {
		if (i >= 0) {
			handleScroll(suggestions[i]);
		}
		setCursor(i);
	};

	return (
		<div
			className="form"
			onKeyUp={onKeyUp}
		>
			<TypeaheadInput
				inputText={inputText}
				handleChange={matchInput}
				handleClear={clearInput}
			/>
			{inputText && <SuggestionList
				suggestions={suggestions}
				handleSelectSuggestion={suggestionSelected}
				highlightedLetters={inputText}
				cursor={cursor}
				refs={refs}
			/>}
		</div>
	);
}

export default TypeaheadWidget;