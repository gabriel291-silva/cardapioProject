/*
  Warnings:

  - You are about to drop the column `Name` on the `Entrada` table. All the data in the column will be lost.
  - Added the required column `name` to the `Entrada` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entrada" DROP COLUMN "Name",
ADD COLUMN     "name" TEXT NOT NULL;
