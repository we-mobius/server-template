import { Biutor, createNodeFetchRequestEngine } from 'MobiusUtils'
// import { fetch } from 'undici'
import fetch from 'node-fetch'

Biutor.registerGlobalEngine(createNodeFetchRequestEngine(fetch))
