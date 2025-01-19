/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

// Augment globalThis to allow custom properties like `prisma`
declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
