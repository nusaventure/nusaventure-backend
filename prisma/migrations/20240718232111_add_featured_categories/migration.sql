-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "position" INTEGER;
