import type { PrismaClient } from '@prisma/client'

const _temp = {
  prismaClient: null as unknown as PrismaClient
}

export const registerPrismaClient = (prismaClient: PrismaClient): void => {
  _temp.prismaClient = prismaClient
}
export const getPrismaClient = (): PrismaClient => {
  return _temp.prismaClient
}
