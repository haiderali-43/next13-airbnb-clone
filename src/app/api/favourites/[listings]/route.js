import NextResponse from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { divIcon } from "leaflet";

export async function POST({ listingId }, request) {
  const currentUser = await getCurrentUser();
  return <div></div>;
}
