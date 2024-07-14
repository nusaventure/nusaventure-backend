import { PrismaClient } from "@prisma/client";
import countries from "./countries";
import states from "./states";
import cities from "./cities";
import categories from "./categories";

const prisma = new PrismaClient();

(async function () {
  try {
    await countries(prisma);
    await states(prisma);
    await cities(prisma);
    await categories(prisma);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    process.exit();
  }
})();
