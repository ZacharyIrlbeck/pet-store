import { createContext } from "react";
import usePets from "../hooks/usePets";

const PetContext = createContext()

function PetProvider({ children }){
    const {
        pets,
        loading
    } = usePets()

    const petData = {
        pets,
        loading
    }

    return(
        <PetContext.Provider value={petData}>
            { children }
        </PetContext.Provider>
    )
}

export default PetProvider

export {
    PetContext
}