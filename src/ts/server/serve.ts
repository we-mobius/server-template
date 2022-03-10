import { mainClientDriverInstance } from 'FreeServices/client'
import './serve/index'

const { inputs: { start } } = mainClientDriverInstance
export const serve = async (): Promise<void> => {
  // 服务启动，手动启动 HTTP Server
  start.mutate(() => true)
}
