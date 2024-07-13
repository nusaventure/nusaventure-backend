import { PrismaClient } from "@prisma/client";
import countries from "./countries";

const prisma = new PrismaClient();

(async function () {
  try {
    await countries(prisma);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    process.exit();
  }
})();
