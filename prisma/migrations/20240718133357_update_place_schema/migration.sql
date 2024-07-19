-- AlterTable
ALTER TABLE "places" ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "position" INTEGER;
