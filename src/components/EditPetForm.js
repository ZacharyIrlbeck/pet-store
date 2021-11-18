import { useContext, useState, useEffect } from 'react'
import { PetContext } from '../context/PetContext'

function EditPetForm({ pet }){
    const { updatePet } = useContext(PetContext)
    const [msg, setMsg] = useState("")
    const [err, setErr] = useState("")

    const [name, setName] = useState(pet.name)
    const [breed, setBreed] = useState(pet.breed)
    const [price, setPrice] = useState(pet.price)
    const [image, setImage] = useState(pet.image)

    const handleSubmit = e => {
        e.preventDefault()
        setMsg("")
        setErr("")

        const fd = new FormData(e.currentTarget)

        const name = fd.get("name")
        const breed = fd.get("breed")
        const price = fd.get("price")
        const image = fd.get("image")

        const res = updatePet(pet.id, {
            name,
            breed,
            price,
            image
        })

        if(res){
            setMsg("Successfully updated pet!")
        }else{
            setErr("Error updating pet")
        }
    }  

    return(
        <form onSubmit={handleSubmit}>
            { err.length > 0 && err }
            { msg.length > 0 && msg }
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" name="breed" value={breed} onChange={e => setBreed(e.target.value)} />
            <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} />
            <label>
                You can link to a photo below.
                <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)} />
            </label>
            <button type="submit">Update Listing</button>
        </form>
    )
}

export default EditPetForm