import React from 'react';
import TypeaheadWidget from './TypeaheadWidget';
import searchList from '../searchList';

export function App() {
  return (
    <TypeaheadWidget searchList={searchList} />
  );
}
