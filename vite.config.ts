import { defineConfig } from 'vite'
import viteDevConfig from './vite.config.dev.js'
import viteProdConfig from './vite.config.prod.js'
import viteBaseConfig from './vite.config.base.js'

type command = "build" | "serve"
const envResolve = {
  serve: (command: command)=> ({ ...viteBaseConfig(command), ...viteDevConfig }),
  build: (command: command)=> ({ ...viteBaseConfig(command), ...viteProdConfig })
 }

// defineConfig 类型提示

// 不使用defineConfig
/** @type import('vite').UserConfig */
// export default { 
// 将指定数组中的依赖不进行依赖预构建
// }

// 使用defineConfig
// https://vitejs.dev/config/

// 默认写法
// export default defineConfig({
//   plugins: [react()],
// })

// 配置文件需要基于（dev/serve 或 build）命令或者不同的 模式 来决定选项
export default defineConfig(({ command, mode, ssrBuild }) => {
  // command === 'serve' dev 独有配置
  // command === 'build' build 独有配置
  return envResolve[command](command)
})


