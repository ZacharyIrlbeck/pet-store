import { useState, useEffect } from 'react'

function useAuth(){
    const [userInfo, setUserInfo] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const login = (email, pass) => {
        
        const res = {
            email,
            pass
        }

        setIsLoggedIn(true)
        setUserInfo(res)

        return true
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    return {
        logout,
        login,
        isLoggedIn,
        userInfo
    }
}

export default useAuth 