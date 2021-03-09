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
