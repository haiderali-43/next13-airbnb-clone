import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  // Issue 1: Error Handling in Property Validation
  // Check if any required properties are falsy and return an error response.
  const requiredProperties = [
    "title",
    "description",
    "imageSrc",
    "category",
    "roomCount",
    "bathroomCount",
    "guestCount",
    "location",
    "price",
  ];

  for (const prop of requiredProperties) {
    if (!body[prop]) {
      return NextResponse.error({
        status: 400,
        body: "Missing required properties.",
      });
    }
  }

  // Issue 2: Data Validation
  // You should validate and sanitize data from the request before using it in the database query.
  // You can add validation logic here as needed.

  try {
    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        locationValue: location.value,
        price: parseInt(price, 10),
        userId: currentUser.id,
      },
    });

    // Issue 3: Success Response
    // If the listing was successfully created, return a success response.
    return NextResponse.json(listing);
  } catch (error) {
    // Issue 4: Error Handling in Database Operation
    // Handle database operation errors and return an error response.
    console.error("Error creating listing:", error);
    return NextResponse.error({ status: 500, body: "Internal server error." });
  }
}
