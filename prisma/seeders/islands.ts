import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  console.info("Seed islands...");

  const islands: Array<Prisma.IslandCreateManyInput> = [
    {
      countryId: "102",
      name: "Papua",
      slug: "papua",
      imageUrl:
        "https://ucarecdn.com/bcc123b6-71a7-4e9b-89a2-8fc6c51a2a59/-/preview/400x300/",
      latitude: -5.5011831,
      longitude: 135.6045112,
      zoom: 7,
    },
    {
      countryId: "102",
      name: "Kalimantan",
      slug: "kalimantan",
      imageUrl:
        "https://ucarecdn.com/189810e1-facc-4d54-8fb4-f4a7c89673bb/-/preview/400x300/",
      latitude: 1.423257,
      longitude: 108.7552974,
      zoom: 7,
    },
    {
      countryId: "102",
      name: "Sumatera",
      slug: "sumatera",
      imageUrl:
        "https://ucarecdn.com/dc66eeb2-fabb-4c1b-99b2-d6b59eab25f8/-/preview/400x300/",
      latitude: -0.1427302,
      longitude: 95.3453979,
      zoom: 7,
    },
    {
      countryId: "102",
      name: "Sulawesi",
      slug: "sulawesi",
      imageUrl:
        "https://ucarecdn.com/0a6c8e46-7ad9-460b-9ccc-2c1ed3a29adf/-/preview/400x300/",
      latitude: -2.0213952,
      longitude: 120.0933559,
      zoom: 7,
    },
    {
      countryId: "102",
      name: "Jawa",
      slug: "jawa",
      imageUrl:
        "https://ucarecdn.com/c7c7d68c-d7f1-430d-9356-b8afaed967d8/-/preview/400x300/",
      latitude: -7.3204811,
      longitude: 107.2654557,
      zoom: 8,
    },
    {
      countryId: "102",
      name: "Timor",
      slug: "timor",
      imageUrl:
        "https://ucarecdn.com/69d843cd-8a6b-41fd-947d-c37ff132a90d/-/preview/400x300/",
      latitude: -9.6247682,
      longitude: 123.8622907,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Halmahera",
      slug: "halmahera",
      imageUrl:
        "https://ucarecdn.com/db422a3f-2d62-4314-8813-86e7fc8d19b8/-/preview/400x300/",
      latitude: 0.7191459,
      longitude: 127.5665118,
      zoom: 8,
    },
    // {
    //   countryId: "102",
    //   name: "Seram",
    //   slug: "seram",
    //   imageUrl:
    //     "https://ucarecdn.com/85155fc5-994d-4f8f-b74b-c0549bb3fc66/-/preview/400x300/",
    //   latitude: -3.5633212,
    //   longitude: 128.5620037,
    //   zoom: 8.5,
    // },
    // {
    //   countryId: "102",
    //   name: "Sumbawa",
    //   slug: "sumbawa",
    //   imageUrl:
    //     "https://ucarecdn.com/cf8d6c09-7479-4362-a030-353f2201e19f/-/preview/400x300/",
    //   latitude: -8.5942753,
    //   longitude: 117.2943635,
    //   zoom: 9,
    // },
    {
      countryId: "102",
      name: "Flores",
      slug: "flores",
      imageUrl:
        "https://ucarecdn.com/71260e12-f9e8-4229-aa7b-a015ddfac784/-/preview/400x300/",
      latitude: -8.5130992,
      longitude: 120.6411681,
      zoom: 8.75,
    },
    // {
    //   countryId: "102",
    //   name: "Kolepom",
    //   slug: "kolepom",
    //   imageUrl:
    //     "https://ucarecdn.com/72ca08cb-d3ad-4f8b-b8ba-b6a91ca57a11/-/preview/400x300/",
    //   latitude: -7.813822,
    //   longitude: 138.0547589,
    //   zoom: 9,
    // },
    {
      countryId: "102",
      name: "Bangka",
      slug: "bangka",
      imageUrl:
        "https://ucarecdn.com/14893116-9e64-46b0-8bc4-ed997b0992db/-/preview/400x300/",
      latitude: -2.2704017,
      longitude: 105.5526031,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Sumba",
      slug: "sumba",
      imageUrl:
        "https://ucarecdn.com/160eea14-d650-4dbd-820f-b68d4518d2db/-/preview/400x300/",
      latitude: -9.8364167,
      longitude: 119.4446342,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Buru",
      slug: "buru",
      imageUrl:
        "https://ucarecdn.com/2804d175-4337-413f-bc89-d34a891fc1ee/-/preview/400x300/",
      latitude: -3.4589616,
      longitude: 126.3023783,
      zoom: 10,
    },
    {
      countryId: "102",
      name: "Bali",
      slug: "bali",
      imageUrl:
        "https://ucarecdn.com/f1824ea5-f2b0-4a14-ace4-79d3fe0b32cd/-/preview/400x300/",
      latitude: -8.4676699,
      longitude: 114.7115128,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Nias",
      slug: "nias",
      imageUrl:
        "https://ucarecdn.com/57be51b4-e70f-4da0-a63e-a44332c6ec34/-/preview/400x300/",
      latitude: 1.1036798,
      longitude: 97.3705768,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Belitung",
      slug: "belitung",
      imageUrl:
        "https://ucarecdn.com/61b340ea-3951-41ec-9613-f33e8a3bdf4e/-/preview/400x300/",
      latitude: -2.8993819,
      longitude: 97.3705768,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Buton",
      slug: "buton",
      imageUrl:
        "https://ucarecdn.com/08c975df-3676-4b7c-aecf-4b8506bc5061/-/preview/400x300/",
      latitude: -5.0405425,
      longitude: 122.8116263,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Lombok",
      slug: "lombok",
      imageUrl:
        "https://ucarecdn.com/33bbc0fc-a1b3-4942-90d4-332f300c4f6f/-/preview/400x300/",
      latitude: -8.5476683,
      longitude: 116.1053826,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Madura",
      slug: "madura",
      imageUrl:
        "https://ucarecdn.com/fd275907-17c0-4a08-90f5-e6653f9116e8/-/preview/400x300/",
      latitude: -7.0581924,
      longitude: 112.7396031,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Nusa Penida",
      slug: "penida",
      imageUrl:
        "https://ucarecdn.com/1034283d-87a8-4a69-aa1e-46fc5b4e2f39/-/preview/400x300/",
      latitude: -8.7454859,
      longitude: 115.4964409,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Ambon",
      slug: "ambon",
      imageUrl:
        "https://ucarecdn.com/6b44b741-8b3c-4696-b876-775a1a872844/-/preview/400x300/",
      latitude: -3.6421134,
      longitude: 128.0548957,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Komodo",
      slug: "komodo",
      imageUrl:
        "https://ucarecdn.com/bcbd83c6-8d13-434c-8df6-4529c9a4bf9d/-/preview/400x300/",
      latitude: -8.5888579,
      longitude: 119.3078264,
      zoom: 9,
    },
  ];

  await Promise.all(
    islands.map(async (island) => {
      await prisma.island.upsert({
        where: { slug: island.slug },
        update: island,
        create: island,
      });
    })
  );
}
