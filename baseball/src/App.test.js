import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

test('renders without crashing', () => {
  rtl.render(<App />);
});

test('renders Dashboard component', () => {
  rtl.render(<Dashboard />);
});

test('renders Display component', () => {
  rtl.render(<Display />);
});
