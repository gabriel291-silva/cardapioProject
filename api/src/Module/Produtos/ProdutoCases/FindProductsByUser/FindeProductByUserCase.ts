import { prisma } from "../../../../Prisma";
import { error } from "console";
import { FindProductsByUser } from "Module/Produtos/dto/findProductsByUser";

export class FindeProductByUserCase {
  async execult({userId}: FindProductsByUser) {
    const response =  await prisma.product.findMany({where:{userId}})

    if(!response) { throw error('products not found', 400)}

    return response
  }
}
