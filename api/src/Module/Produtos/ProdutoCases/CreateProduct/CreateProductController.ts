import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
    async handle(req:Request,res:Response){

        const { name,
            priceMax,
            priceMin,
            midiaMobile,
            midiaDesktop,
            stuckInGrass,
            description,
            additions,
            categories,
            userId} = req.body

            console.log(req.body)

            const createProductUseCase = new CreateProductUseCase()

            const result = await createProductUseCase.execult({
                name,
                priceMax,
                priceMin,
                midiaMobile,
                midiaDesktop,
                stuckInGrass,
                description,
                additions,
                categories,
                userId 
            })

            if(!result) return null

            return res.status(201).json(result)
    }
}