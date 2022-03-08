import { main } from './ts/index'

export const starter = (contexts: Record<string, any>): void => {
  console.log('There is Mobius Server Starter.')
  console.log('Mobius Server Starter will run with contexts: ', contexts)
  void main()
}
