import { createContext, useContext } from "react";
import usePets from "../hooks/usePets";
import { PetContextInterface } from "../type-definitions";

const PetContext = createContext<PetContextInterface | null>(null)

const usePetContext = () => {
    const context = useContext(PetContext)

    if(!context){
        throw new Error("usePetContext must be used within PetProvider")
    }

    return context
}

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
    usePetContext
}