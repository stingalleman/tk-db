import { PrismaClient } from "@prisma/client";
import { categories, locations, members, parties } from "./scripts";
import { recesses } from "./scripts/recesses";

const prisma = new PrismaClient();

async function main() {
  await parties();
  await members();
  await categories();
  await locations();
  await recesses();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { prisma };
