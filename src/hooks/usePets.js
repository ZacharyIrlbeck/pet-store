import { useEffect, useState } from 'react'
import faker from 'faker'

export default function usePets(){
    const [pets, setPets] = useState([])
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
        const res = Array(50).fill().map((val, ind) => {
            return {
                id: ind + 1,
                name: faker.name.firstName(),
                breed: faker.animal.dog(),
                price: faker.commerce.price(),
                image: faker.image.image(),
                vendor_id: Math.floor(Math.random() * 10)
            }
        })

        setPets(res)
        setLoading(false)
    }

    const fetchPetsByVendor = (vendorId) => pets.filter(x => x.vendor_id === vendorId)

    return {
        pets,
        loading,
        createPet,
        fetchPetsByVendor
    }
}