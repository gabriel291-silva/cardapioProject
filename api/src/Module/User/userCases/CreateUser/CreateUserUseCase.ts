import { CreateUserDto } from "Module/User/dtos/createUser.dto";
import { prisma } from "../../../../Prisma";

export class CreateUserUseCase {
    async execult(param:CreateUserDto){
        console.log("criando um usuario ")
        console.log({param})
        const UserAlredyExist = await prisma.user.findUnique({where : {email:param.email}})
        console.log({UserAlredyExist})
        if(UserAlredyExist) return null
        console.log("userCriado")
        return await prisma.user.create({
            data:param})
    }
}