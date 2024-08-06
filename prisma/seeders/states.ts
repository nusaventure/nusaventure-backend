import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  console.info("Seed states...");

  const states: Array<Prisma.StateCreateManyInput> = [
    {
      id: "1822",
      countryId: "102",
      name: "Aceh",
      imageUrl:
        "https://images.unsplash.com/photo-1591017683260-655b616bfb17?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 4.695135,
      longitude: 96.7493993,
      zoom: 7,
    },
    {
      id: "1826",
      countryId: "102",
      name: "Bali",
      imageUrl:
        "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -8.3405389,
      longitude: 115.0919509,
      zoom: 7,
    },
    {
      id: "1810",
      countryId: "102",
      name: "Banten",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -6.4058172,
      longitude: 106.0640179,
      zoom: 7,
    },
    {
      id: "1793",
      countryId: "102",
      name: "Bengkulu",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -3.7928451,
      longitude: 102.2607641,
      zoom: 7,
    },
    {
      id: "1829",
      countryId: "102",
      name: "DI Yogyakarta",
      imageUrl:
        "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -7.8753849,
      longitude: 110.4262088,
      zoom: 7,
    },
    {
      id: "1805",
      countryId: "102",
      name: "DKI Jakarta",
      imageUrl:
        "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -6.2087634,
      longitude: 106.845599,
      zoom: 7,
    },
    {
      id: "1812",
      countryId: "102",
      name: "Gorontalo",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 0.5435442,
      longitude: 123.0567693,
      zoom: 7,
    },
    {
      id: "1815",
      countryId: "102",
      name: "Jambi",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -1.6101229,
      longitude: 103.6131203,
      zoom: 7,
    },
    {
      id: "1825",
      countryId: "102",
      name: "Jawa Barat",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -7.090911,
      longitude: 107.668887,
      zoom: 7,
    },
    {
      id: "1802",
      countryId: "102",
      name: "Jawa Tengah",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -7.150975,
      longitude: 110.1402594,
      zoom: 7,
    },
    {
      id: "1827",
      countryId: "102",
      name: "Jawa Timur",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -7.5360639,
      longitude: 112.2384017,
      zoom: 7,
    },
    {
      id: "1806",
      countryId: "102",
      name: "Kalimantan Barat",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 0.4773475,
      longitude: 106.6131405,
      zoom: 7,
    },
    {
      id: "1819",
      countryId: "102",
      name: "Kalimantan Selatan",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -3.0926415,
      longitude: 115.2837585,
      zoom: 7,
    },
    {
      id: "1794",
      countryId: "102",
      name: "Kalimantan Tengah",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -1.6814878,
      longitude: 113.3823545,
      zoom: 7,
    },
    {
      id: "1804",
      countryId: "102",
      name: "Kalimantan Timur",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 0.5386586,
      longitude: 116.419389,
      zoom: 7,
    },
    {
      id: "1824",
      countryId: "102",
      name: "Kalimantan Utara",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 3.0730929,
      longitude: 116.0413889,
      zoom: 7,
    },
    {
      id: "1820",
      countryId: "102",
      name: "Kepulauan Bangka Belitung",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -2.7410513,
      longitude: 106.4405872,
      zoom: 7,
    },
    {
      id: "1807",
      countryId: "102",
      name: "Kepulauan Riau",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 3.9456514,
      longitude: 108.1428669,
      zoom: 7,
    },
    {
      id: "1811",
      countryId: "102",
      name: "Lampung",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -4.5585849,
      longitude: 105.4068079,
      zoom: 7,
    },
    {
      id: "1800",
      countryId: "102",
      name: "Maluku",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -3.2384616,
      longitude: 130.1452734,
      zoom: 7,
    },
    {
      id: "1801",
      countryId: "102",
      name: "Maluku Utara",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.5709993,
      longitude: 127.8087693,
      zoom: 7,
    },
    {
      id: "1814",
      countryId: "102",
      name: "Nusa Tenggara Barat",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -8.6529334,
      longitude: 117.3616476,
      zoom: 7,
    },
    {
      id: "1818",
      countryId: "102",
      name: "Nusa Tenggara Timur",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -8.6573819,
      longitude: 121.0793705,
      zoom: 7,
    },
    {
      id: "1798",
      countryId: "102",
      name: "Papua",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -5.0122202,
      longitude: 141.3470159,
      zoom: 7,
    },
    {
      id: "1799",
      countryId: "102",
      name: "Papua Barat",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -1.3361154,
      longitude: 133.1747162,
      zoom: 7,
    },
    {
      id: "1809",
      countryId: "102",
      name: "Riau",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 0.2933469,
      longitude: 101.7068294,
      zoom: 7,
    },
    {
      id: "1817",
      countryId: "102",
      name: "Sulawesi Barat",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -2.8441371,
      longitude: 119.2320784,
      zoom: 7,
    },
    {
      id: "1795",
      countryId: "102",
      name: "Sulawesi Selatan",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -3.6687994,
      longitude: 119.9740534,
      zoom: 7,
    },
    {
      id: "1813",
      countryId: "102",
      name: "Sulawesi Tengah",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -1.4300254,
      longitude: 121.4456179,
      zoom: 7,
    },
    {
      id: "1796",
      countryId: "102",
      name: "Sulawesi Tenggara",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -4.14491,
      longitude: 122.174605,
      zoom: 7,
    },
    {
      id: "1808",
      countryId: "102",
      name: "Sulawesi Utara",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 0.6246932,
      longitude: 123.9750018,
      zoom: 7,
    },
    {
      id: "1828",
      countryId: "102",
      name: "Sumatera Barat",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -0.7399397,
      longitude: 100.8000051,
      zoom: 7,
    },
    {
      id: "1816",
      countryId: "102",
      name: "Sumatera Selatan",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: -3.3194374,
      longitude: 103.914399,
      zoom: 7,
    },
    {
      id: "1792",
      countryId: "102",
      name: "Sumatera Utara",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 2.1153547,
      longitude: 99.5450974,
      zoom: 7,
    },
    {
      id: "1950",
      countryId: "132",
      name: "Johor",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.4853682,
      longitude: 103.7618154,
      zoom: 7,
    },
    {
      id: "1947",
      countryId: "132",
      name: "Kedah",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 6.1183964,
      longitude: 100.3684595,
      zoom: 7,
    },
    {
      id: "1946",
      countryId: "132",
      name: "Kelantan",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 6.1253969,
      longitude: 102.238071,
      zoom: 7,
    },
    {
      id: "1949",
      countryId: "132",
      name: "Kuala Lumpur",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 3.139003,
      longitude: 101.686855,
      zoom: 7,
    },
    {
      id: "1935",
      countryId: "132",
      name: "Labuan",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 5.2831456,
      longitude: 115.230825,
      zoom: 7,
    },
    {
      id: "1941",
      countryId: "132",
      name: "Malacca",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 2.189594,
      longitude: 102.2500868,
      zoom: 7,
    },
    {
      id: "1948",
      countryId: "132",
      name: "Negeri Sembilan",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 2.7258058,
      longitude: 101.9423782,
      zoom: 7,
    },
    {
      id: "1940",
      countryId: "132",
      name: "Pahang",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 3.8126318,
      longitude: 103.3256204,
      zoom: 7,
    },
    {
      id: "1939",
      countryId: "132",
      name: "Penang",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 5.4163935,
      longitude: 100.3326786,
      zoom: 7,
    },
    {
      id: "1943",
      countryId: "132",
      name: "Perak",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 4.5921126,
      longitude: 101.090109,
      zoom: 7,
    },
    {
      id: "1938",
      countryId: "132",
      name: "Perlis",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 29.9227094,
      longitude: -90.1228559,
      zoom: 7,
    },
    {
      id: "1945",
      countryId: "132",
      name: "Putrajaya",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 2.926361,
      longitude: 101.696445,
      zoom: 7,
    },
    {
      id: "1936",
      countryId: "132",
      name: "Sabah",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 5.9788398,
      longitude: 116.0753199,
      zoom: 7,
    },
    {
      id: "1937",
      countryId: "132",
      name: "Sarawak",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.5532783,
      longitude: 110.3592127,
      zoom: 7,
    },
    {
      id: "1944",
      countryId: "132",
      name: "Selangor",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 3.0738379,
      longitude: 101.5183469,
      zoom: 7,
    },
    {
      id: "1942",
      countryId: "132",
      name: "Terengganu",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 5.3116916,
      longitude: 103.1324154,
      zoom: 7,
    },
    {
      id: "4651",
      countryId: "199",
      name: "Central Singapore",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.2884,
      longitude: 103.8535,
      zoom: 7,
    },
    {
      id: "4649",
      countryId: "199",
      name: "North East",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.3824,
      longitude: 103.8972,
      zoom: 7,
    },
    {
      id: "4653",
      countryId: "199",
      name: "North West",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.418,
      longitude: 103.8275,
      zoom: 7,
    },
    {
      id: "4650",
      countryId: "199",
      name: "South East",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.3571,
      longitude: 103.7004,
      zoom: 7,
    },
    {
      id: "4652",
      countryId: "199",
      name: "South West",
      imageUrl:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      latitude: 1.3571,
      longitude: 103.9451,
      zoom: 7,
    },
  ];

  await Promise.all(
    states.map(async (state) => {
      await prisma.state.upsert({
        where: { id: state.id },
        update: state,
        create: state,
      });
    })
  );
}
