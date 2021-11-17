import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PetContext } from "../context/PetContext";

export default function PetInfoPage(){
    const { pets } = useContext(PetContext)
    const { petId } = useParams()
    const [pet, setPet] = useState(null)

    useEffect(() => {
        const p = pets.filter(p => p.id === parseInt(petId))
        if(p)
            setPet(p[0])

    }, [petId, pets])

    useEffect(() => {
        console.log('the pet is...', pet)
    }, pet)

    return(<div>
        {
            pet && <div>
                Name: {pet.name}
                Breed: {pet.breed}
                Price: {pet.price}

                <img src={pet.image} height="200px" width="100px" />
            </div>
        }
    </div>)
}