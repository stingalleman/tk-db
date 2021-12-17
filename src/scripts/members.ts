import { Prisma } from "@prisma/client";
import axios from "axios";
import { Actors } from "../types/actors";
import { prisma } from "../main";

export async function members() {
  console.log("starting members...");

  const res = await axios.get(
    "https://cdn.debatdirect.tweedekamer.nl/api/actors"
  );

  const data: Actors = res.data;
  const members: Prisma.MemberCreateManyInput[] = [];

  for (const p of data.politicians) {
    const data: Prisma.MemberCreateManyInput = {
      id: p.id,
      name: p.name,
      firstName: p.firstName,
      lastName: p.lastName,
      pictureUrl: `https://cdn.debatdirect.tweedekamer.nl/api/media/actors/politicians/250/250/${p.id}.jpg`,
      profileUrl: p.profileUrl,
      slug: p.slug,
      cabinet: false,
    };

    if (p.title === "") {
      continue;
    }

    if (p.title !== "Tweede Kamerlid") {
      data.cabinet = true;
      data.cabinetTitle = p.title;
    } else {
      data.cabinet = false;
      data.seat = p.seat;
    }

    if (p.partyId) {
      data.partyId = p.partyId;
    }

    if (p.slogan !== "" && p.slogan !== null) {
      data.slogan = p.slogan;
    }

    members.push(data);
    console.log(`created ${p.name}`);
  }

  await prisma.member.createMany({ data: members, skipDuplicates: true });
}
