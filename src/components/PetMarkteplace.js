import { useContext } from 'react'
import { PetContext } from '../context/PetContext'
import styled from 'styled-components'
import PetCard from "./PetCard"
import HeroBanner from './HeroBanner' 

export default function PetMarketplace(){
    const { pets } = useContext(PetContext)

    const Marketplace = styled.div`
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: space-around;
    `

    return(<div>
        <HeroBanner />
        <Marketplace>
            { pets && pets.map(pet => (<PetCard key={pet.id} pet={pet} />) )}
        </Marketplace>
    </div>)
}