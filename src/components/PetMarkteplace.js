import usePets from "../hooks/usePets"

export default function PetMarketplace(){
    const [getPets] = usePets()
    const pets = getPets()

    return(<div>
        Pet Marketplace

        { pets && pets.map(pet => {
            return (<div>
                Name: {pet.name}
                Breed: {pet.breed}
                Price: {pet.price}
            </div>)            
        })}
    </div>)
}