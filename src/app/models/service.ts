export class ProviderService {
    _id: string
    name: string
    description: string
    imageUrl: string
    category: string
    cost: number
    time: number
    provider: string
    

    constructor( id?: string, name?: string, description?: string, imageUrl?: string, category?: string, cost?: number, time?: number, provider?: string){
        this._id = id!
        this.name = name!
        this.description = description!
        this.imageUrl = imageUrl!
        this.category = category!,
        this.cost = cost!
        this.time = time!
        this.provider = provider!
    }
}