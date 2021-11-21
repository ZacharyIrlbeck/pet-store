import { useState, useEffect } from 'react'
import { useVendorContext } from '../context/VendorContext'
import { useNavigate } from 'react-router'
import { Vendor } from '../type-definitions'


function useAuth(){
    const { getVendorByEmail } = useVendorContext()
    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState<Vendor | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem('user-info')

        if(user){
            const parsedUser: Vendor = JSON.parse(user)
            setUserInfo(parsedUser)
            setIsLoggedIn(true)
        }
    }, [])
    
    const login = async (email: string, password: string): Promise<boolean> => {
        const vendor = getVendorByEmail(email)
        
        if(vendor && vendor.password === password){
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

    const updateUserProfile = (data: Partial<Vendor>) => {
        setUserInfo(prev => {
            return Object.assign({}, userInfo, data)
        })
        
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