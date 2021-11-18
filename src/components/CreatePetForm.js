import { useContext, useState } from 'react'
import { PetContext } from '../context/PetContext'

function CreatePetForm(){
    const { createPet } = useContext(PetContext)
    const [msg, setMsg] = useState("")
    const [err, setErr] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        setMsg("")
        setErr("")

        const fd = new FormData(e.currentTarget)

        const firstname = fd.get("firstname")
        const breed = fd.get("breed")
        const price = fd.get("price")
        const image = fd.get("image")

        const res = createPet({
            firstname,
            breed,
            price,
            image
        })

        if(res){
            setMsg("Successfully created pet!")
        }else{
            setErr("Error creating pet")
        }
    }  

    return(
        <form onSubmit={handleSubmit}>
            { err.length > 0 && err }
            { msg.length > 0 && msg }
            <input type="text" name="firstname" />
            <input type="text" name="breed" />
            <input type="number" name="price" />
            <label for="image" >
                You can link to a photo below.
                <input type="text" name="image" />
            </label>
            <button type="submit">List</button>
        </form>
    )
}

export default CreatePetForm