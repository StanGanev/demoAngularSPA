export class CarModel {
    constructor(
       public title: string,
       public description: string,
       public brand: string,
       public model: string,
       public year: number,
       public imageUrl: string,
       public fuelType: string,
       public price: number,
       public sellerId?: string
    ) {}
}