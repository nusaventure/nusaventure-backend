import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  const categories: Array<Prisma.CategoryCreateManyInput> = [
    {
      id: "accounting",
      name: "Accounting",
    },
    {
      id: "airport",
      name: "Airport",
    },
    {
      id: "amusementpark",
      name: "Amusement Park",
    },
    {
      id: "aquarium",
      name: "Aquarium",
    },
    {
      id: "artgallery",
      name: "Art Gallery",
    },
    {
      id: "atm",
      name: "Atm",
    },
    {
      id: "bakery",
      name: "Bakery",
    },
    {
      id: "bank",
      name: "Bank",
    },
    {
      id: "bar",
      name: "Bar",
    },
    {
      id: "beautysalon",
      name: "Beauty Salon",
    },
    {
      id: "bicyclestore",
      name: "Bicycle Store",
    },
    {
      id: "bookstore",
      name: "Book Store",
    },
    {
      id: "bowlingalley",
      name: "Bowling Alley",
    },
    {
      id: "busstation",
      name: "Bus Station",
    },
    {
      id: "cafe",
      name: "Cafe",
    },
    {
      id: "campground",
      name: "Campground",
    },
    {
      id: "cardealer",
      name: "Car Dealer",
    },
    {
      id: "carrental",
      name: "Car Rental",
    },
    {
      id: "carrepair",
      name: "Car Repair",
    },
    {
      id: "carwash",
      name: "Car Wash",
    },
    {
      id: "casino",
      name: "Casino",
    },
    {
      id: "cemetery",
      name: "Cemetery",
    },
    {
      id: "church",
      name: "Church",
    },
    {
      id: "cityhall",
      name: "City Hall",
    },
    {
      id: "clothingstore",
      name: "Clothing Store",
    },
    {
      id: "conveniencestore",
      name: "Convenience Store",
    },
    {
      id: "courthouse",
      name: "Courthouse",
    },
    {
      id: "dentist",
      name: "Dentist",
    },
    {
      id: "departmentstore",
      name: "Department Store",
    },
    {
      id: "doctor",
      name: "Doctor",
    },
    {
      id: "drugstore",
      name: "Drugstore",
    },
    {
      id: "electrician",
      name: "Electrician",
    },
    {
      id: "electronicsstore",
      name: "Electronics Store",
    },
    {
      id: "embassy",
      name: "Embassy",
    },
    {
      id: "firestation",
      name: "Fire Station",
    },
    {
      id: "florist",
      name: "Florist",
    },
    {
      id: "funeralhome",
      name: "Funeral Home",
    },
    {
      id: "furniturestore",
      name: "Furniture Store",
    },
    {
      id: "gasstation",
      name: "Gas Station",
    },
    {
      id: "gym",
      name: "Gym",
    },
    {
      id: "haircare",
      name: "Hair Care",
    },
    {
      id: "hardwarestore",
      name: "Hardware Store",
    },
    {
      id: "hindutemple",
      name: "Hindu Temple",
    },
    {
      id: "homegoodsstore",
      name: "Home Goods Store",
    },
    {
      id: "hospital",
      name: "Hospital",
    },
    {
      id: "insuranceagency",
      name: "Insurance Agency",
    },
    {
      id: "jewelrystore",
      name: "Jewelry Store",
    },
    {
      id: "laundry",
      name: "Laundry",
    },
    {
      id: "lawyer",
      name: "Lawyer",
    },
    {
      id: "library",
      name: "Library",
    },
    {
      id: "lightrailstation",
      name: "Light Rail Station",
    },
    {
      id: "liquorstore",
      name: "Liquor Store",
    },
    {
      id: "localgovernmentoffice",
      name: "Local Government Office",
    },
    {
      id: "locksmith",
      name: "Locksmith",
    },
    {
      id: "lodging",
      name: "Lodging",
    },
    {
      id: "mealdelivery",
      name: "Meal Delivery",
    },
    {
      id: "mealtakeaway",
      name: "Meal Takeaway",
    },
    {
      id: "mosque",
      name: "Mosque",
    },
    {
      id: "movierental",
      name: "Movie Rental",
    },
    {
      id: "movietheater",
      name: "Movie Theater",
    },
    {
      id: "movingcompany",
      name: "Moving Company",
    },
    {
      id: "museum",
      name: "Museum",
    },
    {
      id: "nightclub",
      name: "Night Club",
    },
    {
      id: "painter",
      name: "Painter",
    },
    {
      id: "park",
      name: "Park",
    },
    {
      id: "parking",
      name: "Parking",
    },
    {
      id: "petstore",
      name: "Pet Store",
    },
    {
      id: "pharmacy",
      name: "Pharmacy",
    },
    {
      id: "physiotherapist",
      name: "Physiotherapist",
    },
    {
      id: "plumber",
      name: "Plumber",
    },
    {
      id: "police",
      name: "Police",
    },
    {
      id: "postoffice",
      name: "Post Office",
    },
    {
      id: "primaryschool",
      name: "Primary School",
    },
    {
      id: "realestateagency",
      name: "Real Estate Agency",
    },
    {
      id: "restaurant",
      name: "Restaurant",
    },
    {
      id: "roofingcontractor",
      name: "Roofing Contractor",
    },
    {
      id: "rvpark",
      name: "Rv Park",
    },
    {
      id: "school",
      name: "School",
    },
    {
      id: "secondaryschool",
      name: "Secondary School",
    },
    {
      id: "shoestore",
      name: "Shoe Store",
    },
    {
      id: "shoppingmall",
      name: "Shopping Mall",
    },
    {
      id: "spa",
      name: "Spa",
    },
    {
      id: "stadium",
      name: "Stadium",
    },
    {
      id: "storage",
      name: "Storage",
    },
    {
      id: "store",
      name: "Store",
    },
    {
      id: "subwaystation",
      name: "Subway Station",
    },
    {
      id: "supermarket",
      name: "Supermarket",
    },
    {
      id: "synagogue",
      name: "Synagogue",
    },
    {
      id: "taxistand",
      name: "Taxi Stand",
    },
    {
      id: "touristattraction",
      name: "Tourist Attraction",
    },
    {
      id: "trainstation",
      name: "Train Station",
    },
    {
      id: "transitstation",
      name: "Transit Station",
    },
    {
      id: "travelagency",
      name: "Travel Agency",
    },
    {
      id: "university",
      name: "University",
    },
    {
      id: "veterinarycare",
      name: "Veterinary Care",
    },
    {
      id: "zoo",
      name: "Zoo",
    },
  ];

  await Promise.all(
    categories.map(async (category) => {
      await prisma.category.upsert({
        where: { id: category.id },
        update: category,
        create: category,
      });
    })
  );
}
