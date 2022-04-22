import { ScopeManager } from 'MobiusUtils'
import { makeClientDriver } from 'MobiusServer'

import { appRouteDriverInstance } from './app-route'

export const clientDriverScopeManager = ScopeManager.of(makeClientDriver)
export const mainClientDriverInstance = clientDriverScopeManager.scope('main', {
  port: 3001,
  isAutoStart: false,
  appRouteDriver: appRouteDriverInstance
})
export const clientUsedAppRouteDriverInstance = appRouteDriverInstance
