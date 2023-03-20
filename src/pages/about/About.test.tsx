import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('should render root container', () => {
  render(<About />);
  const title = screen.getByText(/About/i);
  expect(title).toBeInTheDocument();
});
