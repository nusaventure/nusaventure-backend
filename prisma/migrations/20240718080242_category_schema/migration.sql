/*
  Warnings:

  - You are about to drop the `_CategoryToPlace` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `places` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToPlace" DROP CONSTRAINT "_CategoryToPlace_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToPlace" DROP CONSTRAINT "_CategoryToPlace_B_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "position" INTEGER;

-- AlterTable
ALTER TABLE "places" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CategoryToPlace";

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
