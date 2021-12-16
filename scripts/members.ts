import { PrismaClient, Prisma } from "@prisma/client";
import axios from "axios";
import { Actors } from "../types/actors";

const prisma = new PrismaClient();

async function main() {
  const res = await axios.get(
    "https://cdn.debatdirect.tweedekamer.nl/api/actors"
  );

  const data: Actors = res.data;

  for (const p of data.politicians) {
    const data: Prisma.MemberCreateInput = {
      ddId: p.id,
      name: p.name,
      firstName: p.firstName,
      lastName: p.lastName,
      pictureUrl: `https://cdn.debatdirect.tweedekamer.nl/api/media/actors/politicians/250/250/${p.id}.jpg`,
      profileUrl: p.profileUrl,
      slug: p.slug,
      slogan: p.slogan,
      cabinet: false,
    };

    if (p.title === "") {
      continue;
    } else if (p.title !== "Tweede Kamerlid") {
      data.cabinet = true;
      data.cabinetTitle = p.title;
    } else {
      data.cabinet = false;
      data.seat = p.seat;
    }

    if (p.partyId) {
      data.party = { connect: { ddId: p.partyId } };
    }

    await prisma.member.upsert({
      create: data,
      update: data,
      where: { ddId: p.id },
    });

    console.log(`created ${p.name}`);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
