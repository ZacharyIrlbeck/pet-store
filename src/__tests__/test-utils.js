import React from 'react'
import {render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

import VendorProvider from '../context/VendorContext'
import PetsProvider from '../context/PetContext'
import AuthProvider from '../context/AuthContext'

const AppStore = ({children}) => {
  return (
    <MemoryRouter>
        <VendorProvider>
            <PetsProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </PetsProvider>
        </VendorProvider>
    </MemoryRouter>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AppStore, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}