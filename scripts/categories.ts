import { Prisma } from "@prisma/client";
import axios from "axios";
import { Overview } from "../types/overview";
import { prisma } from "../main";

export async function categories() {
  console.log("starting categories...");

  const res = await axios.get(
    "https://cdn.debatdirect.tweedekamer.nl/api/agenda/overview"
  );

  const data: Overview = res.data;
  const categories: Prisma.CategoryCreateManyInput[] = [];

  for (const c of data.categories) {
    const data: Prisma.CategoryCreateManyInput = {
      id: c.id,
      name: c.name,
      slug: c.slug,
    };

    categories.push(data);

    console.log(`created ${c.name}`);
  }
  await prisma.category.createMany({ data: categories, skipDuplicates: true });
}
