export class Appointment {
    _id: string
    provider: string
    user: string
    date: Date
    services: string[]
    confirmed: boolean

    constructor(id?: string, provider?: string, user?: string, date?: Date, services?: string[], confirmed?: boolean) {
        this._id = id!
        this.provider = provider!
        this.user = user!
        this.date = date!
        this.services = services!
        this.confirmed = confirmed!
    }
}
