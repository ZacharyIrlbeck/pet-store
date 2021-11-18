import faker from 'faker'
import { useEffect, useState } from "react"

function useVendors(){
    const [vendors, setVendors] = useState([])
    
    useEffect(() => {
        const res = Array(10).fill().map((val, ind) => {
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

        setVendors([...res, defaultAdminAccount])
    }, [])

    const getVendor = id => vendors.find(x => x.id === id)
    const getVendorByEmail = email => vendors.find(x => x.email === email)

    return {vendors, getVendor, getVendorByEmail }
}

export default useVendors