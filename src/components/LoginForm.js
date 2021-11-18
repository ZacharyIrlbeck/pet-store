import { useState } from 'react'
import { useNavigate } from 'react-router'
import useAuth from '../hooks/useAuth'

function LoginForm(){
    const { login } = useAuth()

    const navigate = useNavigate()

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
            navigate('/market', { replace: true })
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
            <button type="submit" >Login</button>
        </form>
    </div>)
}

export default LoginForm