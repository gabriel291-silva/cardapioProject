import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { BcryptAdapter } from "../../../../cryptography";
import env from "../../../../config/env";

export class CreateUserController {
    async handle(req:Request,res:Response){
        const bcryptAdapter = new BcryptAdapter(env.salt);
        const {name,
            email,
            address,
            phone,
            whatsappPhone,
            password,
            openingHours,
            minimumOrder,} = req.body
            const passwordHash = await bcryptAdapter.hash(password);

            const createUserUseCase = new CreateUserUseCase();

            const result = await createUserUseCase.execult({
                name,
            email,
            address,
            phone,
            whatsappPhone,
            password:passwordHash,
            openingHours,
            minimumOrder,
            });

            if(!result) return null;

            return res.status(201).json(result)
    }
}