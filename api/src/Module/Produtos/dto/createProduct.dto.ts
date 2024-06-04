import { CreateUserDto } from "Module/User/dtos/createUser.dto";

export interface createProductDto {
    name:string,
    priceMax:number,
    priceMin:number,
    midiaMobile:string,
    midiaDesktop:string,
    stuckInGrass:string,
    description:string,
    additions:string[],
    categories:number[],
    userId:string

}