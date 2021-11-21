import { renderHook } from '@testing-library/react-hooks'
import usePets from '../hooks/usePets'
import * as AuthContext from '../context/AuthContext'

describe('the use pets hook', () => {
    it('loads the pets once called', async () => {
        AuthContext.useAuthContext = jest.fn(() => {
            return {
                id: 1
            }
        })

        const { result, waitForNextUpdate } = renderHook(() => usePets())
        await waitForNextUpdate()

        expect(result.current.pets.length).toBeGreaterThan(0)  
    })
})