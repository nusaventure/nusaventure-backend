import { Prisma, PrismaClient } from "@prisma/client";

type PlaceSeeder = Omit<Prisma.PlaceCreateManyInput, "categoryId"> & {
  categorySlugs: string[];
};

export default async function run(prisma: PrismaClient) {
  const places: Array<PlaceSeeder> = [
    {
      countryId: "102",
      stateId: "1825",
      cityId: "56731",
      categorySlugs: ["localgovernmentoffice"],
      title: "Gedung Sate",
      slug: "gedung-sate",
      description:
        "Grand Dutch colonial administration building dating to the 1920s, now West Java's government house.",
      imageUrl:
        "https://images.unsplash.com/photo-1683471619890-fb7e51c3201c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -6.9024662,
      longitude: 107.6161269,
      zoom: 14,
      address:
        "Jl. Diponegoro No.22, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115",
    },
    {
      countryId: "102",
      stateId: "1825",
      cityId: "56731",
      categorySlugs: ["mosque", "historicalsites"],
      title: "Masjid Raya Al Jabbar",
      slug: "masjid-raya-al-jabbar",
      description: "Mosque",
      imageUrl:
        "https://images.unsplash.com/photo-1700527697333-c23abcd1c992?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -6.9477666,
      longitude: 107.6945773,
      zoom: 14,
      address:
        "Jl. Cimincrang No.14, Cimenerang, Kec. Gedebage, Kota Bandung, Jawa Barat 40292",
    },
  ];

  await Promise.all(
    places.map(async (placeData) => {
      const { categorySlugs, ...place } = placeData;

      await prisma.place.upsert({
        where: { slug: place.slug },
        update: place,
        create: {
          ...place,
          categories: {
            connect: categorySlugs.map((slug) => ({ slug })),
          },
        },
      });
    })
  );
}
