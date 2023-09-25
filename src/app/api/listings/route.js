import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb'
import { getCurrentUser } from "@/actions/getCurrentUser";