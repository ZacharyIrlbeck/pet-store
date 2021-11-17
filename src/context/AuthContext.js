import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = createContext()

function AuthProvider({ children }){
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