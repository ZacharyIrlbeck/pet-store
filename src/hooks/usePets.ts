import { useEffect, useState } from 'react'
import { Pet } from '../type-definitions'
import { fetchPets } from '../Api'
import { useAuthContext } from '../context/AuthContext'

function usePets(){
    const [pets, setPets] = useState<Pet[]>([])
    const [loading, setLoading] = useState(true)
    const { userInfo } = useAuthContext()

    useEffect(() => {
        fetchPets().then(res => {
            setPets(res)
        })
    }, [])

    const createPet = (data: Partial<Pet>) => {
        if(!userInfo)
            return false

        const newPet = {
            id: pets[pets.length - 1].id + 1,
            vendor_id: userInfo.id,
            name: data.name || "",
            breed: data.breed || "",
            price: data.price || "",
            image: data.image || "",
        } 

        setPets(pets => [...pets, newPet])
        return true
    }

    const fetchPetsByVendor = (vendorId: number) => pets.filter(x => x.vendor_id === vendorId)

    const getPet = (id: number) => pets.find(p => p.id === id)

    const updatePet = (id: number, data: Partial<Pet>) => {
        setPets(pets.map(p => {
                if(p.id === id){
                    return {
                        ...p,
                        name: data.name || "",
                        breed: data.breed || "",
                        price: data.price || "",
                        image: data.image || "",
                    }
                }else{
                    return p
                }
            })    
        )
        
        return true
    }

    const removeListing = (id: number) => {
        setPets(pets.filter(p => p.id !== id))

        return true
    }

    return {
        pets,
        loading,
        createPet,
        fetchPetsByVendor,
        getPet,
        updatePet,
        removeListing
    }
}

export default usePets