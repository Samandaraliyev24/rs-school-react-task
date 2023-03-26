import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

test('should render Form container', () => {
  render(<Form />);
  const mainFormContainer = document.querySelector('.form-main');
  expect(mainFormContainer).toBeInTheDocument();
});

test('should render form element', () => {
  render(<Form />);
  const forms = document.getElementsByTagName('form');
  expect(forms.length).toBeTruthy();
});

test('should have no disabled submit function', () => {
  render(<Form />);
  const submitInput = document.querySelector('.form-com__element-submit');
  expect(submitInput).toBeTruthy();
});
