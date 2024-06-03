import { FindUserDto } from "Module/User/dtos/FindUser.dto";
import { prisma } from "../../../../Prisma";

export class FindUserUseCase{
    async execult(param:FindUserDto){

        const user = await prisma.user.findMany({where: {id:param.id}})

        if(!user) return null

        return user

    }
}