import prisma from "../libs/prismadb";

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeListing = listings.map((listing)=>({
      ...listing,
      createdAt: listing.createdAt.toISOString()
    }))
  } catch (error) {
    throw new Error(error)
  }
}