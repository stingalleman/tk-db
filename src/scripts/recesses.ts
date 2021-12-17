import { Prisma } from "@prisma/client";
import axios from "axios";
import { prisma } from "../main";
import { App } from "../types/app";

export async function recesses() {
  console.log("starting recesses...");

  const res = await axios.get("https://cdn.debatdirect.tweedekamer.nl/api/app");

  const data: App = res.data;

  for (const r of data.recesses) {
    const data: Prisma.RecessCreateInput = {
      description: r.description,
      startDate: new Date(r.startDate),
      endDate: new Date(r.endDate),
    };

    await prisma.recess.upsert({
      create: data,
      update: data,
      where: { description: r.description },
    });

    console.log(`created ${r.description}`);
  }
}
