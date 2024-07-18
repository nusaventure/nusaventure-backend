import { Prisma, PrismaClient } from "@prisma/client";

export default async function run(prisma: PrismaClient) {
  const categories: Array<Prisma.CategoryCreateManyInput> = [
    {
      slug: "beach",
      name: "Beach",
      isFeatured: true,
      position: 1,
    },
    {
      slug: "beach",
      name: "Beach",
      isFeatured: true,
      position: 2,
    },
    {
      slug: "culinary",
      name: "Culinary",
      isFeatured: true,
      position: 3,
    },
    {
      slug: "historicalsites",
      name: "Historical Sites",
      isFeatured: true,
      position: null,
    },
    {
      slug: "accounting",
      name: "Accounting",
      isFeatured: false,
      position: null,
    },
    {
      slug: "airport",
      name: "Airport",
      isFeatured: false,
      position: null,
    },
    {
      slug: "amusementpark",
      name: "Amusement Park",
      isFeatured: true,
      position: null,
    },
    {
      slug: "aquarium",
      name: "Aquarium",
      isFeatured: false,
      position: null,
    },
    {
      slug: "artgallery",
      name: "Art Gallery",
      isFeatured: true,
      position: null,
    },
    {
      slug: "atm",
      name: "Atm",
      isFeatured: false,
      position: null,
    },
    {
      slug: "mountain",
      name: "Mountain",
      isFeatured: true,
      position: null,
    },
    {
      slug: "bakery",
      name: "Bakery",
      isFeatured: false,
      position: null,
    },
    {
      slug: "bank",
      name: "Bank",
      isFeatured: false,
      position: null,
    },
    {
      slug: "bar",
      name: "Bar",
      isFeatured: false,
      position: null,
    },
    {
      slug: "beautysalon",
      name: "Beauty Salon",
      isFeatured: false,
      position: null,
    },
    {
      slug: "bicyclestore",
      name: "Bicycle Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "bookstore",
      name: "Book Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "bowlingalley",
      name: "Bowling Alley",
      isFeatured: false,
      position: null,
    },
    {
      slug: "busstation",
      name: "Bus Station",
      isFeatured: false,
      position: null,
    },
    {
      slug: "cafe",
      name: "Cafe",
      isFeatured: false,
      position: null,
    },
    {
      slug: "campground",
      name: "Campground",
      isFeatured: true,
      position: null,
    },
    {
      slug: "cardealer",
      name: "Car Dealer",
      isFeatured: false,
      position: null,
    },
    {
      slug: "carrental",
      name: "Car Rental",
      isFeatured: false,
      position: null,
    },
    {
      slug: "carrepair",
      name: "Car Repair",
      isFeatured: false,
      position: null,
    },
    {
      slug: "carwash",
      name: "Car Wash",
      isFeatured: false,
      position: null,
    },
    {
      slug: "casino",
      name: "Casino",
      isFeatured: false,
      position: null,
    },
    {
      slug: "cemetery",
      name: "Cemetery",
      isFeatured: false,
      position: null,
    },
    {
      slug: "church",
      name: "Church",
      isFeatured: false,
      position: null,
    },
    {
      slug: "cityhall",
      name: "City Hall",
      isFeatured: false,
      position: null,
    },
    {
      slug: "clothingstore",
      name: "Clothing Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "conveniencestore",
      name: "Convenience Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "courthouse",
      name: "Courthouse",
      isFeatured: false,
      position: null,
    },
    {
      slug: "dentist",
      name: "Dentist",
      isFeatured: false,
      position: null,
    },
    {
      slug: "departmentstore",
      name: "Department Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "doctor",
      name: "Doctor",
      isFeatured: false,
      position: null,
    },
    {
      slug: "drugstore",
      name: "Drugstore",
      isFeatured: false,
      position: null,
    },
    {
      slug: "electrician",
      name: "Electrician",
      isFeatured: false,
      position: null,
    },
    {
      slug: "electronicsstore",
      name: "Electronics Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "embassy",
      name: "Embassy",
      isFeatured: false,
      position: null,
    },
    {
      slug: "firestation",
      name: "Fire Station",
      isFeatured: false,
      position: null,
    },
    {
      slug: "florist",
      name: "Florist",
      isFeatured: false,
      position: null,
    },
    {
      slug: "funeralhome",
      name: "Funeral Home",
      isFeatured: false,
      position: null,
    },
    {
      slug: "furniturestore",
      name: "Furniture Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "gasstation",
      name: "Gas Station",
      isFeatured: false,
      position: null,
    },
    {
      slug: "gym",
      name: "Gym",
      isFeatured: false,
      position: null,
    },
    {
      slug: "haircare",
      name: "Hair Care",
      isFeatured: false,
      position: null,
    },
    {
      slug: "hardwarestore",
      name: "Hardware Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "hindutemple",
      name: "Hindu Temple",
      isFeatured: false,
      position: null,
    },
    {
      slug: "homegoodsstore",
      name: "Home Goods Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "hospital",
      name: "Hospital",
      isFeatured: false,
      position: null,
    },
    {
      slug: "insuranceagency",
      name: "Insurance Agency",
      isFeatured: false,
      position: null,
    },
    {
      slug: "jewelrystore",
      name: "Jewelry Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "laundry",
      name: "Laundry",
      isFeatured: false,
      position: null,
    },
    {
      slug: "lawyer",
      name: "Lawyer",
      isFeatured: false,
      position: null,
    },
    {
      slug: "library",
      name: "Library",
      isFeatured: false,
      position: null,
    },
    {
      slug: "lightrailstation",
      name: "Light Rail Station",
      isFeatured: false,
      position: null,
    },
    {
      slug: "liquorstore",
      name: "Liquor Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "localgovernmentoffice",
      name: "Local Government Office",
      isFeatured: false,
      position: null,
    },
    {
      slug: "locksmith",
      name: "Locksmith",
      isFeatured: false,
      position: null,
    },
    {
      slug: "lodging",
      name: "Lodging",
      isFeatured: false,
      position: null,
    },
    {
      slug: "mealdelivery",
      name: "Meal Delivery",
      isFeatured: false,
      position: null,
    },
    {
      slug: "mealtakeaway",
      name: "Meal Takeaway",
      isFeatured: false,
      position: null,
    },
    {
      slug: "monument",
      name: "Monument",
      isFeatured: false,
      position: null,
    },
    {
      slug: "mosque",
      name: "Mosque",
      isFeatured: false,
      position: null,
    },
    {
      slug: "movierental",
      name: "Movie Rental",
      isFeatured: false,
      position: null,
    },
    {
      slug: "movietheater",
      name: "Movie Theater",
      isFeatured: false,
      position: null,
    },
    {
      slug: "movingcompany",
      name: "Moving Company",
      isFeatured: false,
      position: null,
    },
    {
      slug: "museum",
      name: "Museum",
      isFeatured: true,
      position: null,
    },
    {
      slug: "tample",
      name: "Tample",
      isFeatured: true,
      position: null,
    },
    {
      slug: "nightclub",
      name: "Night Club",
      isFeatured: false,
      position: null,
    },
    {
      slug: "painter",
      name: "Painter",
      isFeatured: false,
      position: null,
    },
    {
      slug: "park",
      name: "Park",
      isFeatured: false,
      position: null,
    },
    {
      slug: "parking",
      name: "Parking",
      isFeatured: false,
      position: null,
    },
    {
      slug: "petstore",
      name: "Pet Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "pharmacy",
      name: "Pharmacy",
      isFeatured: false,
      position: null,
    },
    {
      slug: "physiotherapist",
      name: "Physiotherapist",
      isFeatured: false,
      position: null,
    },
    {
      slug: "plumber",
      name: "Plumber",
      isFeatured: false,
      position: null,
    },
    {
      slug: "police",
      name: "Police",
      isFeatured: false,
      position: null,
    },
    {
      slug: "postoffice",
      name: "Post Office",
      isFeatured: false,
      position: null,
    },
    {
      slug: "primaryschool",
      name: "Primary School",
      isFeatured: false,
      position: null,
    },
    {
      slug: "realestateagency",
      name: "Real Estate Agency",
      isFeatured: false,
      position: null,
    },
    {
      slug: "restaurant",
      name: "Restaurant",
      isFeatured: false,
      position: null,
    },
    {
      slug: "roofingcontractor",
      name: "Roofing Contractor",
      isFeatured: false,
      position: null,
    },
    {
      slug: "rvpark",
      name: "Rv Park",
      isFeatured: false,
      position: null,
    },
    {
      slug: "school",
      name: "School",
      isFeatured: false,
      position: null,
    },
    {
      slug: "secondaryschool",
      name: "Secondary School",
      isFeatured: false,
      position: null,
    },
    {
      slug: "shoestore",
      name: "Shoe Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "shoppingmall",
      name: "Shopping Mall",
      isFeatured: false,
      position: null,
    },
    {
      slug: "spa",
      name: "Spa",
      isFeatured: false,
      position: null,
    },
    {
      slug: "stadium",
      name: "Stadium",
      isFeatured: false,
      position: null,
    },
    {
      slug: "storage",
      name: "Storage",
      isFeatured: false,
      position: null,
    },
    {
      slug: "store",
      name: "Store",
      isFeatured: false,
      position: null,
    },
    {
      slug: "subwaystation",
      name: "Subway Station",
      isFeatured: false,
      position: null,
    },
    {
      slug: "supermarket",
      name: "Supermarket",
      isFeatured: false,
      position: null,
    },
    {
      slug: "synagogue",
      name: "Synagogue",
      isFeatured: false,
      position: null,
    },
    {
      slug: "taxistand",
      name: "Taxi Stand",
      isFeatured: false,
      position: null,
    },
    {
      slug: "touristattraction",
      name: "Tourist Attraction",
      isFeatured: false,
      position: null,
    },
    {
      slug: "trainstation",
      name: "Train Station",
      isFeatured: false,
      position: null,
    },
    {
      slug: "transitstation",
      name: "Transit Station",
      isFeatured: false,
      position: null,
    },
    {
      slug: "travelagency",
      name: "Travel Agency",
      isFeatured: false,
      position: null,
    },
    {
      slug: "university",
      name: "University",
      isFeatured: false,
      position: null,
    },
    {
      slug: "veterinarycare",
      name: "Veterinary Care",
      isFeatured: false,
      position: null,
    },
    {
      slug: "zoo",
      name: "Zoo",
      isFeatured: false,
      position: null,
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
