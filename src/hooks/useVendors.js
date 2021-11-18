import faker from 'faker'
import { useEffect, useState } from "react"

function useVendors(){
    const [vendors, setVendors] = useState([])
    
    useEffect(() => {
        const res = Array(10).fill().map((val, ind) => {
            return {
                id: ind + 1,
                email: faker.internet.email(),
                pass: faker.internet.password(),
                displayname: faker.internet.userName(),
                profilepicture: faker.image.avatar(), 
                description : faker.lorem.paragraph()
            }
        })

        setVendors(res)
    }, [])

    const getVendor = id => vendors.find(x => x.id === id)

    return {vendors, getVendor }
}

export default useVendors