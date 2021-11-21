import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../context/AuthContext'

function LoginForm(){
    const { login } = useAuthContext()

    const navigate = useNavigate()

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setError(false)
        setErrorMsg("")

        let fd = new FormData(e.currentTarget)
        let email = fd.get("email") as string 
        let password = fd.get("password") as string

        const res = await login(email, password)

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
        <form onSubmit={e => handleSubmit(e)} >
            <input data-testid="login-email" type="email" name="email" />
            <input data-testid="login-password" type="password"  name="password" />
            <button data-testid="login-submit" type="submit" >Login</button>
        </form>
    </div>)
}

export default LoginForm