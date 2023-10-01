
import prisma from "../libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export async function getfavoriteListing() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const favorite = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safefavoites = favorite.map((favorites) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
    }));

    return safefavoites;
  } catch (error) {
    throw new Error(error);
  }
}
