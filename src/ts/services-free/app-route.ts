import { ScopeManager } from 'MobiusUtils'
import { makeAppRouteDriver } from 'MobiusServices'

const appRouteDriverScopeManager = ScopeManager.of(makeAppRouteDriver)
export const appRouteDriverInstance = appRouteDriverScopeManager.scope('app')
