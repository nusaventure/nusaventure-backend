import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  console.info("Seed countries...");

  const countries: Array<Prisma.CountryCreateInput> = [
    {
      id: "102",
      name: "Indonesia",
      imageUrl:
        "https://images.unsplash.com/photo-1533805994737-558461dcb28e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -6.17555357,
      longitude: 106.82721585,
      zoom: 4,
    },
    {
      id: "132",
      name: "Malaysia",
      imageUrl:
        "https://images.unsplash.com/photo-1549154425-7b519f2b92d4?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 4.49664266041942,
      longitude: 102.275719605501,
      zoom: 5,
    },
    {
      id: "199",
      name: "Singapore",
      imageUrl:
        "https://images.unsplash.com/photo-1562300735-b1f7f50e774b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.3516161224392,
      longitude: 103.808052586332,
      zoom: 10,
    },
  ];

  await Promise.all(
    countries.map(async (country) => {
      await prisma.country.upsert({
        where: { id: country.id },
        update: country,
        create: country,
      });
    })
  );
}
