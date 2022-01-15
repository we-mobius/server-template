import('./_index.cjs').then(pkg => {
  const { starter } = pkg.default.MobiusServer
  console.log(`Starting Mobius Server: ${process.env.PROJECT_NAME}...`)
  starter({})
})
