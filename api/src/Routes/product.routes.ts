
import { CreateUserController } from "../Module/User/userCases/CreateUser/CreateUserController";
import { Router } from "express";
import env from "../config/env";
import { CreateProductController } from "../Module/Produtos/ProdutoCases/CreateProduct/CreateProductController";


const productRoutes = Router()

const createProductController = new CreateProductController();

productRoutes.post("/",createProductController.handle);

export {productRoutes}