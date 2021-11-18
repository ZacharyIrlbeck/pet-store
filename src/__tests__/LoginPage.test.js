import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from '../pages/LoginPage'

describe('Login Page', () => {
  test('allows user to login', () => {
    render(<LoginPage />)
  });

//   test('redirects user on login to marketplace', () => {

//   })

//   test('shows message if password or email are incorrect', () => {

//   })
});