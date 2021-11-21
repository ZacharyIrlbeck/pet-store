import { renderHook } from '@testing-library/react-hooks'
import useVendors from '../hooks/useVendors'

describe('the useVendors hook', () => {
    it('returns a list of vendors', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useVendors())
        await waitForNextUpdate()

        expect(result.current.vendors.length).toBeGreaterThan(0)
    })

    it('returns a vendor by email', async () => {
        const testEmail = 'test@gmail.com'
        const { result, waitForNextUpdate } = renderHook(() => useVendors())
        await waitForNextUpdate()

        const vendor = result.current.getVendorByEmail(testEmail)
        expect(vendor.id).toEqual(11)
    })

    it('returns a vendor by ID', async () => {
        const testEmail = 'test@gmail.com'
        const testId = 11
        const { result, waitForNextUpdate } = renderHook(() => useVendors())
        await waitForNextUpdate()

        const vendor = result.current.getVendor(testId)
        expect(vendor.email).toEqual(testEmail)
    })
})