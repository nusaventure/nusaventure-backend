import { PrismaClient } from "@prisma/client";
import categories from "./categories";
import cities from "./cities";
import countries from "./countries";
import islands from "./islands";
import placeImages from "./placeImages";
import places from "./places";
import states from "./states";

const prisma = new PrismaClient();

(async function () {
  try {
    await countries(prisma);
    await islands(prisma);
    await states(prisma);
    await cities(prisma);
    await categories(prisma);
    await places(prisma);
    await placeImages(prisma);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    process.exit();
  }
})();
