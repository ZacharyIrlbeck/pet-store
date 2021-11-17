import styled from 'styled-components'
import usePets from "../hooks/usePets"
import PetCard from "./PetCard"

export default function PetMarketplace(){
    const [getPets] = usePets()
    const pets = getPets()

    const Marketplace = styled.div`
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: space-around;
    `

    return(<Marketplace>
        { pets && pets.map(pet => (<PetCard pet={pet} />) )}
    </Marketplace>)
}