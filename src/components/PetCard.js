import styled from 'styled-components'

export default function PetCard({ pet }){
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

    return(<Card>
        <img src={pet.image} width="300px" height="300px" />
        <CardCaption>
            { pet.name }
        </CardCaption>
    </Card>)
}