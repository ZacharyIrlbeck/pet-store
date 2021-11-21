import { useState, useEffect } from 'react'
import useVendors from './useVendors'
import { useNavigate } from 'react-router'
import { Vendor } from '../type-definitions'

// interface State {
//     isLoggedIn: boolean,
//     userInfo: Vendor | null
// }

// type Action = 
// | { type: "LOGIN", payload: Vendor }
// | { type: "UPDATE", payload: Partial<Vendor> }
// | { type: "LOGOUT" }

// const initialState: State = {
//     isLoggedIn: false,
//     userInfo: null
// }


// const authReducer = (state: State, action: Action) : State => {
//     switch(action.type){
//         case "LOGIN":
//             return {
//                 isLoggedIn: true,
//                 userInfo: action.payload
//             }
//         case "LOGOUT": 
//             return {
//                 isLoggedIn: false,
//                 userInfo: null
//             }
//         case "UPDATE":
//             return Object.assign({}, state, action.payload)
//         default: 
//             return state
//     }
// }

function useAuth(){
    const { getVendorByEmail } = useVendors()
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