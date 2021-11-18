import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { PetContext } from '../context/PetContext'
import ProfileForm from '../components/ProfileForm'
import PetCard from '../components/PetCard'

function ProfilePage(){
    const { userInfo } = useContext(AuthContext)
    const { fetchPetsByVendor } = useContext(PetContext)
    const [editing, setEditing] = useState(false)
    const [pets, setPets] = useState([])

    useEffect(() => {
        if(!userInfo)
            return 

        const p = fetchPetsByVendor(userInfo.id)
        setPets(p)
    }, [userInfo, fetchPetsByVendor])

    if(!userInfo || pets.length === 0){
        return(<div>Loading...</div>)
    }

    return(
        <div>
            Email { userInfo.email }
            Description { userInfo.description }
            { editing && <ProfileForm /> }
            <button onClick={() => setEditing(!editing)}>{editing ? "Cancel" : "Edit" }</button>

            My Pets 

            { pets && pets.map(p => <PetCard pet={p} key={p.id} />)}


        </div>
    )
}

export default ProfilePage