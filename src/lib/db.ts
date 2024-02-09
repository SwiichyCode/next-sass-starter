import { PrismaClient } from "@prisma/client";
import { env } from "@/env";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
