import { prisma } from "../main";
import { Prisma } from "@prisma/client";
import axios from "axios";
import { Actors } from "../types/actors";

export async function parties() {
  console.log("starting parties...");

  const res = await axios.get(
    "https://cdn.debatdirect.tweedekamer.nl/api/actors"
  );

  const data: Actors = res.data;
  const parties: Prisma.PartyCreateInput[] = [];

  for (const party of data.parties) {
    const data: Prisma.PartyCreateInput = {
      id: party.id,
      name: party.name,
      position: party.position,
      shorthand: party.shorthand,
      size: party.size,
      slug: party.slug,
    };

    parties.push(data);

    console.log(`created ${data.shorthand}`);
  }
  await prisma.party.createMany({ data: parties, skipDuplicates: true });
}
