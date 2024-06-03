import { FindUserDto } from "Module/User/dtos/FindUser.dto";
import { Request, Response } from "express"
import { FindUserUseCase } from "./FindUserUseCase";

export class FindUserController {
    async handle(req:Request,res:Response){
        const {id} = req.body;

        const findUserUseCase = new FindUserUseCase()

        const result = await findUserUseCase.execult({id})

        if(!result) return null;

        return res.status(201).json(result)
        
    }
}