import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('should render root container', () => {
  render(<NotFound />);
  const title = screen.getByText(/NotFound/i);
  expect(title).toBeInTheDocument();
});
