-- DropIndex
DROP INDEX "places_countryId_stateId_cityId_idx";

-- CreateIndex
CREATE INDEX "places_isFeatured_countryId_stateId_cityId_idx" ON "places"("isFeatured", "countryId", "stateId", "cityId");
