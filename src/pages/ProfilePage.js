import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import ProfileForm from '../components/ProfileForm'

function ProfilePage(){
    const { userInfo } = useContext(AuthContext)
    const [editing, setEditing] = useState(false)

    return(
        <div>
            Email { userInfo.email }
            Description { userInfo.description }
            { editing && <ProfileForm /> }
            <button onClick={() => setEditing(!editing)}>{editing ? "Cancel" : "Edit" }</button>
        </div>
    )
}

export default ProfilePage