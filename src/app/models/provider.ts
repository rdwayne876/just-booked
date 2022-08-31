export class Provider {
    _id: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    address: string
    services: string[]
    appointments: string[]

    constructor(
        id?: string,
        firstName?: string,
        lastName?: string,
        email?: string,
        password?: string,
        phone?: string,
        address?: string,
        services?: string[],
        appointments?: string[]
    ){
        this._id = id!,
        this.firstName = firstName!,
        this.lastName = lastName!,
        this.email = email!,
        this.password = password!,
        this.phone = phone!,
        this.address = address!,
        this.services = services!,
        this.appointments = appointments!
    }
}