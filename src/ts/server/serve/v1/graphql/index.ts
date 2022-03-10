import { replayWithLatest } from 'MobiusUtils'
import { mainClientDriverInstance, clientUsedAppRouteDriverInstance } from 'FreeServices/client'

const { inputs: { response }, outputs: { currentRoute } } = mainClientDriverInstance
const { contexts: { routeProcessT } } = clientUsedAppRouteDriverInstance

const sceneRD = replayWithLatest(1, routeProcessT({ presets: { pathMatches: '/v1/graphql' } }, currentRoute))

sceneRD.subscribeValue(v => {
  console.log(v)
})
