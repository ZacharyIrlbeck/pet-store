import LoginForm from "../components/LoginForm"
import { AuthContext } from "../context/AuthContext"
import { useContext } from 'react'
import { Navigate } from "react-router"

function LoginPage(){
    const { isLoggedIn } = useContext(AuthContext)

    if(isLoggedIn)
        return(<Navigate to="/market" />)

    return(<LoginForm />)
}

export default LoginPage