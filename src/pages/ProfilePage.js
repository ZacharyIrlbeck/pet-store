import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function ProfilePage(){
    const { userInfo, updateUserDescription, updateUserPassword } = useContext(AuthContext)

    return(
        <div>
            Email { userInfo.email }
            Description { userInfo.description }
        </div>
    )
}

export default ProfilePage