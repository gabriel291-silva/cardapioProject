
import { BcryptAdapter } from "../cryptography";
import { CreateUserController } from "../Module/User/userCases/CreateUser/CreateUserController";
import { FindUserController } from "../Module/User/userCases/FindUsers/FindUserController";
import { Router } from "express";
import env from "../config/env";


const userRoutes = Router()

const createUserController = new CreateUserController();
const findUserController = new FindUserController(); 

userRoutes.post("/",createUserController.handle);
userRoutes.get("/",findUserController.handle);

export {userRoutes}