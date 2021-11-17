import { useEffect } from 'react'
import faker from 'faker'

// probably want to use the reducer pattern here, show off a bit. will be the second step, third refactoring to 
// use w/ typescript

// pet should also likely have an owner

export default function usePets(){
    const getPets = () => {
        return Array(50).fill().map((val, ind) => {
            return {
                id: ind,
                name: faker.name.firstName(),
                breed: faker.animal.dog(),
                price: faker.commerce.price(),
                image: faker.image.image()
            }
        })
    }

    return [getPets]
}