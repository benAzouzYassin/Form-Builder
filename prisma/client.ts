import { PrismaClient } from "prisma/prisma-client"

console.log("new prisma client !!")
export const prisma = new PrismaClient()