/*
  Warnings:

  - A unique constraint covering the columns `[placeId,userId]` on the table `savedPlace` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "savedPlace_placeId_userId_key" ON "savedPlace"("placeId", "userId");
