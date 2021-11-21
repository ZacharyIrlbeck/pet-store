import { act, render } from '@testing-library/react'
import useAuth from '../hooks/useAuth'

jest.mock('react-router', () => {
    return {
        useNavigate: () => {
            return jest.fn()
        }
    }
})

jest.mock('../context/VendorContext', () => {
    return {
        useVendorContext: () => {
            return {
                getVendorByEmail: (email) => {
                    return {
                        id: 1,
                        email: 'test@gmail.com',
                        password: 'password'
                    }
                }
            }
        }
    }
})

const getUseAuth = () => {
    let auth

    function TestComp(){
        auth = useAuth()

        return null
    }

    render(<TestComp />)
    return auth
}

describe('the useAuth hook', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('allows login with correct info', async () => {
        let authStuff, res

        act(() => {
            authStuff = getUseAuth()
        })

        await act(async () => {
            res = await authStuff.login("test@gmail.com", "password")
        })

        expect(res).toEqual(true)
    })

    it('doesnt allow login with incorrect information', async () => {
        let authStuff, res

        act(() => {
            authStuff = getUseAuth()
        })

        await act(async () => {
            res = await authStuff.login("test@gmail.com", "pa$$word")
        })

        expect(res).toEqual(false)
    })
})