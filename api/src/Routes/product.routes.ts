
import { CreateUserController } from "../Module/User/userCases/CreateUser/CreateUserController";
import { Router } from "express";
import env from "../config/env";
import { CreateProductController } from "../Module/Produtos/ProdutoCases/CreateProduct/CreateProductController";
import { FindaByUserController } from "../Module/Produtos/ProdutoCases/FindProductsByUser/FindaByUserController";


const productRoutes = Router()

const createProductController = new CreateProductController();
const findaByUserController = new FindaByUserController();

productRoutes.post("/",createProductController.handle);
productRoutes.get("/",findaByUserController.handle);


export {productRoutes}