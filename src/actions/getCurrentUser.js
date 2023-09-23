import { getServerSession } from "next-auth/next";
import prisma from "@/libs/prismadb";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const seesion = await getSession();
    if (!seesion?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: seesion.user.email,
      },
    });
    if (!currentUser) {
      return null;
    }
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified : currentUser.emailVerified?.toISOString() || null
    };
  } catch (error) {
    return null;
  }
}
