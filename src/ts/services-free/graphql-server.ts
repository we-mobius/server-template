import { binaryTweenPipeAtom } from 'MobiusUtils'
import { selectRoute } from 'MobiusServices'
import { useGraphQLServerDriver } from 'MobiusServer'
import { mainClientDriverInstance } from './client'

const graphqlServerDriverInstance = useGraphQLServerDriver({}, {})
const { inputs: { route }, outputs: { response: graphqlResponse } } = graphqlServerDriverInstance
const { inputs: { response }, outputs: { currentRoute } } = mainClientDriverInstance
const graphqlRoute = selectRoute('/v1/graphql', currentRoute)
binaryTweenPipeAtom(graphqlRoute, route)
binaryTweenPipeAtom(graphqlResponse, response)
