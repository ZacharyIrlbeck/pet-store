import { useState } from 'react'
import { usePetContext} from '../context/PetContext'
import { Pet } from '../type-definitions/'

type EditPetFormProps = {
    pet: Pet
}

function EditPetForm({ pet }: EditPetFormProps){
    const { updatePet } = usePetContext()
    const [msg, setMsg] = useState("")
    const [err, setErr] = useState("")

    const [name, setName] = useState(pet.name)
    const [breed, setBreed] = useState(pet.breed)
    const [price, setPrice] = useState(pet.price)
    const [image, setImage] = useState(pet.image)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMsg("")
        setErr("")

        const fd = new FormData(e.currentTarget)

        const name = fd.get("name") as string 
        const breed = fd.get("breed") as string 
        const price = fd.get("price") as string 
        const image = fd.get("image") as string

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
        <form onSubmit={e => handleSubmit(e)}>
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