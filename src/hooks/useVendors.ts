import * as faker from 'faker'
import { useEffect, useState } from "react"

type Vendor = {
    id: number,
    email: string,
    password: string,
    displayname: string,
    profilepicture: string,
    description: string
}

const fetchVendors = (): Promise<Vendor[]> => {
    const vendors = Array(10).fill(undefined).map((val, ind) => {
        return {
            id: ind + 1,
            email: faker.internet.email(),
            password: faker.internet.password(),
            displayname: faker.internet.userName(),
            profilepicture: faker.image.avatar(), 
            description : faker.lorem.paragraph()
        }
    })

    const defaultAdminAccount = {
        id: 11,
        email: 'test@gmail.com',
        password: 'password',
        displayname: 'Dev Account',
        profilepicture: faker.image.avatar(),
        description: faker.lorem.paragraph()
    }
    
    
    return Promise.resolve([...vendors, defaultAdminAccount])
} 

function useVendors(){
    const [vendors, setVendors] = useState<Vendor[]>([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetchVendors().then((res) => {
            setVendors(res)
            setLoading(false)
        })
    }, [])

    const getVendor = (id: number) : Vendor | undefined => vendors.find(x => x.id === id)
    const getVendorByEmail = (email: string) => vendors.find(x => x.email === email)

    return {vendors, getVendor, getVendorByEmail }
}

export default useVendors