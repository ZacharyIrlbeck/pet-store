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
                vendor_id: (Math.floor(Math.random() * 10) + 1)
            }
        })

        const defaultAdminPets = Array(5).fill().map((val, ind) => {
            return {
                id: 51 + ind,
                name: faker.name.firstName(),
                breed: faker.animal.dog(),
                price: faker.commerce.price(),
                image: faker.image.image(),
                vendor_id: 11
            }
        })

        setPets([...res, ...defaultAdminPets])
        setLoading(false)
    }

    const fetchPetsByVendor = (vendorId) => pets.filter(x => x.vendor_id === vendorId)

    const getPet = id => pets.find(p => p.id === id)

    const updatePet = (id, data) => {
        setPets(pets => {
            pets.map(p => {
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
        })
        
        return true
    }

    const removeListing = id => {
        setPets(pets => {
            pets.filter(p => p.id !== id)
        })

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