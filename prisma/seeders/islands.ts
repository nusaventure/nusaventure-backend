import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  console.info("Seed islands...");

  const islands: Array<Prisma.IslandCreateManyInput> = [
    {
      countryId: "102",
      name: "Papua",
      slug: "papua",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Jembatan_Youtefa_2.jpg",
      latitude: -5.5011831,
      longitude: 135.6045112,
      zoom: 7,
    },
    {
      countryId: "102",
      name: "Kalimantan",
      slug: "kalimantan",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Banjarmasin_floating_market%2C_2018.jpg/1280px-Banjarmasin_floating_market%2C_2018.jpg",
      latitude: 1.423257,
      longitude: 108.7552974,
      zoom: 7,
    },
    {
      countryId: "102",
      name: "Sumatera",
      slug: "sumatera",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Pagi_hari_di_Danau_Ranau.jpg/1920px-Pagi_hari_di_Danau_Ranau.jpg",
      latitude: -0.1427302,
      longitude: 95.3453979,
      zoom: 7,
    },
    {
      countryId: "102",
      name: "Sulawesi",
      slug: "sulawesi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Floating_houses_on_Lake_Tempe.jpg/1280px-Floating_houses_on_Lake_Tempe.jpg",
      latitude: -2.0213952,
      longitude: 120.0933559,
      zoom: 7,
    },
    {
      countryId: "102",
      name: "Jawa",
      slug: "jawa",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Baturraden_-_Purwokerto%2C_2015-03-23.jpg/1280px-Baturraden_-_Purwokerto%2C_2015-03-23.jpg",
      latitude: -7.3204811,
      longitude: 107.2654557,
      zoom: 8,
    },
    {
      countryId: "102",
      name: "Timor",
      slug: "timor",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Timor.A2002179.0205.500m.jpg/1280px-Timor.A2002179.0205.500m.jpg",
      latitude: -9.6247682,
      longitude: 123.8622907,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Halmahera",
      slug: "halmahera",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kantor_Bupati_Halmahera_Utara.jpg/1920px-Kantor_Bupati_Halmahera_Utara.jpg",
      latitude: 0.7191459,
      longitude: 127.5665118,
      zoom: 8,
    },
    {
      countryId: "102",
      name: "Seram",
      slug: "seram",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pearl_farm_%28Seram%2C_Indonesia%29.jpg",
      latitude: -3.5633212,
      longitude: 128.5620037,
      zoom: 8.5,
    },
    {
      countryId: "102",
      name: "Sumbawa",
      slug: "sumbawa",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Landscape_view_with_Sengeang_volcano_in_Sumbawa%2C_Indonesia%3B_January_2020.jpg/1920px-Landscape_view_with_Sengeang_volcano_in_Sumbawa%2C_Indonesia%3B_January_2020.jpg",
      latitude: -8.5942753,
      longitude: 117.2943635,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Flores",
      slug: "flores",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Padar_Island.jpg/1280px-Padar_Island.jpg",
      latitude: -8.5130992,
      longitude: 120.6411681,
      zoom: 8.75,
    },
    {
      countryId: "102",
      name: "Kolepom",
      slug: "kolepom",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tugu_Libra_969_Merauke.jpg/1920px-Tugu_Libra_969_Merauke.jpg",
      latitude: -7.813822,
      longitude: 138.0547589,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Bangka",
      slug: "bangka",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lake_Shuji_-_Muara_Enim%2C_SS_%284%29.jpg/1920px-Lake_Shuji_-_Muara_Enim%2C_SS_%284%29.jpg",
      latitude: -2.2704017,
      longitude: 105.5526031,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Sumba",
      slug: "sumba",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Wikiearth-Taman_Nasional_Kelimutu.jpg/1280px-Wikiearth-Taman_Nasional_Kelimutu.jpg",
      latitude: -9.8364167,
      longitude: 119.4446342,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Buru",
      slug: "buru",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Wisata-pantai-yanain-di-maluku-tengah.jpg",
      latitude: -3.4589616,
      longitude: 126.3023783,
      zoom: 10,
    },
    {
      countryId: "102",
      name: "Bali",
      slug: "bali",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pura_Ulun_Danu_Bratan%2C_2022.jpg/1280px-Pura_Ulun_Danu_Bratan%2C_2022.jpg",
      latitude: -8.4676699,
      longitude: 114.7115128,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Nias",
      slug: "nias",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Nias_Regent_office.png",
      latitude: 1.1036798,
      longitude: 97.3705768,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Belitung",
      slug: "belitung",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Pantai_Tanjung_Tinggi%2C_Belitung.jpg/375px-Pantai_Tanjung_Tinggi%2C_Belitung.jpg",
      latitude: -2.8993819,
      longitude: 97.3705768,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Buton",
      slug: "buton",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Reflection_of_Floating_House_of_Bajau_in_Bajau_Sampela_Village_Wakatobi.jpg/1280px-Reflection_of_Floating_House_of_Bajau_in_Bajau_Sampela_Village_Wakatobi.jpg",
      latitude: -5.0405425,
      longitude: 122.8116263,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Lombok",
      slug: "lombok",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lombok_In_Memories%2C_Senggigi.jpg/1280px-Lombok_In_Memories%2C_Senggigi.jpg",
      latitude: -8.5476683,
      longitude: 116.1053826,
      zoom: 9,
    },
    {
      countryId: "102",
      name: "Madura",
      slug: "madura",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Gua_Lebar_-_panoramio.jpg/1280px-Gua_Lebar_-_panoramio.jpg",
      latitude: -7.0581924,
      longitude: 112.7396031,
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
