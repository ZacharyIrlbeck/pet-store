import { useEffect, useState } from "react"
import { Vendor } from '../type-definitions' 
import { fetchVendors } from '../Api'

function useVendors(){
    const [vendors, setVendors] = useState<Vendor[]>([])
    
    useEffect(() => {
        fetchVendors().then((res) => {
            setVendors(res)
        })
    }, [])

    const getVendor = (id: number) : Vendor | undefined => vendors.find(x => x.id === id)
    const getVendorByEmail = (email: string) => vendors.find(x => x.email === email)

    return {vendors, getVendor, getVendorByEmail }
}

export default useVendors