import { createContext } from "react";
import useVendors from "../hooks/useVendors";

const VendorContext = createContext()

function VendorProvider({ children }){
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