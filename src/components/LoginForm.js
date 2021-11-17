import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router'
import useAuth from '../hooks/useAuth'

function LoginForm(){
    const { login } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state ? location.state.from.pathname : "/"

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        setError(false)
        setErrorMsg("")

        let fd = new FormData(e.currentTarget)
        let email = fd.get("email")
        let password = fd.get("password")

        const res = login(email, password)

        if(res){
            navigate(from, { replace: true })
        }else{
            setErrorMsg("incorrent email or password")
            setError(true)
        }
    }

    return(<div>
        <h2>Login</h2>
        { error && errorMsg }
        <form onSubmit={handleSubmit} >
            <input type="email" name="email" />
            <input type="password"  name="password" />
            <button type="submit" />
        </form>
    </div>)
}

export default LoginForm