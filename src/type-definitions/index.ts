export interface Pet {
    id: number,
    name: string,
    breed: string,
    price: string,
    image: string,
    vendor_id: number
}

export interface Vendor {
    id: number,
    email: string,
    password: string,
    displayname: string,
    profilepicture: string,
    description: string
}

export interface AuthContextInterface {
    logout: () => void;
    login: (email: string, password: string) => Promise<boolean>;
    isLoggedIn: boolean;
    userInfo: Vendor | null;
    updateUserProfile: (data: Partial<Vendor>) => boolean;
}

export interface PetContextInterface {
    pets: Pet[];
    createPet: (data: Partial<Pet>) => boolean;
    fetchPetsByVendor: (vendorId: number) => Pet[];
    getPet: (id: number) => Pet | undefined;
    updatePet: (id: number, data: Partial<Pet>) => boolean;
    removeListing: (id: number) => boolean;
}

export interface VendorContextInterface {
    vendors: Vendor[];
    getVendor: (id: number) => Vendor | undefined;
    getVendorByEmail: (email: string) => Vendor | undefined;
}