import { Prisma, PrismaClient } from "@prisma/client";

type PlaceSeeder = Prisma.PlaceCreateManyInput & {
  categorySlugs: string[];
  islandSlug?: string;
};

export default async function run(prisma: PrismaClient) {
  console.info("Seed places...");

  const places: Array<PlaceSeeder> = [
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
        "https://ucarecdn.com/3612a0e4-d4c4-4094-a1d4-1348ae30c2c6/-/preview/400x300/",
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
        "https://ucarecdn.com/bb9241ee-e4ac-4387-8816-ee233519b429/-/preview/400x300/",
      latitude: -8.6212003,
      longitude: 115.0867082,
      zoom: 20,
      address: "Beraban, Kec. Kediri, Kabupaten Tabanan, Bali 82121",
      isFeatured: false,
      position: 7,
    },
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
        "https://ucarecdn.com/d8a76c8c-ac1c-4235-bd33-3ff541a43ffa/-/preview/400x300/",
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
        "https://ucarecdn.com/f6728ea5-bbc7-443d-9d48-125a80f68cf9/-/preview/400x300/",
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
      islandSlug: "bali",
      stateId: "1805",
      cityId: "56723",
      categorySlugs: ["historicalsites"],
      title: "Bundaran HI",
      slug: "bundaran-hi",
      description:
        "The Selamat Datang Monument is located in the center of a roundabout known as Bundaran Hotel Indonesia or Bundaran HI (Indonesian for Hotel Indonesia Roundabout)",
      imageUrl:
        "https://ucarecdn.com/853dddbb-1eb6-4e77-adda-034705c04f3c/-/preview/400x300/",
      latitude: -6.1952368,
      longitude: 106.8230805,
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
        "https://ucarecdn.com/622f86c5-aa35-441b-9ed5-504f0c29d734/-/preview/400x300/",
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
      title: "Borobudur Temple",
      slug: "borobudur-temple",
      description: "9th-century Mahayana Buddhist temple.",
      imageUrl:
        "https://ucarecdn.com/ed9d14b1-027a-4fbc-852d-398b308a0cd4/-/preview/400x300/",
      latitude: -7.6078745,
      longitude: 110.2037512,
      zoom: 14,
      address:
        "Kawasan Candi Borobudur, Borobudur, Magelang, Jawa Tengah 56553",
      isFeatured: true,
      position: 2,
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
        "https://ucarecdn.com/20a24a0c-ac60-4473-8c55-8536196b9591/-/preview/400x300/",
      latitude: -8.0262033,
      longitude: 110.3158671,
      zoom: 14,
      address: "Jl. Parangtritis Km. 28, Bantul, Yogyakarta 55772",
      isFeatured: false,
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
        "https://ucarecdn.com/f4a70f05-ad3a-4e19-bf42-4a88bed9af69/-/preview/400x300/",
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
        "https://ucarecdn.com/528dcefd-84be-4285-9058-49418a34b8c1/-/preview/400x300/",
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
        "https://ucarecdn.com/a54cc47c-2586-4ba3-8166-61e9098a1235/-/preview/400x300/",
      latitude: -8.7180219,
      longitude: 115.1628847,
      zoom: 14,
      address: "Kec. Kuta, Kabupaten Badung, Bali",
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
        "https://ucarecdn.com/0df1c774-fbe3-40ed-baed-0e35ef35e0af/-/preview/400x300/",
      latitude: -8.8290434,
      longitude: 115.0821739,
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
        "https://ucarecdn.com/d8e2b778-318f-404f-b806-f5c802f4fef7/-/preview/400x300/",
      latitude: -6.175392,
      longitude: 106.827153,
      zoom: 14,
      address:
        "Merdeka Square, Jalan Lapangan Monas, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110",
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
        "https://ucarecdn.com/7b509d3d-19ca-43c7-9455-05c64906358f/-/preview/400x300/",
      latitude: -6.1351947,
      longitude: 106.8107251,
      zoom: 14,
      address:
        "Taman Fatahillah No.1, Pinangsia, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11110",
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
        "https://ucarecdn.com/7cc52aec-f76e-413a-93bc-320a2e4aa3ec/-/preview/400x300/",
      latitude: -6.1950412,
      longitude: 106.8207104,
      zoom: 14,
      address:
        "Jl. MH Thamrin No.1, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310",
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
        "https://ucarecdn.com/84d2a9e9-4329-4d98-a52b-5ea583d0ad9c/-/preview/400x300/",
      latitude: -7.9424721,
      longitude: 112.9427125,
      zoom: 14,
      address: "Area Gn. Bromo, Podokoyo, Kec. Tosari, Pasuruan, Jawa Timur",
    },
    {
      countryId: "102",
      stateId: "1818",
      cityId: "56721",
      categorySlugs: ["beach"],
      title: "Pink Beach",
      slug: "pink-beach",
      description: "Beach with pink sand.",
      imageUrl:
        "https://ucarecdn.com/622a2a87-a6b8-456c-9a74-1b10354df034/-/preview/400x300/",
      latitude: -8.6013722,
      longitude: 119.5171736,
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
        "https://ucarecdn.com/91c8f5c3-796e-4b29-8bd1-46cc1a4ba06a/-/preview/400x300/",
      latitude: -8.2302073,
      longitude: 112.9149689,
      zoom: 14,
      address:
        "Jalan Tumpak Sewu, Besukcukit, Sidomulyo, Kec. Pronojiwo, Kabupaten Lumajang, Jawa Timur 67374",
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
        "https://ucarecdn.com/a976309e-0e82-4cda-8de0-20cdb7cccfd4/-/preview/400x300/",
      latitude: -8.0014,
      longitude: 112.9526,
      zoom: 14,
      address:
        "Jalan Tumpak Sewu, Besukcukit, Sidomulyo, Kec. Pronojiwo, Kabupaten Lumajang, Jawa Timur 67374",
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
        "https://ucarecdn.com/67ebca2e-98cf-4188-941e-c6fe849f7f39/-/preview/400x300/",
      latitude: -8.3518011,
      longitude: 116.0355636,
      zoom: 14,
      address:
        "Gili Indah, Kec. Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Barat",
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
        "https://ucarecdn.com/9585c4dc-c428-44ab-a456-78eae617d018/-/preview/400x300/",
      latitude: -8.7411569,
      longitude: 115.446332,
      zoom: 14,
      address: "Kec. Nusa Penida, Kabupaten Klungkung, Bali",
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
        "https://ucarecdn.com/f5c5edd4-76e6-4426-acfc-1b0f69df68b6/-/preview/400x300/",
      latitude: -8.1906335,
      longitude: 115.1584101,
      zoom: 14,
      address: "Bebetin, Kec. Sawan, Kabupaten Buleleng, Bali",
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
        "https://ucarecdn.com/cecdc69b-840f-4f28-80d8-45ff791ecc9a/-/preview/400x300/",
      latitude: 2.6110932,
      longitude: 98.6711577,
      zoom: 14,
      address: "North Sumatra",
    },
    {
      countryId: "102",
      stateId: "1814",
      cityId: "56497",
      categorySlugs: ["beach"],
      title: "Tanjung Aan Beach",
      slug: "tanjung-aan-beach",
      description: "White sandy beach with clear blue waters.",
      imageUrl:
        "https://ucarecdn.com/b4ece71b-dd23-449f-acd2-6bec49de0aff/-/preview/400x300/",
      latitude: -8.9101022,
      longitude: 116.3198844,
      zoom: 14,
      address: "Lombok, West Nusa Tenggara",
    },
    {
      countryId: "102",
      stateId: "1795",
      cityId: "56662",
      categorySlugs: ["cultural"],
      title: "Toraja Traditional Houses",
      slug: "toraja-traditional-houses",
      description: "Traditional houses with unique architecture.",
      imageUrl:
        "https://ucarecdn.com/60495e15-98e4-4b07-a017-a5b2abb87fbb/-/preview/400x300/",
      latitude: -2.9667,
      longitude: 119.8995,
      zoom: 14,
      address: "South Sulawesi",
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "57046",
      categorySlugs: ["historicalsites"],
      title: "Ubud Palace",
      slug: "ubud-palace",
      description: "Historical royal palace in Ubud.",
      imageUrl:
        "https://ucarecdn.com/769629bd-7bf9-431f-8781-19b0029b5a3d/-/preview/400x300/",
      latitude: -8.5065924,
      longitude: 115.2600135,
      zoom: 14,
      address:
        "Jl. Raya Ubud No.8, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1825",
      cityId: "56196",
      categorySlugs: ["shopping"],
      title: "Trans Studio Mall Bandung",
      slug: "trans-studio-mall-bandung",
      description: "Large shopping mall in Bandung.",
      imageUrl:
        "https://ucarecdn.com/5871f6a5-5c68-4638-8b7e-a52dc95e11a5/-/preview/400x300/",
      latitude: -6.9255367,
      longitude: 107.6340927,
      zoom: 14,
      address:
        "Jl. Gatot Subroto No.289, Cibangkong, Kec. Batununggal, Kota Bandung, Jawa Barat 40273",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56263",
      categorySlugs: ["beach"],
      title: "Sanur Beach",
      slug: "sanur-beach",
      description: "Popular beach in Bali.",
      imageUrl:
        "https://ucarecdn.com/b7702e56-3f31-4f1d-b588-00df458010d9/-/preview/400x300/",
      latitude: -8.7042307,
      longitude: 115.254543,
      zoom: 14,
      address: "Sanur, Denpasar, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56890",
      categorySlugs: ["beach"],
      title: "Nusa Dua Beach",
      slug: "nusa-dua-beach",
      description: "High-end beach resort area.",
      imageUrl:
        "https://ucarecdn.com/659cedb7-056e-4da5-8702-f0b3393c0856/-/preview/400x300/",
      latitude: -8.7985273,
      longitude: 115.2100453,
      zoom: 14,
      address: "Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1818",
      cityId: "56721",
      categorySlugs: ["island"],
      title: "Padar Island",
      slug: "padar-island",
      description: "Scenic island with panoramic views.",
      imageUrl:
        "https://ucarecdn.com/20511260-bfd3-4677-a29f-27af3d73cf3e/-/preview/400x300/",
      latitude: -8.6626241,
      longitude: 119.5491269,
      zoom: 14,
      address:
        "Komodo, Kec. Komodo, Kabupaten Manggarai Barat, Nusa Tenggara Timur",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1802",
      cityId: "57061",
      categorySlugs: ["volcano"],
      title: "Mount Merapi",
      slug: "mount-merapi",
      description: "Active stratovolcano in Yogyakarta.",
      imageUrl:
        "https://ucarecdn.com/4cee881f-8c87-45b6-97db-c04e315d173b/-/preview/400x300/",
      latitude: -7.540696,
      longitude: 110.4354244,
      zoom: 14,
      address:
        "Dusun 2, Suroteleng, Kec. Selo, Kabupaten Boyolali, Jawa Tengah",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56981",
      categorySlugs: ["waterfall"],
      title: "Gitgit Waterfall",
      slug: "gitgit-waterfall",
      description: "Famous waterfall in Bali.",
      imageUrl:
        "https://ucarecdn.com/f38e4297-031a-42b6-8d9e-aeaad21c98a1/-/preview/400x300/",
      latitude: -8.1960943,
      longitude: 115.1323784,
      zoom: 14,
      address:
        "Jl. Raya Bedugul - Singaraja, Gitgit, Kec. Sukasada, Kabupaten Buleleng, Bali 81161",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1829",
      cityId: "56816",
      categorySlugs: ["cultural"],
      title: "Kraton Yogyakarta",
      slug: "kraton-yogyakarta",
      description: "The palace of the Yogyakarta Sultanate.",
      imageUrl:
        "https://ucarecdn.com/930efa1c-2042-4004-a54a-fc2eca2f9d68/-/preview/400x300/",
      latitude: -7.8052792,
      longitude: 110.3616282,
      zoom: 14,
      address:
        "Jalan Rotowijayan Blok No.1, Panembahan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1827",
      cityId: "56600",
      categorySlugs: ["volcano"],
      title: "Mount Ijen",
      slug: "mount-ijen",
      description: "Active volcano known for its blue flames.",
      imageUrl:
        "https://ucarecdn.com/8ccaa11d-7cf1-46f9-b637-4aa63b7f7557/-/preview/400x300/",
      latitude: -8.0587806,
      longitude: 114.2321135,
      zoom: 14,
      address: "East Java",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1829",
      cityId: "56414",
      categorySlugs: ["beach"],
      title: "Indrayanti Beach",
      slug: "indrayanti-beach",
      description: "Popular beach with white sand and clear waters.",
      imageUrl:
        "https://ucarecdn.com/81beeba3-916f-4b98-a074-179fb2ba91d2/-/preview/400x300/",
      latitude: -8.1507833,
      longitude: 110.6099911,
      zoom: 14,
      address: "Tepus, Gunung Kidul, Yogyakarta",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56827",
      categorySlugs: ["beach"],
      title: "Dreamland Beach",
      slug: "dreamland-beach",
      description: "Beautiful beach with white sand and surf.",
      imageUrl:
        "https://ucarecdn.com/a87073f9-bdc3-4754-b061-e7b9648461dd/-/preview/400x300/",
      latitude: -8.799544,
      longitude: 115.1113493,
      zoom: 14,
      address: "Pecatu, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56302",
      categorySlugs: ["beach"],
      title: "Balangan Beach",
      slug: "balangan-beach",
      description: "Scenic beach with good surf.",
      imageUrl:
        "https://ucarecdn.com/c1fd12db-a0c6-43db-930b-91693b42626d/-/preview/400x300/",
      latitude: -8.7922633,
      longitude: 115.1221238,
      zoom: 14,
      address: "Kec. Kuta Sel., Kabupaten Badung, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1802",
      cityId: "56459",
      categorySlugs: ["historicalsites"],
      title: "Sewu Temple",
      slug: "sewu-temple",
      description: "Buddhist temple complex near Prambanan.",
      imageUrl:
        "https://ucarecdn.com/537beb0b-b5a9-4602-8c49-893de509e60c/-/preview/400x300/",
      latitude: -7.7439132,
      longitude: 110.4903588,
      zoom: 14,
      address:
        "Jl. Raya Solo - Yogyakarta No.KM.16, Bugisan, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1825",
      cityId: "56196",
      categorySlugs: ["park"],
      title: "Taman Hutan Raya Ir. H. Djuanda",
      slug: "taman-hutan-raya-ir-h-djuanda",
      description: "Urban forest park in Bandung.",
      imageUrl:
        "https://ucarecdn.com/a99c75bb-91c8-40a8-8a88-148a70a5e06c/-/preview/400x300/",
      latitude: -6.8589267,
      longitude: -6.8589267,
      zoom: 14,
      address:
        "Kompleks Tahura, Jl. Ir. H. Juanda No.99, Ciburial, Kec. Cimenyan, Kabupaten Bandung, Jawa Barat 40198",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1805",
      cityId: "56722",
      categorySlugs: ["museum"],
      title: "Museum Macan",
      slug: "museum-macan",
      description: "Modern art museum in Jakarta.",
      imageUrl:
        "https://ucarecdn.com/e9abe245-f81e-47c7-b8a1-c4f4d48b3cc5/-/preview/400x300/",
      latitude: -6.1910381,
      longitude: 106.7654109,
      zoom: 14,
      address:
        "AKR Tower Level M, Jl. Panjang No.5, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1827",
      cityId: "56500",
      categorySlugs: ["volcano"],
      title: "Mount Semeru",
      slug: "mount-semeru",
      description: "Highest volcano in Java.",
      imageUrl:
        "https://ucarecdn.com/35205d9b-3489-4527-b3b1-3d91755c5ddd/-/preview/400x300/",
      latitude: -8.1076957,
      longitude: 112.9121078,
      zoom: 14,
      address:
        "Ngampo, Pasrujambe, Kec. Pasrujambe, Kabupaten Lumajang, Jawa Timur",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56302",
      categorySlugs: ["beach"],
      title: "Jimbaran Beach",
      slug: "jimbaran-beach",
      description: "Popular beach known for seafood restaurants.",
      imageUrl:
        "https://ucarecdn.com/897a4ce7-7adb-4cc0-a231-ad1fca8bdfc1/-/preview/400x300/",
      latitude: -8.7750576,
      longitude: 115.1598931,
      zoom: 14,
      address: "Jimbaran, Kec. Kuta Sel., Kabupaten Badung, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56322",
      categorySlugs: ["beach"],
      title: "Padang Padang Beach",
      slug: "padang-padang-beach",
      description: "Scenic beach with surf spots.",
      imageUrl:
        "https://ucarecdn.com/78a54f89-d4f7-441f-b206-0baffd78b323/-/preview/400x300/",
      latitude: -8.8111471,
      longitude: 115.1012494,
      zoom: 14,
      address: "Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1827",
      cityId: "56600",
      categorySlugs: ["waterfall"],
      title: "Madakaripura Waterfall",
      slug: "madakaripura-waterfall",
      description: "Scenic waterfall in East Java.",
      imageUrl:
        "https://ucarecdn.com/2d438d82-77b8-4b53-a072-964217819810/-/preview/400x300/",
      latitude: -7.847866,
      longitude: 113.0135465,
      zoom: 14,
      address:
        "5228+VC5, Branggah, Sapih, Kec. Lumbang, Kabupaten Probolinggo, Jawa Timur 67183",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56379",
      categorySlugs: ["beach"],
      title: "Lovina Beach",
      slug: "lovina-beach",
      description: "Beach famous for dolphin sightings.",
      imageUrl:
        "https://ucarecdn.com/085ed98f-a0af-4551-9ee7-a620e119eb82/-/preview/400x300/",
      latitude: -8.1605875,
      longitude: 115.0196154,
      zoom: 14,
      address: "Kec. Buleleng, Kabupaten Buleleng, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56884",
      categorySlugs: ["beach"],
      title: "Menjangan Island",
      slug: "menjangan-island",
      description: "Island known for snorkeling and diving.",
      imageUrl:
        "https://ucarecdn.com/39564edb-bdfd-49c3-94db-b3778ffdc327/-/preview/400x300/",
      latitude: -8.0983118,
      longitude: 114.5047003,
      zoom: 14,
      address: "Sumber Klampok, Kec. Gerokgak, Kabupaten Buleleng, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1829",
      cityId: "56637",
      categorySlugs: ["historicalsites"],
      title: "Ratu Boko Palace",
      slug: "ratu-boko-palace",
      description: "Archaeological site and palace complex.",
      imageUrl:
        "https://ucarecdn.com/a440c883-1f25-47b7-bf41-d8c1265ab150/-/preview/400x300/",
      latitude: -7.7705363,
      longitude: 110.4868409,
      zoom: 14,
      address:
        "Jl. Raya Piyungan - Prambanan No.2, Gatak, Bokoharjo, Kec. Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 5572",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1827",
      cityId: "56301",
      categorySlugs: ["beach"],
      title: "Papuma Beach",
      slug: "papuma-beach",
      description: "Beautiful beach with white sand and clear waters.",
      imageUrl:
        "https://ucarecdn.com/f88181b5-3b42-47ff-a838-3d2083ddf683/-/preview/400x300/",
      latitude: -8.4310001,
      longitude: 113.5533954,
      zoom: 14,
      address: "Jember, East Java",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56884",
      categorySlugs: ["beach"],
      title: "Crystal Bay",
      slug: "crystal-bay",
      description: "Beautiful beach on Nusa Penida.",
      imageUrl:
        "https://ucarecdn.com/edaaa01f-cf4b-416f-9fb2-78a2dc990edc/-/preview/400x300/",
      latitude: -8.7151611,
      longitude: 37.4121815,
      zoom: 14,
      address: "Nusa Penida, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56884",
      categorySlugs: ["beach"],
      title: "Atuh Beach",
      slug: "atuh-beach",
      description: "Scenic beach on Nusa Penida.",
      imageUrl:
        "https://ucarecdn.com/3a6f53c5-6ef1-4a72-9b8d-d5eb2b9fe9d7/-/scale_crop/400x300/",
      latitude: -8.7733901,
      longitude: 115.611519,
      zoom: 14,
      address: "Pejukutan, Kec. Nusa Penida, Kabupaten Klungkung, Bali 80771",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "jawa",
      stateId: "1802",
      cityId: "56459",
      categorySlugs: ["water-park"],
      title: "Umbul Kemanten",
      slug: "umbul-kemanten",
      description:
        "Set amid towering trees, this natural spring pool with clear water is a popular spot for swimming.",
      imageUrl:
        "https://ucarecdn.com/761eb414-ada4-4105-a172-2569237312aa/-/preview/400x300/",
      latitude: -7.5916181,
      longitude: 110.6506105,
      zoom: 17,
      address:
        "Jalan Janti Boto, Boto, Wunut, Kec. Tulung, Kabupaten Klaten, Jawa Tengah 57482",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "jawa",
      stateId: "1802",
      cityId: "56459",
      categorySlugs: ["water-park"],
      title: "Umbul Ponggok",
      slug: "umbul-ponggok",
      description:
        "Popular with snorkelers & inexperienced divers, this calm natural pool features, sand, rocks & fish.",
      imageUrl:
        "https://ucarecdn.com/25f6e4ba-97e9-445b-946f-bb03d8f9effb/-/preview/400x300/",
      latitude: -7.6138103,
      longitude: 110.6358647,
      zoom: 17,
      address:
        "Jl. Delanggu- Polanharjo No.Ds, Jeblogan, Ponggok, Kec. Polanharjo, Kabupaten Klaten, Jawa Tengah 57474",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "jawa",
      stateId: "1802",
      cityId: "56459",
      categorySlugs: ["water-park"],
      title: "Umbul Cokro",
      slug: "umbul-cokro",
      description:
        "Set amid towering trees, this natural spring pool with clear water is a popular spot for swimming.",
      imageUrl:
        "https://ucarecdn.com/5af5d5ad-22cf-466e-bb28-25b383d32c90/-/preview/400x300/",
      latitude: -7.6028098,
      longitude: 110.6414273,
      zoom: 17,
      address: "Daleman, Kabupaten Klaten, Jawa Tengah",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "jawa",
      stateId: "1802",
      cityId: "56505",
      categorySlugs: ["campground", "park"],
      title: "Telomoyo Nature Park",
      slug: "telomoyo-nature-park",
      description: "A beautiful camp ground.",
      imageUrl:
        "https://ucarecdn.com/1ee7b5d4-f218-4e4e-8996-e399a613cb86/-/preview/400x300/",
      latitude: -7.3765102,
      longitude: 110.3951538,
      zoom: 17,
      address:
        "Jalan Ngablak - Grabag No.KM. 1, Pandean Lor, Pandean, Kec. Ngablak, Kabupaten Magelang, Jawa Tengah 56194",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "kalimantan",
      stateId: "1806",
      cityId: "150102",
      categorySlugs: ["lake"],
      title: "Danau Laet",
      slug: "danau-laet",
      description: "A beautiful lake.",
      imageUrl:
        "https://ucarecdn.com/1ba5af74-abb3-4742-b345-d278f4de5819/-/preview/400x300/",
      latitude: 0.1558683,
      longitude: 109.5625303,
      zoom: 12,
      address:
        "Lalang, Kec. Tayan Hilir, Kabupaten Sanggau, Kalimantan Barat 78564",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "sulawesi",
      stateId: "1795",
      cityId: "56530",
      categorySlugs: ["nationalpark"],
      title: "Balai Taman Nasional Bantimurung Bulusaraung",
      slug: "bantimurung-bulusaraung",
      description:
        "A vast, mountainous national park known for its karst limestone formations, waterfalls & butterflies.",
      imageUrl:
        "https://ucarecdn.com/5acfec0b-88e9-4650-b71c-a62fcc75d9fe/-/preview/400x300/",
      latitude: -4.7122273,
      longitude: 119.397244,
      zoom: 10,
      address: "Bentenge, Sulawesi Selatan",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "papua",
      stateId: "1799",
      cityId: "56678",
      categorySlugs: ["nationalpark"],
      title: "Taman Nasional Teluk Cenderawasih",
      slug: "teluk-cenderawasih",
      description:
        "Large marine park popular for snorkeling around the coral reef & swimming with whale sharks.",
      imageUrl:
        "https://ucarecdn.com/ba0bd45d-87a0-4c0f-8130-ab1dbc7e2ba3/-/preview/400x300/",
      latitude: -2.5483309,
      longitude: 132.0395279,
      zoom: 10,
      address: "Sobei Indah, Duairi, Kabupaten Teluk Wondama, Papua Bar. 98362",
      position: null,
    },
    {
      countryId: "102",
      stateId: "1800",
      cityId: "56514",
      categorySlugs: ["beach"],
      title: "Pantai Hunimua Liang",
      slug: "pantai-hunimua-liang",
      description: "Beach with beautiful views",
      imageUrl:
        "https://ucarecdn.com/4b647d6f-6250-4686-b6c6-f955e89d4cf7/-/preview/400x300/",
      latitude: -3.4823135,
      longitude: 128.2581875,
      zoom: 12,
      address:
        "Jl. Propinsi, Liang, Kec. Salahutu, Kabupaten Maluku Tengah, Maluku",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "kalimantan",
      stateId: "1804",
      cityId: "56190",
      categorySlugs: ["beach"],
      title: "Pantai Melawai",
      slug: "pantai-melawai",
      description:
        "Bustling, sandy urban beach, popular for street-food fare & viewing scenic sunsets.",
      imageUrl:
        "https://ucarecdn.com/d530e5d3-7be5-4259-bd65-e1637185a61a/-/preview/400x300/",
      latitude: -1.2713843,
      longitude: 116.7782115,
      zoom: 13,
      address:
        "Jl. Pelabuhan Semayang, Prapatan, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76111",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "belitung",
      stateId: "1820",
      cityId: "56350",
      categorySlugs: ["beach"],
      title: "Pantai Kiras",
      slug: "pantai-kiras",
      description: "Beach with beautiful views",
      imageUrl:
        "https://ucarecdn.com/5b92b9ec-6408-41cb-994f-62922b401a82/-/preview/400x300/",
      latitude: -3.2248594,
      longitude: 107.5932406,
      zoom: 15,
      address: "Padang Kandis, Belitung Regency, Bangka Belitung Islands",
      position: null,
    },
    {
      countryId: "102",
      islandSlug: "belitung",
      stateId: "1820",
      cityId: "56350",
      categorySlugs: ["beach"],
      title: "Pantai Penyabong",
      slug: "pantai-penyabong",
      description: "Beach with beautiful views",
      imageUrl:
        "https://ucarecdn.com/259799e5-e141-4f75-a021-5a703d963a3e/-/preview/400x300/",
      latitude: -3.1874969,
      longitude: 107.5774324,
      zoom: 15,
      address:
        "Padang Kandis, Membalong, Belitung Regency, Bangka Belitung Islands 33452",
      position: null,
    },
    {
      countryId: "102",
      stateId: "1814",
      cityId: "56498",
      categorySlugs: ["mountain"],
      title: "Mount Rinjani",
      slug: "mount-rinjani",
      description: "An active volcano on the island of Lombok.",
      imageUrl:
        "https://ucarecdn.com/04642e00-b939-4b59-873b-ed55a6caa5c4/-/preview/400x300/",
      latitude: -8.4112737,
      longitude: 116.4470491,
      zoom: 14,
      address:
        "Sembalun Lawang, Kec. Sembalun, Kabupaten Lombok Timur, Nusa Tenggara Barat.",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1826",
      cityId: "56438",
      categorySlugs: ["mountain"],
      title: "Mount Agung",
      slug: "mount-agung",
      description: "The highest point in Bali.",
      imageUrl:
        "https://ucarecdn.com/05f471df-7823-463a-b9c3-a866bd499d4b/-/preview/400x300/",
      latitude: -8.343289,
      longitude: 115.4967578,
      zoom: 14,
      address: "Jungutan, Kec. Bebandem, Kabupaten Karangasem, Bali",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1802",
      cityId: "56230",
      categorySlugs: ["mountain"],
      title: "Mount Merbabu",
      slug: "mount-merbabu",
      description: "A dormant stratovolcano in Central Java.",
      imageUrl:
        "https://ucarecdn.com/bada74e1-71d1-48ec-8043-42b71b64b0e3/-/preview/400x300/",
      latitude: -7.4549785,
      longitude: 110.4297003,
      zoom: 14,
      address: "Suroteleng, Kec. Selo, Kabupaten Boyolali, Jawa Tengah",
      isFeatured: false,
      position: null,
    },
    {
      countryId: "102",
      stateId: "1802",
      cityId: "56439",
      categorySlugs: ["mountain"],
      title: "Mount Lawu",
      slug: "mount-lawu",
      description: "A stratovolcano located between Central and East Java.",
      imageUrl:
        "https://ucarecdn.com/a88efebc-5472-410c-8d11-934a98ea3d0d/-/preview/400x300/",
      latitude: -7.6274785,
      longitude: 111.1838669,
      zoom: 14,
      address:
        "Area Hutan, Gondosuli, Kec. Tawangmangu, Kabupaten Karanganyar, Jawa Tengah",
      isFeatured: false,
      position: null,
    },
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
