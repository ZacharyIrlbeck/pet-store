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

    const updateUserProfile = data => {
        const { password, description } = data

        const newData = {...userInfo}

        if(data.hasOwnProperty('description')){
            newData.description = description
        }

        if(data.hasOwnProperty('password')){
            newData.pass = password
        }
        
        setUserInfo(newData)
        return true
    }

    return {
        logout,
        login,
        isLoggedIn,
        userInfo,
        updateUserProfile
    }
}

export default useAuth 