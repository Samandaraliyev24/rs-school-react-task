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

test('should have inputs on within the form', () => {
  render(<Form />);
  const inputs = document.getElementsByTagName('input');
  const inputsArr = [].slice.call(inputs);
  expect(Array.isArray(inputsArr)).toBeTruthy();
});

test('should have 7 inputs on within the form', () => {
  render(<Form />);
  const inputHtmlCollection = document.getElementsByTagName('input');
  const inputsArr = [].slice.call(inputHtmlCollection);
  expect(inputsArr.length).toEqual(7);
});

test('should have select within the form', () => {
  render(<Form />);
  const selectHtmlCollection = document.getElementsByTagName('select');
  const selectArray = [].slice.call(selectHtmlCollection);
  expect(Array.isArray(selectArray)).toBeTruthy();
});

test('should have only one select within the form', () => {
  render(<Form />);
  const selectHtmlCollection = document.getElementsByTagName('select');
  const selectArray = [].slice.call(selectHtmlCollection);
  expect(selectArray.length).toEqual(1);
});

test('should not render form submit container initially', () => {
  const formContainer = document.getElementById('form-items-con');
  expect(formContainer).not.toBeInTheDocument();
});
