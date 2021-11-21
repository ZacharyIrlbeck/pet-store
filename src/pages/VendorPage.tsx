import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useVendorContext } from '../context/VendorContext'
import { usePetContext } from '../context/PetContext'
import PetCard from '../components/PetCard'
import { Pet, Vendor} from '../type-definitions'

function VendorPage(){
    const { getVendor } = useVendorContext()
    const { fetchPetsByVendor } = usePetContext()
    const { vendorId } = useParams()
    const [vendor, setVendor] = useState<Vendor | null>(null)
    const [listedPets, setListedPets] = useState<Pet[]>([])
    const [venId, setVenId] = useState<number | null>(null)

    useEffect(() => {
        const { vendorId } = useParams()

        if(vendorId){
            setVenId(parseInt(vendorId))
            const v = getVendor(parseInt(vendorId))
            if(v)
                setVendor(v)

            const p = fetchPetsByVendor(parseInt(vendorId))
            setListedPets(p)
        }

    }, [vendorId, getVendor, fetchPetsByVendor, venId])

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