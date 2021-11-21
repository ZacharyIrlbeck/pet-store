import { createContext } from "react";
import useVendors from "../hooks/useVendors";
import { VendorContextInterface } from "../type-definitions";

const VendorContext = createContext<VendorContextInterface | null>(null)
type VendorProviderProps = { children: React.ReactNode }

function VendorProvider({ children }: VendorProviderProps){
    const vendorData = useVendors()

    return(
        <VendorContext.Provider value={vendorData}>
            { children }
        </VendorContext.Provider>
    )
}

export default VendorProvider

export {
    VendorContext
}