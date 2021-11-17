import { createContext } from "react";
import usePets from "../hooks/usePets";

const PetContext = createContext()

function PetProvider({ children }){
    const petData = usePets()

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