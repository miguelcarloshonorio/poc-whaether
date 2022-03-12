import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders index page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome here/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Wheater Charts', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wheater Charts/i);
  expect(linkElement).toBeInTheDocument();
});
