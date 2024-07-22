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
      title: "Borobudur Temple",
      slug: "borobudur-temple",
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
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Andhika_bayu_nugraha-taman_nasional_bromo_tengger_semeru.jpg",
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
    {
      countryId: "102",
      stateId: "1814",
      cityId: "56497",
      categorySlugs: ["beach"],
      title: "Tanjung Aan Beach",
      slug: "tanjung-aan-beach",
      description: "White sandy beach with clear blue waters.",
      imageUrl:
        "https://unsplash.com/photos/waves-crashing-on-rocks-ciCwCvA7xK4",
      latitude: -8.9056,
      longitude: 116.3304,
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
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Traditional_Toraja_House.JPG",
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
        "https://unsplash.com/photos/a-group-of-buildings-in-the-middle-of-a-forest-Unm1axnE3Mw",
      latitude: -8.5069,
      longitude: 115.2625,
      zoom: 14,
      address: "Jl. Raya Ubud No.8, Ubud, Bali 80571",
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
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Bandung%2C_Bandung_City%2C_West_Java%2C_Indonesia_-_panoramio_%283%29.jpg",
      latitude: -6.9269,
      longitude: 107.6365,
      zoom: 14,
      address: "Jl. Gatot Subroto No.289, Bandung, Jawa Barat 40273",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIkwBoyBSRwg9efLqPHw-l3rXH5aXAsYi3Q&s",
      latitude: -8.6896,
      longitude: 115.2638,
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
        "https://asset.kompas.com/crops/MpgWLXIZOyrcx1wZQ3kXrfdV-EI=/2x0:848x564/750x500/data/photo/2022/01/25/61f000083afed.jpg",
      latitude: -8.7942,
      longitude: 115.229,
      zoom: 14,
      address: "Nusa Dua, Bali",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64uoh2t9bu-CeFDrZqzZgluF0mj-lCoDiKw&s",
      latitude: -8.6534,
      longitude: 119.5641,
      zoom: 14,
      address: "Komodo National Park, East Nusa Tenggara",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NrylxlzJeqN-yYnFUkRRKgMbyvWiNioGIQ&s",
      latitude: -7.5407,
      longitude: 110.4465,
      zoom: 14,
      address: "Yogyakarta, Central Java",
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
        "https://unsplash.com/photos/gray-concrete-bridge-and-waterfalls-during-daytime-cssvEZacHvQ",
      latitude: -8.2351,
      longitude: 115.1142,
      zoom: 14,
      address: "Singaraja, Bali",
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Kraton_Yogyakarta_Pagelaran.jpg/1200px-Kraton_Yogyakarta_Pagelaran.jpg",
      latitude: -7.8061,
      longitude: 110.3645,
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
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/java/east-java/ijen-crater/ijen-crater.jpg",
      latitude: -8.058,
      longitude: 114.242,
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Txu9BxJlZ3bqvSrgEG8adpOvBb64-Pav3w&s",
      latitude: -8.1514,
      longitude: 110.6135,
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
        "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_640800916.jpg?tr=dpr-2,w-675",
      latitude: -8.7926,
      longitude: 115.0888,
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNKvLLacZ99GXdYKysOC1K8NRFcOipqgWqQ&s",
      latitude: -8.7901,
      longitude: 115.1048,
      zoom: 14,
      address: "Jimbaran, Bali",
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
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Candi_Sewu_viewed_from_the_south%2C_23_November_2013.jpg",
      latitude: -7.7521,
      longitude: 110.4918,
      zoom: 14,
      address: "Klaten, Central Java",
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
        "https://assets-a1.kompasiana.com/items/album/2021/12/22/ayobdg-tahura-djuanda-ditutup-kavin-faza2-61c21edc06310e58953b63b3.jpg",
      latitude: -6.8654,
      longitude: 107.6155,
      zoom: 14,
      address: "Jl. Ir. H. Juanda No.99, Bandung, Jawa Barat 40135",
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
        "https://casaindonesia.com/lkgallery/teaser/image_time-out_s_44_20180922182733hu9wdv.jpg",
      latitude: -6.201,
      longitude: 106.7985,
      zoom: 14,
      address: "Jl. Panjang No.5, Kebon Jeruk, Jakarta",
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
        "https://upload.wikimedia.org/wikipedia/commons/1/12/Semeru.jpg",
      latitude: -8.108,
      longitude: 112.92,
      zoom: 14,
      address: "East Java",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVThv2IehEIaW9-FI4ou5ytutoUu9tI28cQ&s",
      latitude: -8.7808,
      longitude: 115.1638,
      zoom: 14,
      address: "Jimbaran, Bali",
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
        "https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_435665278.jpg?tr=dpr-2,w-675",
      latitude: -8.8201,
      longitude: 115.0968,
      zoom: 14,
      address: "Pecatu, Bali",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SoogJwrpZKW21gmmgmH5G1OlCEb6rkM1-w&s",
      latitude: -7.9441,
      longitude: 112.9671,
      zoom: 14,
      address: "Probolinggo, East Java",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNCwO_D35b6m3aI97K3GJ8mZyIAHB2KcRmA&s",
      latitude: -8.1577,
      longitude: 115.0274,
      zoom: 14,
      address: "Buleleng, Bali",
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
        "https://lovebali.baliprov.go.id/storage/touriest_destinations/img-165838324862d8eb90cf2f0.jpg",
      latitude: -8.1009,
      longitude: 114.4938,
      zoom: 14,
      address: "West Bali National Park, Bali",
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
        "https://upload.wikimedia.org/wikipedia/commons/7/77/Kraton_Ratu_Boko_%28Ratu_Boko_Temple%29_in_Yogyakarta%2C_Indonesia_03.jpg",
      latitude: -7.7727,
      longitude: 110.4874,
      zoom: 14,
      address: "Sleman, Yogyakarta",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF5TFu_5Q4G9tlbD6Dctr_WzRvoOdVQvZ6A&s",
      latitude: -8.4662,
      longitude: 113.5958,
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
        "https://awsimages.detik.net.id/community/media/visual/2022/10/28/crystal-bay-nusa-penida-2.jpeg?w=1024",
      latitude: -8.7116,
      longitude: 115.4478,
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
        "https://wisatabalipenida.com/wp-content/uploads/2021/03/Atuh-beach.jpg",
      latitude: -8.7509,
      longitude: 115.6109,
      zoom: 14,
      address: "Nusa Penida, Bali",
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
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2019/07/08/JMspa6/t_5d230789724c2.jpg",
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
      imageUrl: "https://kolomdesa.com/wp-content/uploads/2024/04/109236.jpg",
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
        "https://klateninfo.com/wp-content/uploads/2020/09/Foto-Dalam-Air.jpg",
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
        "https://asset.kompas.com/crops/b4pqG43xd1coE2-9-uuzAsGSEvA=/0x49:1600x1115/750x500/data/photo/2021/08/10/6112334e07071.jpeg",
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
        "https://atourin.obs.ap-southeast-3.myhuaweicloud.com/images/destination/sanggau/danau-laet-profile1640494446.png?x-image-process=image/resize,p_100,limit_1/imageslim",
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
      imageUrl: "https://photos.wikimapia.org/p/00/04/30/83/56_big.jpg",
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
        "https://ik.imagekit.io/tvlk/blog/2020/03/Taman-Nasional-Teluk-Cendrawasih-NativeIndonesia.jpg",
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
        "https://asset.kompas.com/crops/XE0jgawhv2U8sPgDg47XIcEPgCw=/0x0:1000x667/750x500/data/photo/2022/07/05/62c46106b64c3.jpg",
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
        "https://cdn.rri.co.id/berita/17/images/1689810734725-pantai_melawai/1689810734725-pantai_melawai.jpg",
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
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2019/07/14/bns6nN/t_5d2a7952a0359.jpg",
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
        "https://www.belitungcantiktour.com/wp-content/uploads/2021/06/DJI_0908.jpg",
      latitude: -3.1874969,
      longitude: 107.5774324,
      zoom: 15,
      address:
        "Padang Kandis, Membalong, Belitung Regency, Bangka Belitung Islands 33452",
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
