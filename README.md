# Typeahead Widget

Also sometimes called an “autocomplete” input.
A widget created with React.js and Material-UI.

#### Inspiration:
* <https://www.airbnb.com/> (the “where” input)
* <https://sesamecare.com/> (either search input)

## Features

* Upon typing, the widget fuzzy-matches case-insensitively against a provided list and presents list items that contain the matched characters as suggestions.
* Clicking an autocomplete suggestion should fill in the input with the full text.
* Using the up and down arrow keys allows the user to highlight a
desired suggestion and press Enter to select it, filling in the input.
* The user is able to proceed without choosing one of the suggestions (non-exclusive).
* The floating suggestion area becomes scrollable when there are many suggestions
* The matched portion of the suggestion is highlighted in some way.

## Approach & Priorities

1. Take a look at the provided inspiration websites and play around with them.
2. Decide to use a React UI framework, and choose Material-UI , because I like its styles better.
3. Create a basic React app and install Material-UI.
4. Design a hierarchy of components trying to make them descriptive and focused only on one functionality.
    * TypeaheadWidget contains the other components and is in charge of matching the input to the items in the list.
    * TypeaheadInput is in charge of receiving the input text of the user.
    * SuggestionList is in charge of rendering the resulting list of the matching function in TypeaheadWidget.
5. Create these components, create a matching function and make everything work together.
6. Highlight the matching part of the input in each list item.
7. Add arrow navigation and Enter behavior.

## Running

In order to run and use the widget you have to clone the repository and execute the following commands:

```bash
npm install
npm start
```

## Testing

In order to run the available tests execute the following command:

```bash
npm test
```
