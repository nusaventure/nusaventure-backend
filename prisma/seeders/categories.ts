import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  const categories: Array<Prisma.CategoryCreateManyInput> = [
    {
      slug: "accounting",
      name: "Accounting",
    },
    {
      slug: "airport",
      name: "Airport",
    },
    {
      slug: "amusementpark",
      name: "Amusement Park",
    },
    {
      slug: "aquarium",
      name: "Aquarium",
    },
    {
      slug: "artgallery",
      name: "Art Gallery",
    },
    {
      slug: "atm",
      name: "Atm",
    },
    {
      slug: "bakery",
      name: "Bakery",
    },
    {
      slug: "bank",
      name: "Bank",
    },
    {
      slug: "bar",
      name: "Bar",
    },
    {
      slug: "beautysalon",
      name: "Beauty Salon",
    },
    {
      slug: "bicyclestore",
      name: "Bicycle Store",
    },
    {
      slug: "bookstore",
      name: "Book Store",
    },
    {
      slug: "bowlingalley",
      name: "Bowling Alley",
    },
    {
      slug: "busstation",
      name: "Bus Station",
    },
    {
      slug: "cafe",
      name: "Cafe",
    },
    {
      slug: "campground",
      name: "Campground",
    },
    {
      slug: "cardealer",
      name: "Car Dealer",
    },
    {
      slug: "carrental",
      name: "Car Rental",
    },
    {
      slug: "carrepair",
      name: "Car Repair",
    },
    {
      slug: "carwash",
      name: "Car Wash",
    },
    {
      slug: "casino",
      name: "Casino",
    },
    {
      slug: "cemetery",
      name: "Cemetery",
    },
    {
      slug: "church",
      name: "Church",
    },
    {
      slug: "cityhall",
      name: "City Hall",
    },
    {
      slug: "clothingstore",
      name: "Clothing Store",
    },
    {
      slug: "conveniencestore",
      name: "Convenience Store",
    },
    {
      slug: "courthouse",
      name: "Courthouse",
    },
    {
      slug: "dentist",
      name: "Dentist",
    },
    {
      slug: "departmentstore",
      name: "Department Store",
    },
    {
      slug: "doctor",
      name: "Doctor",
    },
    {
      slug: "drugstore",
      name: "Drugstore",
    },
    {
      slug: "electrician",
      name: "Electrician",
    },
    {
      slug: "electronicsstore",
      name: "Electronics Store",
    },
    {
      slug: "embassy",
      name: "Embassy",
    },
    {
      slug: "firestation",
      name: "Fire Station",
    },
    {
      slug: "florist",
      name: "Florist",
    },
    {
      slug: "funeralhome",
      name: "Funeral Home",
    },
    {
      slug: "furniturestore",
      name: "Furniture Store",
    },
    {
      slug: "gasstation",
      name: "Gas Station",
    },
    {
      slug: "gym",
      name: "Gym",
    },
    {
      slug: "haircare",
      name: "Hair Care",
    },
    {
      slug: "hardwarestore",
      name: "Hardware Store",
    },
    {
      slug: "hindutemple",
      name: "Hindu Temple",
    },
    {
      slug: "homegoodsstore",
      name: "Home Goods Store",
    },
    {
      slug: "hospital",
      name: "Hospital",
    },
    {
      slug: "insuranceagency",
      name: "Insurance Agency",
    },
    {
      slug: "jewelrystore",
      name: "Jewelry Store",
    },
    {
      slug: "laundry",
      name: "Laundry",
    },
    {
      slug: "lawyer",
      name: "Lawyer",
    },
    {
      slug: "library",
      name: "Library",
    },
    {
      slug: "lightrailstation",
      name: "Light Rail Station",
    },
    {
      slug: "liquorstore",
      name: "Liquor Store",
    },
    {
      slug: "localgovernmentoffice",
      name: "Local Government Office",
    },
    {
      slug: "locksmith",
      name: "Locksmith",
    },
    {
      slug: "lodging",
      name: "Lodging",
    },
    {
      slug: "mealdelivery",
      name: "Meal Delivery",
    },
    {
      slug: "mealtakeaway",
      name: "Meal Takeaway",
    },
    {
      slug: "mosque",
      name: "Mosque",
    },
    {
      slug: "movierental",
      name: "Movie Rental",
    },
    {
      slug: "movietheater",
      name: "Movie Theater",
    },
    {
      slug: "movingcompany",
      name: "Moving Company",
    },
    {
      slug: "museum",
      name: "Museum",
    },
    {
      slug: "nightclub",
      name: "Night Club",
    },
    {
      slug: "painter",
      name: "Painter",
    },
    {
      slug: "park",
      name: "Park",
    },
    {
      slug: "parking",
      name: "Parking",
    },
    {
      slug: "petstore",
      name: "Pet Store",
    },
    {
      slug: "pharmacy",
      name: "Pharmacy",
    },
    {
      slug: "physiotherapist",
      name: "Physiotherapist",
    },
    {
      slug: "plumber",
      name: "Plumber",
    },
    {
      slug: "police",
      name: "Police",
    },
    {
      slug: "postoffice",
      name: "Post Office",
    },
    {
      slug: "primaryschool",
      name: "Primary School",
    },
    {
      slug: "realestateagency",
      name: "Real Estate Agency",
    },
    {
      slug: "restaurant",
      name: "Restaurant",
    },
    {
      slug: "roofingcontractor",
      name: "Roofing Contractor",
    },
    {
      slug: "rvpark",
      name: "Rv Park",
    },
    {
      slug: "school",
      name: "School",
    },
    {
      slug: "secondaryschool",
      name: "Secondary School",
    },
    {
      slug: "shoestore",
      name: "Shoe Store",
    },
    {
      slug: "shoppingmall",
      name: "Shopping Mall",
    },
    {
      slug: "spa",
      name: "Spa",
    },
    {
      slug: "stadium",
      name: "Stadium",
    },
    {
      slug: "storage",
      name: "Storage",
    },
    {
      slug: "store",
      name: "Store",
    },
    {
      slug: "subwaystation",
      name: "Subway Station",
    },
    {
      slug: "supermarket",
      name: "Supermarket",
    },
    {
      slug: "synagogue",
      name: "Synagogue",
    },
    {
      slug: "taxistand",
      name: "Taxi Stand",
    },
    {
      slug: "touristattraction",
      name: "Tourist Attraction",
    },
    {
      slug: "trainstation",
      name: "Train Station",
    },
    {
      slug: "transitstation",
      name: "Transit Station",
    },
    {
      slug: "travelagency",
      name: "Travel Agency",
    },
    {
      slug: "university",
      name: "University",
    },
    {
      slug: "veterinarycare",
      name: "Veterinary Care",
    },
    {
      slug: "zoo",
      name: "Zoo",
    },
  ];

  await Promise.all(
    categories.map(async (category) => {
      await prisma.category.upsert({
        where: { slug: category.slug },
        update: category,
        create: category,
      });
    })
  );
}
