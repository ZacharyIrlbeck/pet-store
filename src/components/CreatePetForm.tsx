import { useState } from 'react'
import { usePetContext } from '../context/PetContext'

function CreatePetForm(){
    const { createPet } = usePetContext()
    const [msg, setMsg] = useState("")
    const [err, setErr] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setMsg("")
        setErr("")

        const fd = new FormData(e.currentTarget)

        const name = fd.get("name") as string 
        const breed = fd.get("breed") as string 
        const price = fd.get("price") as string 
        const image = fd.get("image") as string

        const res = createPet({
            name, breed, price, image
        })

        if(res){
            setMsg("Successfully created pet!")
        }else{
            setErr("Error creating pet")
        }
    }  

    return(
        <form onSubmit={e => handleSubmit(e)}>
            { err.length > 0 && err }
            { msg.length > 0 && msg }
            <input type="text" name="name" />
            <input type="text" name="breed" />
            <input type="number" name="price" />
            <label>
                You can link to a photo below.
                <input type="text" name="image" />
            </label>
            <button type="submit">List</button>
        </form>
    )
}

export default CreatePetForm