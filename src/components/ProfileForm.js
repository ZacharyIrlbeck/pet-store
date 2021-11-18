import { useState } from 'react'
import useAuth from '../hooks/useAuth'

function ProfileForm(){
    const [error, setError] = useState("")
    const [msg, setMsg] = useState("")
    const { updateUserProfile } = useAuth()

    const handleSubmit = e => {
        e.preventDefault()
        setMsg("")
        setError("")

        const fd = new FormData(e.currentTarget)
        const password = fd.get("password")
        const checkPassword = fd.get("check-password")
        const description = fd.get("description")

        if(password === checkPassword){
            const res = updateUserProfile({
                password,
                description
            })

            if(res){
                setMsg("successfully updated profile")
            }else{
                setError("couldnt update profile")
            }
        }else{
            setError("Passwords dont match")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            { error.length > 0 && error }
            { msg.length > 0 && msg }
            <input type="password" name="password" />
            <input type="password" name="check-password" />
            <textarea rows="5" cols="30" name="description">
                Your feedback goes here.
            </textarea>
            <button type="submit">Update</button>
        </form>
    )
}

export default ProfileForm