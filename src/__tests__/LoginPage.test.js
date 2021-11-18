// import React from 'react';
// import { render, screen } from './test-utils';
// import LoginPage from '../pages/LoginPage'
// import userEvent from '@testing-library/user-event'

// const defaultEmail = "test@gmail.com"
// const defaultPassword = "password"

// const setup = () => {
//     render(<LoginPage />)

//     const emailInput = screen.getByTestId("login-email")
//     const passwordInput = screen.getByTestId("login-password")
//     const submitButton = screen.getByTestId("login-submit")

//     return {
//         emailInput,
//         passwordInput,
//         submitButton
//     }
// }


// describe('Login Page', () => {
//   test("user can login with correct email and password, redirects to market", () => {
//     const { emailInput, passwordInput, submitButton } = setup()

//     userEvent.type(emailInput, defaultEmail)
//     userEvent.type(passwordInput, defaultPassword)
//     userEvent.click(submitButton)

//     // how can I know if this was successful? Well, if the status of the user  changes to login
//   })

//   test("displays error message for incorrect user and password", () => {

//   })

//   test("disallows submission without input", () => {

//   })

//   test("if already logged in, redirects to marketplace", () => {

//   })
// });