import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  console.info("Seed place images...");

  const images = [
    {
      placeSlug: "masjid-raya-al-jabbar",
      url: "https://plus.unsplash.com/premium_photo-1697730108370-aaf57c4f82e0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      description: "",
    },
    {
      placeSlug: "masjid-raya-al-jabbar",
      url: "https://images.unsplash.com/photo-1672893693881-489e3035c031?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      description: "",
    },
    {
      placeSlug: "masjid-raya-al-jabbar",
      url: "https://images.unsplash.com/photo-1700527828970-f54ca45bc728?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      description: "",
    },
  ];

  await prisma.placeImage.deleteMany();

  await Promise.all(
    images.map(async (imageData) => {
      const { placeSlug, ...image } = imageData;

      await prisma.placeImage.create({
        data: {
          ...image,
          place: {
            connect: {
              slug: placeSlug,
            },
          },
        },
      });
    })
  );
}
