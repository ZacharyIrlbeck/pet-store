import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.figure`
    display: grid;
    grid-columns: 1fr 1fr 1fr;
    grid-row: auto;
`

const CardCaption = styled.figcaption`
    margin: 0px;
    padding: 0px;
    background: black;
    color: white;
    padding: 10px;
    opacity: 0.7;
`

export default function PetCard({ pet }){
    return(
        <Link to={`/pets/${pet.id}`} key={pet.id}>
            <Card>
                <img src={pet.image} width="300px" height="300px" alt="" />
                <CardCaption>
                    { pet.name }
                </CardCaption>
            </Card>
        </Link>
    )
}