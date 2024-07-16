-- AlterTable
ALTER TABLE "cities" ADD COLUMN     "islandId" TEXT;

-- AlterTable
ALTER TABLE "places" ADD COLUMN     "islandId" TEXT;

-- AlterTable
ALTER TABLE "states" ADD COLUMN     "islandId" TEXT;

-- CreateTable
CREATE TABLE "islands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "zoom" DOUBLE PRECISION NOT NULL,
    "slug" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "islands_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "islands_slug_key" ON "islands"("slug");

-- AddForeignKey
ALTER TABLE "islands" ADD CONSTRAINT "islands_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "states" ADD CONSTRAINT "states_islandId_fkey" FOREIGN KEY ("islandId") REFERENCES "islands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_islandId_fkey" FOREIGN KEY ("islandId") REFERENCES "islands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_islandId_fkey" FOREIGN KEY ("islandId") REFERENCES "islands"("id") ON DELETE SET NULL ON UPDATE CASCADE;
