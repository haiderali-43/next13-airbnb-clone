import prisma from "@/libs/prismadb";

export async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    throw new Error(error);
  }
}
