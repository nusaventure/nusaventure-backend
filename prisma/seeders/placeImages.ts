import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  const images: Array<Prisma.PlaceImageCreateManyInput> = [
    {
      placeSlug: "",
      url: "https://plus.unsplash.com/premium_photo-1697730108370-aaf57c4f82e0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      description: "",
    },
    {
      placeSlug: "",
      url: "https://images.unsplash.com/photo-1672893693881-489e3035c031?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      description: "",
    },
    {
      id: "3",
      placeId: "2",
      url: "https://images.unsplash.com/photo-1700527828970-f54ca45bc728?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "",
      description: "",
    },
  ];

  await Promise.all(
    images.map(async (image) => {
      await prisma.placeImage.upsert({
        where: { id: image.id },
        update: image,
        create: image,
      });
    })
  );
}
