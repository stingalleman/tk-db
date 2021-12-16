import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { Actors } from "../types/actors";

const prisma = new PrismaClient();

async function main() {
  const res = await axios.get(
    "https://cdn.debatdirect.tweedekamer.nl/api/actors"
  );

  const data: Actors = res.data;

  for (const party of data.parties) {
    await prisma.party.create({
      data: {
        name: party.name,
        position: party.position,
        shorthand: party.shorthand,
        size: party.size,
        slug: party.slug,
        ddId: party.id,
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
