import { main } from './ts/index'
import { registerPrismaClient } from 'FreeServices/prisma'

export const starter = (contexts: Record<string, any>): void => {
  console.log('There is Mobius Server Starter.')
  console.log('Mobius Server Starter will run with contexts: ', Object.keys(contexts))
  registerPrismaClient(contexts.prismaClient)
  void main()
}
