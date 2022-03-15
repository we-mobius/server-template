import { ENV } from './config'
import { serve } from './serve'
import 'FreeServices/index'

export const main = async (): Promise<void> => {
  // 启动一个 server，监听前端请求并做出响应
  void serve()
}
