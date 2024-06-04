-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "priceMax" INTEGER NOT NULL,
    "priceMin" INTEGER NOT NULL,
    "midiaMobile" TEXT NOT NULL,
    "midiaDesktop" TEXT NOT NULL,
    "stuckInGrass" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "additions" TEXT[],
    "categories" INTEGER[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
