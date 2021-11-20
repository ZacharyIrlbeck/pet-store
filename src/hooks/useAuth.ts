import { useState, useEffect } from 'react'
import useVendors from './useVendors'
import { useNavigate } from 'react-router'

function useAuth(){
    const { getVendorByEmail } = useVendors()
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
    
    const login = async (email: string, password: string): Promise<boolean> => {
        const vendor = getVendorByEmail(email)
        
        if(vendor.password === password){
            setIsLoggedIn(true)
            setUserInfo(vendor)
            localStorage.setItem('user-info', JSON.stringify(vendor))
    
            return true
        }else{
            return false
        }
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
            newData.password = password
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