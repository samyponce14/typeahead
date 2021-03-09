import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SuggestionList = ({ suggestions = [], handleSelectSuggestion }) => {
	return (
		<List aria-label="Suggestion fruit list">
			{suggestions.map((fruit) => {
				return (
					<ListItem button key={fruit} onClick={() => handleSelectSuggestion(fruit)}>
						<ListItemText primary={fruit} />
					</ListItem>
				);
			})}
		</List>
	);
}

export default SuggestionList;