import * as faker from 'faker'

const fetchPets = async (): Promise<Pet[]> => {
    const pets = Array(50).fill(undefined).map((val, ind) => {
        return {
            id: ind + 1,
            name: faker.name.firstName(),
            breed: faker.animal.dog(),
            price: faker.commerce.price(),
            image: faker.image.image(),
            vendor_id: (Math.floor(Math.random() * 10) + 1)
        }
    })

    const defaultAdminPets = Array(5).fill(undefined).map((val, ind) => {
        return {
            id: 51 + ind,
            name: faker.name.firstName(),
            breed: faker.animal.dog(),
            price: faker.commerce.price(),
            image: faker.image.image(),
            vendor_id: 11
        }
    })

    return Promise.resolve([...pets, ...defaultAdminPets])
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

export {
    fetchVendors,
    fetchPets
}