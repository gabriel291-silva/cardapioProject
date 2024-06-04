import { createProductDto } from "Module/Produtos/dto/createProduct.dto";
import { prisma } from "../../../../Prisma";
import { error } from "console";

export class CreateProductUseCase {
  async execult(props: createProductDto) {
    console.log(props);
    const user = await prisma.user.findUnique({ where: { id: props.userId } });

    if (!user) {
      console.log("erro ao cadastrar produto");
      throw error("erro ao cadastrar");
    }

    // Remover userId de props
    const { userId, ...productData } = props;

    return await prisma.product.create({
      data: {
        ...productData,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }
}
