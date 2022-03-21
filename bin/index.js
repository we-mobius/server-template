import pkg from '@prisma/client'
const { PrismaClient } = pkg

import('./_index.cjs').then(pkg => {
  const { starter } = pkg.default.MobiusServer
  console.log(`Starting Mobius Server: ${process.env.PROJECT_NAME}...`)
  const prismaClient = new PrismaClient()
  starter({ prismaClient })
})
