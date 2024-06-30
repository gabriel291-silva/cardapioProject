import { Request, Response } from "express";
import { FindeProductByUserCase } from "./FindeProductByUserCase";

export class FindaByUserController {
    async handle(req:Request,res:Response){

        const { userId } = req.body

            console.log(req.body)

            const findeProductByUserCase = new FindeProductByUserCase()

            const result = await findeProductByUserCase.execult({userId})

            if(!result) return null

            return res.status(201).json(result)
    }
}