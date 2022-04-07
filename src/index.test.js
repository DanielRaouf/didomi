import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './data/api-mock';
import { store } from './data/store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
})

test('Check side menu is clickable and navigates', async () => {
  const btn = screen.getByText(/Give consent/i);
  btn.click()
  await waitFor(() => 1, { timeout: 1000 });
  const checkboxElement1 = screen.getByText(/Name/i);
  expect(checkboxElement1).toBeInTheDocument();
});

test('Check consents checkbox list is loaded', async () => {
  const checkboxElement1 = screen.getByText(/Recieve newsletter/i);
  expect(checkboxElement1).toBeInTheDocument();
})

test('Check consents checkbox list is loaded', async () => {
  const nameInput = screen.getByTestId('name').querySelector('input')
  fireEvent.change(nameInput, {target: {value: 'Test User'}})
  const emailInput = screen.getByTestId('email').querySelector('input')
  fireEvent.change(emailInput, {target: {value: 'test@gmail.com'}})
  const input1 = screen.getByDisplayValue(/Test User/i);
  expect(input1).toBeInTheDocument();
  const input2 = screen.getByDisplayValue(/test@gmail.com/i);
  expect(input2).toBeInTheDocument();
  const consent = screen.getByTestId('consent_1')
  consent.click()
  await act(async () => {
    document.getElementById('submit_btn').click()
  })
  await waitFor(() => 1, { timeout: 1000 });
  const page3 = screen.getByText(/3/i);
  expect(page3).toBeInTheDocument();
})
