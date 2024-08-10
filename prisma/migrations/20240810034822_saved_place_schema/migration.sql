-- CreateTable
CREATE TABLE "savedPlace" (
    "id" TEXT NOT NULL,
    "placeId" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "savedPlace_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "savedPlace" ADD CONSTRAINT "savedPlace_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedPlace" ADD CONSTRAINT "savedPlace_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
