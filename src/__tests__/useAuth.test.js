import useAuth from '../hooks/useAuth'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { renderHook, act } from '@testing-library/react-hooks'


// import { renderHook, act } from '@testing-library/react-hooks'
// import { CounterStepProvider, useCounter } from './counter'

// test('should use custom step when incrementing', () => {
//   const wrapper = ({ children }) => <CounterStepProvider step={2}>{children}</CounterStepProvider>
//   const { result } = renderHook(() => useCounter(), { wrapper })

//   act(() => {
//     result.current.increment()
//   })

//   expect(result.current.count).toBe(2)
// })

// function getAuth(){
//     const wrapper = ({ children }) => 
//     let authFunctions

//     function HookContainer(){
//         authFunctions = useAuth()        

//         return null
//     }

//     act(() => {
//         render(<MemoryRouter><HookContainer /></MemoryRouter>)
//     })

//     return authFunctions
// }


// describe("the useAuth hook", () => {
//     it('logs a user in with valid credentials', () => {
//         const { login, isLoggedIn } = getAuth()
//         expect(isLoggedIn).toBe(false)

//     })

//     it('doesnt log an invalid user in', () => {

//     })

//     it('logs a user out', () => {

//     })

//     it('updates a logged in users profile information', () => {

//     })
// })