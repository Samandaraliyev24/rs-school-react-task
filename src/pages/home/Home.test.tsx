import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('should render root container', () => {
  render(<Home />);
  const rootContainer = document.querySelector('.root');
  expect(rootContainer).toBeInTheDocument();
});

test('should render search input', () => {
  render(<Home />);
  const input = document.querySelector('.search__form-input');
  expect(input).toBeInTheDocument();
});

test('should set item in the localstorage', () => {
  render(<Home />);
  window.localStorage.setItem('inputVal', 'hello');
  const localStorageVal = window.localStorage.getItem('inputVal');
  expect(localStorageVal).toEqual('hello');
});
