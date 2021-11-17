import { useState, useEffect } from 'react'

// fetch and save from local storage, redirect based on react router, probably can handle that there. 
// also, I wonder if I could go back through the hooks and add promises in to better mock an asymc requests,
// occasionally handling errors, so maybe an X % chance of it failing. 

function useAuth(){
    const [userInfo, setUserInfo] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    
    const login = (email, pass) => {
        // api call here ...
        const res = {
            email,
            pass
        }

        setIsLoggedIn(true)
        setUserInfo(res)
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