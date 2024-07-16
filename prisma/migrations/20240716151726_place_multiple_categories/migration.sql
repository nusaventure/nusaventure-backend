/*
  Warnings:

  - You are about to drop the column `categoryId` on the `places` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "places" DROP CONSTRAINT "places_categoryId_fkey";

-- AlterTable
ALTER TABLE "places" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "_CategoryToPlace" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPlace_AB_unique" ON "_CategoryToPlace"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPlace_B_index" ON "_CategoryToPlace"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToPlace" ADD CONSTRAINT "_CategoryToPlace_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPlace" ADD CONSTRAINT "_CategoryToPlace_B_fkey" FOREIGN KEY ("B") REFERENCES "places"("id") ON DELETE CASCADE ON UPDATE CASCADE;
