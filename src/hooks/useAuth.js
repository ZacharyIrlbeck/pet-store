import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

function useAuth(){
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem('user-info')

        if(user){
            setUserInfo(JSON.parse(user))
            setIsLoggedIn(true)
        }
    }, [])
    
    const login = (email, pass) => {
        
        const res = {
            email,
            pass,
            description: ""
        }

        setIsLoggedIn(true)
        setUserInfo(res)
        localStorage.setItem('user-info', JSON.stringify(res))

        return true
    }

    const logout = () => {
        setIsLoggedIn(false)
        setUserInfo(null)
        localStorage.removeItem('user-info')
        navigate('/login')
    }

    const updateUserDescription = desc => {
        const newData = {...userInfo}
        newData.description = desc

        setUserInfo(newData)
    }

    const updateUserPassword = pass => {
        const newData = {...userInfo}
        newData.password = pass

        setUserInfo(newData)
    }

    return {
        logout,
        login,
        isLoggedIn,
        userInfo,
        updateUserDescription,
        updateUserPassword
    }
}

export default useAuth 