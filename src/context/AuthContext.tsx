import * as React from 'react'
import { createContext } from "react";
import useAuth from "../hooks/useAuth";
import { AuthContextInterface } from '../type-definitions';

const AuthContext = createContext<AuthContextInterface | null>(null)
 
type AuthProviderProps = { children: React.ReactNode }

function AuthProvider({ children }: AuthProviderProps){
    const authData = useAuth()

    return(
        <AuthContext.Provider value={authData}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider

export {
    AuthContext
}