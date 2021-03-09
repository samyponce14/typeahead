import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SuggestionList = ({ suggestions = [], handleSelectSuggestion, highlightedLetters = '', cursor, refs }) => {

	const getHighlightedText = (text, highlight) => {
		// Split on highlight term and include term into parts, ignore case
		const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
		return <span> {parts.map((part, i) =>
			<span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontWeight: 'bold' } : {}}>
				{part}
			</span>)
		} </span>;
	};

	return (
		<List className="list" aria-label="Suggestion fruit list" >
			{suggestions.map((item, i) => {
				return (
					<ListItem
						button
						key={item}
						ref={refs[item]}
						selected={cursor === i}
						onClick={() => handleSelectSuggestion(item)}
					>
						<ListItemText
							primary={getHighlightedText(item, highlightedLetters)}
						/>
					</ListItem>
				);
			})}
		</List>
	);
}

export default SuggestionList;