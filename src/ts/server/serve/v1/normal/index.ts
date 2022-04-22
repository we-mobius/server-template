import { selectRoute } from 'MobiusServices'
import { mainClientDriverInstance } from 'FreeServices/client'

const { inputs: { response }, outputs: { currentRoute } } = mainClientDriverInstance
const routeRD = selectRoute('/v1/normal', currentRoute)

routeRD.subscribeValue(route => {
  const { record, payload } = route
  console.log(`[/v1/normal] ${record.partialUrl}`)
  if (payload !== undefined) {
    console.log(`[/v1/normal] valid request ${record.partialUrl}`)
    const { serverResponse } = payload
    serverResponse.setResponseBody('Hello World from /v1/normal handler!')
    response.mutate(() => serverResponse)
  }
})
