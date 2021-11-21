import { createContext } from "react";
import usePets from "../hooks/usePets";
import { PetContextInterface } from "../type-definitions";

const PetContext = createContext<PetContextInterface | null>(null)

type PetProviderProps = { children: React.ReactNode }

function PetProvider({ children }: PetProviderProps){
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