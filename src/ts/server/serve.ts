import { mainClientDriverInstance } from 'FreeServices/client'

const { inputs: { start } } = mainClientDriverInstance
export const serve = async (): Promise<void> => {
  // 服务启动，手动启动 HTTP Server
  start.mutate(() => true)
}
