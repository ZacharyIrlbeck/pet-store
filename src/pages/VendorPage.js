import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VendorContext } from '../context/VendorContext'
import { PetContext } from '../context/PetContext'
import PetCard from '../components/PetCard'


// I should be able to reuse the pet cards here. 

function VendorPage(){
    const { getVendor } = useContext(VendorContext)
    const { fetchPetsByVendor } = useContext(PetContext)
    const { vendorId } = useParams()
    const [vendor, setVendor] = useState(null)
    const [listedPets, setListedPets] = useState([])
    const vId = parseInt(vendorId)

    useEffect(() => {
        const v = getVendor(vId)
        const p = fetchPetsByVendor(vId)

        setVendor(v)
        setListedPets(p)
    }, [vendorId])

    if(!vendor){
        return <div>Loading ...</div>
    }

    return(
        <div>
            { vendor.displayname }

            Pets 

            { listedPets.map(p => <PetCard pet={p} key={p.id} />) }

        </div>
    )
}

export default VendorPage