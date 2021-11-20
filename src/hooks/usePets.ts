import { useEffect, useState } from 'react'

function usePets(){
    const [pets, setPets] = useState<Pet[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPets()
    }, [])

    const createPet = (data) => {
        // adding "id" here in lieu of back end api
        data.id = pets.at(-1).id + 1
        setPets(pets => [...pets, {...data}])
        return true
    }

    const fetchPets = () => {
        

        setPets([...res, ...defaultAdminPets])
        setLoading(false)
    }

    const fetchPetsByVendor = (vendorId) => pets.filter(x => x.vendor_id === vendorId)

    const getPet = id => pets.find(p => p.id === id)

    const updatePet = (id, data) => {
        setPets(pets.map(p => {
                if(p.id === id){
                    console.log('found a match, replacing...')
    
                    return {
                        ...p,
                        name: data.name,
                        breed: data.breed,
                        price: data.price,
                        image: data.iamge,
                    }
                }else{
                    return p
                }
            })    
        )
        
        return true
    }

    const removeListing = id => {
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