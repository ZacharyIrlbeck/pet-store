import LoginForm from "../components/LoginForm"
import { useAuthContext } from "../context/AuthContext"
import { Navigate } from "react-router"

function LoginPage(){
    const { isLoggedIn } = useAuthContext()

    if(isLoggedIn)
        return(<Navigate to="/market" />)

    return(<LoginForm />)
}

export default LoginPage