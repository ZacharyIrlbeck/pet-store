import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PetContext } from "../context/PetContext";
import { VendorContext } from "../context/VendorContext";
import { AuthContext } from "../context/AuthContext";
import EditPetForm from "../components/EditPetForm";

export default function PetInfoPage(){
    const { pets, removeListing } = useContext(PetContext)
    const { getVendor } = useContext(VendorContext)
    const { userInfo } = useContext(AuthContext)
    const { petId } = useParams()
    const [pet, setPet] = useState(null)
    const [vendor, setVendor] = useState(null)
    const [isPetOwner, setIsPetOwner] = useState(false)

    useEffect(() => {
        const p = pets.find(p => p.id === parseInt(petId))
        setPet(p)

    }, [petId, pets])

    useEffect(() => {
        if(!pet)
            return 
            
        const v = getVendor(pet.vendor_id)
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