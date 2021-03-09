import * as React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import { App } from './App';

describe('App', () => {
  it('renders App with TypeaheadWidget', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
