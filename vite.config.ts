import type { UserConfigExport, ConfigEnv } from 'vite'
import { loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr'
import { getAliases } from "vite-aliases";
// import styleImport from 'vite-plugin-style-import';

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import viteCompression from "vite-plugin-compression";
// import checker from "vite-plugin-checker";
// import importToCDN from "vite-plugin-cdn-import";

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

const aliases = getAliases();

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default ({ command } : { command: string}) => {
  console.log('command:',)
  return {
    resolve: {
      // alias: aliases,
      alias: [
        {
          // /@/xxxx  =>  src/xxx
          find: /^~/,
          replacement: pathResolve('node_modules') + '/',
        },
        {
          // /@/xxxx  =>  src/xxx
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    optimizeDeps: {
      exclude: [], // 将指定数组中的依赖不进行依赖预构建
      include: [
        // '@ant-design/colors',
        // '@ant-design/icons',
      ],
    },
    // envPrefix: "ENV_", // 配置vite注入客户端环境变量校验的env前缀
    // vite天生就支持对css文件的直接处理
    css: {
      // 对css的行为进行配置
      // modules配置最终会丢给postcss modules
      modules: {
        // 是对css模块化的默认行为进行覆盖
        localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
        scopeBehaviour: "local", // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
        // generateScopedName: "[name]_[local]_[hash:5]" // https://github.com/webpack/loader-utils#interpolatename
        // generateScopedName: (name, filename, css) => {
        //     // name -> 代表的是你此刻css文件中的类名
        //     // filename -> 是你当前css文件的绝对路径
        //     // css -> 给的就是你当前样式
        //     console.log("name", name, "filename", filename, "css", css); // 这一行会输出在哪？？？ 输出在node
        //     // 配置成函数以后, 返回值就决定了他最终显示的类型
        //     return `${name}_${Math.random().toString(36).substr(3, 8) }`;
        // }
        // hashPrefix: "hello", // 生成hash会根据你的类名 + 一些其他的字符串(文件名 + 他内部随机生成一个字符串)去进行生成, 如果你想要你生成hash更加的独特一点, 你可以配置hashPrefix, 你配置的这个字符串会参与到最终的hash生成, （hash: 只要你的字符串有一个字不一样, 那么生成的hash就完全不一样, 但是只要你的字符串完全一样, 生成的hash就会一样）
        // globalModulePaths: ["./componentB.module.css"], // 代表你不想参与到css模块化的路径
      },
      preprocessorOptions: {
        // key + config key代表预处理器的名
        less: {
          // 整个的配置对象都会最终给到less的执行参数（全局参数）中去
          // 在webpack里就给less-loader去配置就好了
          math: "always",
          globalVars: {
            // 全局变量
            mainColor: "red",
          },
          javascriptEnabled: true,
          modifyVars: {
            "@primary-color": "#1890ff",
          },
          additionalData: '@import "./src/assets/style/index.less";',
        },
      },
      devSourcemap: true, // 开启css的Sourcemap（文件索引）
    },
    build: {
      rollupOptions: {
        // 配置rollup的一些构建策略
        output: {
          // 控制输出
          // 在rollup里面, hash代表将你的文件名和文件内容进行组合计算得来的结果
          assetFileNames: "[hash].[name].[ext]",
          manualChunks: (id: any) => {
            // 优化：分包
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
      assetsInlineLimit: 4096000, // 4000kb 小于转为base64,大于转为文件
      outDir: "dist",
      assetsDir: "static",
    },
    // server: {
    //   // 开发服务器配置
    //   proxy: {
    //     // 配置跨域
    //     "/api": {
    //       target: "http://127.0.0.1:7770",
    //       changeOrigin: true,
    //       rewrite: (path: any) => path.replace(/^\/api/, ""),
    //     },
    //   },
    // },
    plugins: [
      reactRefresh(),
      svgr(),
      viteMockServe({
        mockPath: 'mock',
        supportTs: true,
        watchFiles: true,
        localEnabled: command === 'serve',
        logger: true,
      }),
      // styleImport({
      //   libs: [
      //     {
      //       libraryName: 'antd',
      //       esModule: true,
      //       resolveStyle: (name) => {
      //         return `antd/es/${name}/style/index`;
      //       },
      //     },
      //   ],
      // }),
    ],
  }
}




