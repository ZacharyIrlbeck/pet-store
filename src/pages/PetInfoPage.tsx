import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { usePetContext } from "../context/PetContext";
import { useVendorContext } from "../context/VendorContext";
import { useAuthContext } from "../context/AuthContext";
import EditPetForm from "../components/EditPetForm";
import { Pet, Vendor } from '../type-definitions'

export default function PetInfoPage(){
    const { pets } = usePetContext()
    const { getVendor } = useVendorContext()
    const { userInfo } = useAuthContext()
    const { petId } = useParams()
    const [pet, setPet] = useState<Pet | null>(null)
    const [vendor, setVendor] = useState<Vendor | null>(null)
    const [isPetOwner, setIsPetOwner] = useState(false)

    useEffect(() => {
        if(petId){
            const p = pets.find(p => p.id === parseInt(petId))

            if(p)
                setPet(p)
        }

    }, [petId, pets])

    useEffect(() => {
        if(!pet)
            return 
            
        const v = getVendor(pet.vendor_id)
        if(v)
            setVendor(v)
    }, [pet, getVendor, setVendor])

    useEffect(() => {
        if(!pet || !userInfo)
            return 

        setIsPetOwner(userInfo.id === pet.vendor_id)
    }, [userInfo, pet])

    if(!pet || !vendor){
        return(<div>Loading...</div>)
    }

    return(<div>
        <div>
            Name: {pet.name}
            Breed: {pet.breed}
            Price: {pet.price}

            <img src={pet.image} height="200px" width="100px" alt="" />

            { !isPetOwner && <Link to={`/vendor/${vendor.id}`}>Visit {vendor.displayname}'s page</Link> }
            { isPetOwner && <EditPetForm pet={pet} /> }
        </div>
    </div>)
}