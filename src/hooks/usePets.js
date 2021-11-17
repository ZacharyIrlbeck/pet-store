import { useEffect, useState } from 'react'
import faker from 'faker'

export default function usePets(){
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPets()
    }, [])

    const fetchPets = () => {
        const res = Array(50).fill().map((val, ind) => {
            return {
                id: ind,
                name: faker.name.firstName(),
                breed: faker.animal.dog(),
                price: faker.commerce.price(),
                image: faker.image.image()
            }
        })

        setPets(res)
        setLoading(false)
    }

    return {
        pets,
        loading
    }
}