import { Prisma, PrismaClient } from "@prisma/client";

type PlaceSeeder = Omit<Prisma.PlaceCreateManyInput, "categoryId"> & {
  categorySlugs: string[];
};

export default async function run(prisma: PrismaClient) {
  const places: Array<PlaceSeeder> = [
    {
      countryId: "102",
      islandId: "clyrb3jup00098vfrpaei32yf",
      stateId: "1825",
      cityId: "56731",
      categorySlugs: ["localgovernmentoffice", "historicalsites"],
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
      isFeatured: true,
      position: 3,
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
    {
      countryId: "102",
      islandId: "clyrb3jup00098vfrpaei32yf",
      stateId: "1829",
      cityId: "56816",
      categorySlugs: ["historicalsites"],
      title: "Tugu Yogyakarta",
      slug: "tugu-yogyakarta",
      description:
        "White-&-gold landmark on a traffic island, dating from 1889 & floodlit after dark.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Yogyakarta_Indonesia_Tugu-Yogyakarta-01.jpg/800px-Yogyakarta_Indonesia_Tugu-Yogyakarta-01.jpg",
      latitude: -7.7829749,
      longitude: 110.3665674,
      zoom: 19,
      address:
        "Jl. Jend. Sudirman, Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
      isFeatured: true,
      position: 1,
    },
    {
      countryId: "102",
      islandId: "clyrb3jus000h8vfrd9x6acc5",
      stateId: "1826",
      cityId: "57013",
      categorySlugs: ["historicalsites"],
      title: "Tanah Lot",
      slug: "tanah-lot",
      description:
        "Traditional Balinese temple located on a small, rocky island & offering water vistas.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/19/20/29/tanah-lot-996675_1280.jpg",
      latitude: -8.6212003,
      longitude: 115.0867082,
      zoom: 20,
      address: "Beraban, Kec. Kediri, Kabupaten Tabanan, Bali 82121",
      isFeatured: true,
      position: 2,
    },
    {
      countryId: "102",
      islandId: "clyrb3jus000h8vfrd9x6acc5",
      stateId: "1805",
      cityId: "56723",
      categorySlugs: ["historicalsites"],
      title: "Bundaran HI",
      slug: "bundaran-hi",
      description:
        "The Selamat Datang Monument is located in the center of a roundabout known as Bundaran Hotel Indonesia or Bundaran HI (Indonesian for Hotel Indonesia Roundabout)",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jakarta_Bundaran_HI_.jpg/1200px-Jakarta_Bundaran_HI_.jpg",
      latitude: -6.1949851,
      longitude: 106.8221597,
      zoom: 18,
      address:
        "Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta",
      isFeatured: true,
      position: 4,
    },
    {
      countryId: "102",
      islandId: "clyrb3jus000h8vfrd9x6acc5",
      stateId: "1827",
      cityId: "56803",
      categorySlugs: ["historicalsites"],
      title: "Surabaya",
      slug: "surabaya",
      description:
        "Landmark statue symbolic of Surabaya city, featuring a shark & crocodile tussling amid seaweed.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jakarta_Bundaran_HI_.jpg/1200px-Jakarta_Bundaran_HI_.jpg",
      latitude: -7.2960492,
      longitude: 112.7387012,
      zoom: 18,
      address:
        "Jl. Diponegoro No.1-B, Darmo, Kec. Wonokromo, Surabaya, Jawa Timur 60241",
      isFeatured: true,
      position: 5,
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
