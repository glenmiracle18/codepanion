import { PrismaClient } from '@prisma/client'

// Prevent multiple instances of Prisma Client in development
declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = 
  global.prisma || 
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  })

// Prevent multiple instances in development environment
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}