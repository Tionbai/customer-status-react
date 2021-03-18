import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app', () => {
  render(<App />);
  const statusElement = screen.getByText(/status/i);
  expect(statusElement).toBeInTheDocument();
});
