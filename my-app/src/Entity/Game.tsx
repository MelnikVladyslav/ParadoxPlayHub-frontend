class Game{
    id: number;
    name: string;
    description: string;
    price: Float32Array;
    developerId: string;
    imagePath: string;
    ganrId: number;

    constructor(id: number, name:string, description:string, price:Float32Array, developerId:string, imagePath:string, ganrId:number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.developerId = developerId;
        this.imagePath = imagePath;
        this.ganrId = ganrId;
      }
}