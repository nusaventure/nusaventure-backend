import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  const islands: Array<Prisma.IslandCreateManyInput> = [
    {
      id: "1",
      countryId: "102",
      name: "Papua",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Jembatan_Youtefa_2.jpg",
      latitude: -5.5011831,
      longitude: 135.6045112,
      zoom: 7,
    },
    {
      id: "2",
      countryId: "102",
      name: "Kalimantan",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Banjarmasin_floating_market%2C_2018.jpg/1280px-Banjarmasin_floating_market%2C_2018.jpg",
      latitude: 1.423257,
      longitude: 108.7552974,
      zoom: 7,
    },
    {
      id: "3",
      countryId: "102",
      name: "Sumatera",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Pagi_hari_di_Danau_Ranau.jpg/1920px-Pagi_hari_di_Danau_Ranau.jpg",
      latitude: -0.1427302,
      longitude: 95.3453979,
      zoom: 7,
    },
    {
      id: "4",
      countryId: "102",
      name: "Sulawesi",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Floating_houses_on_Lake_Tempe.jpg/1280px-Floating_houses_on_Lake_Tempe.jpg",
      latitude: -2.0213952,
      longitude: 120.0933559,
      zoom: 7,
    },
    {
      id: "5",
      countryId: "102",
      name: "Jawa",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Baturraden_-_Purwokerto%2C_2015-03-23.jpg/1280px-Baturraden_-_Purwokerto%2C_2015-03-23.jpg",
      latitude: -7.3204811,
      longitude: 107.2654557,
      zoom: 8,
    },
    {
      id: "6",
      countryId: "102",
      name: "Timor",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Timor.A2002179.0205.500m.jpg/1280px-Timor.A2002179.0205.500m.jpg",
      latitude: -9.6247682,
      longitude: 123.8622907,
      zoom: 9,
    },
    {
      id: "7",
      countryId: "102",
      name: "Halmahera",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kantor_Bupati_Halmahera_Utara.jpg/1920px-Kantor_Bupati_Halmahera_Utara.jpg",
      latitude: 0.7191459,
      longitude: 127.5665118,
      zoom: 8,
    },
    {
      id: "8",
      countryId: "102",
      name: "Seram",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Pearl_farm_%28Seram%2C_Indonesia%29.jpg",
      latitude: -3.5633212,
      longitude: 128.5620037,
      zoom: 8.5,
    },
    {
      id: "9",
      countryId: "102",
      name: "Sumbawa",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Landscape_view_with_Sengeang_volcano_in_Sumbawa%2C_Indonesia%3B_January_2020.jpg/1920px-Landscape_view_with_Sengeang_volcano_in_Sumbawa%2C_Indonesia%3B_January_2020.jpg",
      latitude: -8.5942753,
      longitude: 117.2943635,
      zoom: 9,
    },
    {
      id: "10",
      countryId: "102",
      name: "Flores",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Padar_Island.jpg/1280px-Padar_Island.jpg",
      latitude: -8.5130992,
      longitude: 120.6411681,
      zoom: 8.75,
    },
    {
      id: "11",
      countryId: "102",
      name: "Kolepom",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tugu_Libra_969_Merauke.jpg/1920px-Tugu_Libra_969_Merauke.jpg",
      latitude: -7.813822,
      longitude: 138.0547589,
      zoom: 9,
    },
    {
      id: "12",
      countryId: "102",
      name: "Bangka",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lake_Shuji_-_Muara_Enim%2C_SS_%284%29.jpg/1920px-Lake_Shuji_-_Muara_Enim%2C_SS_%284%29.jpg",
      latitude: -2.2704017,
      longitude: 105.5526031,
      zoom: 9,
    },
    {
      id: "13",
      countryId: "102",
      name: "Sumba",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Wikiearth-Taman_Nasional_Kelimutu.jpg/1280px-Wikiearth-Taman_Nasional_Kelimutu.jpg",
      latitude: -9.8364167,
      longitude: 119.4446342,
      zoom: 9,
    },
    {
      id: "14",
      countryId: "102",
      name: "Buru",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Wisata-pantai-yanain-di-maluku-tengah.jpg",
      latitude: -3.4589616,
      longitude: 126.3023783,
      zoom: 10,
    },
    {
      id: "15",
      countryId: "102",
      name: "Bali",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pura_Ulun_Danu_Bratan%2C_2022.jpg/1280px-Pura_Ulun_Danu_Bratan%2C_2022.jpg",
      latitude: -8.4676699,
      longitude: 114.7115128,
      zoom: 9,
    },
    {
      id: "16",
      countryId: "102",
      name: "Nias",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/20/Nias_Regent_office.png",
      latitude: 1.1036798,
      longitude: 97.3705768,
      zoom: 9,
    },
    {
      id: "17",
      countryId: "102",
      name: "Belitung",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Pantai_Tanjung_Tinggi%2C_Belitung.jpg/375px-Pantai_Tanjung_Tinggi%2C_Belitung.jpg",
      latitude: -2.8993819,
      longitude: 97.3705768,
      zoom: 9,
    },
  ];

  await Promise.all(
    islands.map(async (island) => {
      await prisma.island.upsert({
        where: { id: island.id },
        update: island,
        create: island,
      });
    })
  );
}
