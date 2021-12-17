import { Prisma } from "@prisma/client";
import axios from "axios";
import { App } from "../types/app";
import { prisma } from "../main";

export async function locations() {
  console.log("starting locations...");

  const res = await axios.get("https://cdn.debatdirect.tweedekamer.nl/api/app");

  const data: App = res.data;

  for (const l of data.locations) {
    const data: Prisma.LocationCreateInput = {
      id: l.id,
      description: l.description,
      name: l.name,
      imageUrl: l.imageUrl,
      posterUrl: `https://cdn.debatdirect.tweedekamer.nl/static${l.thumbnailUrl}`,
      thumbnailUrl: `https://cdn.debatdirect.tweedekamer.nl/api${l.posterUrl.replace(
        "{baseurl}",
        ""
      )}`,
    };

    await prisma.location.upsert({
      create: data,
      update: data,
      where: { id: l.id },
    });

    console.log(`created ${l.name}`);
  }
}
