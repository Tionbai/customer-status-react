import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Solgt.no/i);
  expect(linkElement).toBeInTheDocument();
});
