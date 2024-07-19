import { Prisma, PrismaClient } from "@prisma/client";

type PlaceSeeder = Prisma.PlaceCreateManyInput & {
  categorySlugs: string[];
  islandSlug?: string;
};

export default async function run(prisma: PrismaClient) {
  const places: Array<PlaceSeeder> = [
    {
      countryId: "102",
      islandSlug: "jawa",
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
      isFeatured: true,
      position: 6,
    },
    {
      countryId: "102",
      islandSlug: "jawa",
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
      islandSlug: "bali",
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
      islandSlug: "bali",
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
      islandSlug: "bali",
      stateId: "1827",
      cityId: "56803",
      categorySlugs: ["historicalsites"],
      title: "Monument Surabaya",
      slug: "monument-surabaya",
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
    {
      countryId: "102",
      stateId: "1802",
      cityId: "56505",
      categorySlugs: ["historicalsites"],
      title: "Borobudur",
      slug: "borobudur",
      description: "9th-century Mahayana Buddhist temple.",
      imageUrl:
        "https://unsplash.com/photos/a-group-of-stone-structures-sitting-on-top-of-a-lush-green-field-n6asf0HAtm8",
      latitude: -7.6078745,
      longitude: 110.2037512,
      zoom: 14,
      address:
        "Kawasan Candi Borobudur, Borobudur, Magelang, Jawa Tengah 56553",
      isFeatured: true,
      position: 7,
    },
    {
      countryId: "102",
      stateId: "1829",
      cityId: "56338",
      categorySlugs: ["beach"],
      title: "Parangtritis Beach",
      slug: "parangtritis-beach",
      description: "Famous for its sunsets and mystic legends.",
      imageUrl:
        "https://unsplash.com/photos/2-brown-horses-running-on-beach-during-daytime-tENrmGTfmo8",
      latitude: -8.0262033,
      longitude: 110.3158671,
      zoom: 14,
      address: "Jl. Parangtritis Km. 28, Bantul, Yogyakarta 55772",
      isFeatured: true,
      position: 8,
    },
    {
      countryId: "102",
      islandSlug: "jawa",
      stateId: "1829",
      cityId: "56637",
      categorySlugs: ["temple"],
      title: "Prambanan Temple",
      slug: "prambanan-temple",
      description: "9th-century Hindu temple compound.",
      imageUrl:
        "https://unsplash.com/photos/an-aerial-view-of-a-temple-in-the-middle-of-a-field-TCIhwzzsQKA",
      latitude: -7.7519567,
      longitude: 110.4919415,
      zoom: 14,
      address:
        "Jl. Raya Solo - Yogyakarta No.16, Kranggan, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55572",
      isFeatured: false,
      position: 9,
    },
    {
      countryId: "102",
      stateId: "1818",
      cityId: "56721",
      categorySlugs: ["nationalpark"],
      title: "Komodo National Park",
      slug: "komodo-national-park",
      description: "Home to the Komodo dragon.",
      imageUrl:
        "https://unsplash.com/photos/green-and-brown-lizard-on-brown-soil-8xxwWKyDs5E",
      latitude: -8.5654485,
      longitude: 119.4880321,
      zoom: 14,
      address: "Komodo, Nusa Tenggara Timur",
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56322",
      categorySlugs: ["beach"],
      title: "Kuta Beach",
      slug: "kuta-beach",
      description: "Popular tourist destination in Bali.",
      imageUrl:
        "https://unsplash.com/photos/people-on-beach-during-daytime-Te3JvTcls1I",
      latitude: -8.7181402,
      longitude: 115.1695941,
      zoom: 14,
      address: "Kuta, Kabupaten Badung, Bali",
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56827",
      categorySlugs: ["temple"],
      title: "Uluwatu Temple",
      slug: "uluwatu-temple",
      description: "Balinese sea temple.",
      imageUrl:
        "https://unsplash.com/photos/person-standing-on-cliff-in-front-of-ocean-during-daytime-yKjURf1u7EY",
      latitude: -8.8296392,
      longitude: 115.0833832,
      zoom: 14,
      address: "Pecatu, Kuta Selatan, Kabupaten Badung, Bali",
    },
    {
      countryId: "102",
      stateId: "1805",
      cityId: "56723",
      categorySlugs: ["historicalsites", "museum"],
      title: "National Monument (Monas)",
      slug: "monas",
      description: "Iconic monument symbolizing Indonesia's independence.",
      imageUrl:
        "https://unsplash.com/photos/a-contrail-in-the-sky-over-a-monument-b05TXoyMYOY",
      latitude: -6.175392,
      longitude: 106.827153,
      zoom: 14,
      address: "Gambir, Central Jakarta, Jakarta",
    },
    {
      countryId: "102",
      stateId: "1805",
      cityId: "56726",
      categorySlugs: ["museum"],
      title: "Jakarta History Museum (Fatahillah Museum)",
      slug: "jakarta-history-museum",
      description: "Museum showcasing Jakarta's history.",
      imageUrl:
        "https://museum.kemdikbud.go.id/storage/assets/images/museums/191/2019-11-27_907.jpg",
      latitude: -6.1352,
      longitude: 106.8133,
      zoom: 14,
      address: "Jalan Taman Fatahillah No. 1, Kota Tua, Jakarta",
    },
    {
      countryId: "102",
      stateId: "1805",
      cityId: "56723",
      categorySlugs: ["shopping"],
      title: "Grand Indonesia Mall",
      slug: "grand-indonesia-mall",
      description: "Large upscale shopping mall.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEHqtYPYeFRmoMdS9b46JETJPUDGN_b-cw&s",
      latitude: -6.196196,
      longitude: 106.822926,
      zoom: 14,
      address: "Jalan MH Thamrin No. 1, Central Jakarta",
    },
    {
      countryId: "102",
      stateId: "1827",
      cityId: "56600",
      categorySlugs: ["volcano"],
      title: "Mount Bromo",
      slug: "mount-bromo",
      description: "Active volcano and popular tourist destination.",
      imageUrl:
        "https://unsplash.com/photos/brown-mountain-under-blue-sky-during-daytime-uktyDpxvKSg",
      latitude: -7.942493,
      longitude: 112.953012,
      zoom: 14,
      address: "East Java",
    },
    {
      countryId: "102",
      stateId: "1818",
      cityId: "56721",
      categorySlugs: ["beach"],
      title: "Pink Beach",
      slug: "pink-beach",
      description: "Beach with pink sand.",
      imageUrl: "https://unsplash.com/photos/view-of-sea-waves-b6C2oGuAads",
      latitude: -8.9504,
      longitude: 119.7516,
      zoom: 14,
      address: "Komodo Island, East Nusa Tenggara",
    },
    {
      countryId: "102",
      stateId: "1827",
      cityId: "56500",
      categorySlugs: ["waterfall"],
      title: "Tumpak Sewu Waterfall",
      slug: "tumpak-sewu-waterfall",
      description: "Scenic waterfall with a large drop.",
      imageUrl:
        "https://unsplash.com/photos/a-large-waterfall-surrounded-by-lush-green-trees-HdUBUpfhh1E",
      latitude: -8.2315,
      longitude: 112.9398,
      zoom: 14,
      address: "Lumajang, East Java",
    },
    {
      countryId: "102",
      stateId: "1827",
      cityId: "56600",
      categorySlugs: ["nationalpark"],
      title: "Bromo Tengger Semeru National Park",
      slug: "bromo-tengger-semeru-national-park",
      description: "National park known for its volcanoes.",
      imageUrl:
        "https://unsplash.com/photos/an-aerial-view-of-mount-bromo-volcano-under-blue-cloudy-sky-in-indonesia-lOuBPUURWJ4",
      latitude: -8.0014,
      longitude: 112.9526,
      zoom: 14,
      address: "East Java",
    },
    {
      countryId: "102",
      stateId: "1814",
      cityId: "56499",
      categorySlugs: ["island"],
      title: "Gili Islands",
      slug: "gili-islands",
      description: "Group of three small islands known for their beaches.",
      imageUrl:
        "https://unsplash.com/photos/aerial-view-of-green-trees-and-body-of-water-during-daytime-9y5uMwQKJzc",
      latitude: -8.3503,
      longitude: 116.0571,
      zoom: 14,
      address: "Lombok, West Nusa Tenggara",
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56460",
      categorySlugs: ["island"],
      title: "Nusa Penida",
      slug: "nusa-penida",
      description: "Island known for its scenic views and clear waters.",
      imageUrl:
        "https://unsplash.com/photos/an-aerial-view-of-an-island-in-the-middle-of-the-ocean-fLnUKWFOBT8",
      latitude: -8.7275,
      longitude: 115.5444,
      zoom: 14,
      address: "Bali",
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56379",
      categorySlugs: ["waterfall"],
      title: "Sekumpul Waterfall",
      slug: "sekumpul-waterfall",
      description: "Waterfall in a lush green area.",
      imageUrl:
        "https://unsplash.com/photos/an-island-in-the-middle-of-the-ocean-JRVnA8oMPLI",
      latitude: -8.1611,
      longitude: 115.1235,
      zoom: 14,
      address: "Sawan, Buleleng Regency, Bali",
    },
    {
      countryId: "102",
      stateId: "1792",
      cityId: "56867",
      categorySlugs: ["lake"],
      title: "Lake Toba",
      slug: "lake-toba",
      description: "Large natural lake in a volcanic crater.",
      imageUrl:
        "https://unsplash.com/photos/green-grass-field-near-body-of-water-under-white-clouds-during-daytime-SfYWS5iIXDg",
      latitude: 2.6879,
      longitude: 98.9404,
      zoom: 14,
      address: "North Sumatra",
    },
    // {
    //   countryId: "102",
    //   stateId: "1814",
    //   cityId: "56497",
    //   categorySlugs: ["beach"],
    //   title: "Tanjung Aan Beach",
    //   slug: "tanjung-aan-beach",
    //   description: "White sandy beach with clear blue waters.",
    //   imageUrl:
    //     "https://unsplash.com/photos/waves-crashing-on-rocks-ciCwCvA7xK4",
    //   latitude: -8.9056,
    //   longitude: 116.3304,
    //   zoom: 14,
    //   address: "Lombok, West Nusa Tenggara",
    // },
    // {
    //   countryId: "102",
    //   stateId: "1795",
    //   cityId: "56662",
    //   categorySlugs: ["cultural"],
    //   title: "Toraja Traditional Houses",
    //   slug: "toraja-traditional-houses",
    //   description: "Traditional houses with unique architecture.",
    //   imageUrl:
    //     "https://upload.wikimedia.org/wikipedia/commons/b/b2/Traditional_Toraja_House.JPG",
    //   latitude: -2.9667,
    //   longitude: 119.8995,
    //   zoom: 14,
    //   address: "South Sulawesi",
    // },
  ];

  const islands = await prisma.island.findMany({
    select: {
      id: true,
      slug: true,
    },
    where: {
      slug: {
        in: places
          .map((place) => place.islandSlug)
          .filter((slug) => slug !== undefined),
      },
    },
  });

  await Promise.all(
    places.map(async (placeData) => {
      const { categorySlugs, islandSlug, ...place } = placeData;

      const islandId = islands.find((island) => island.slug === islandSlug)?.id;

      await prisma.place.upsert({
        where: { slug: place.slug },
        update: place,
        create: {
          ...place,
          categories: {
            connect: categorySlugs.map((slug) => ({ slug })),
          },
          islandId,
        },
      });
    })
  );
}
