import { rootResolvePath } from '../scripts/utils.js'
import { getMobiusConfig } from './mobius.config.js'
import { getProductionLoaders } from './loaders.config.js'
import { getProductionPlugins } from './plugins.config.js'

import TerserPlugin from 'terser-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import path from 'path'

const PATHS = {
  src: rootResolvePath('src'),
  output: rootResolvePath('dist')
}

const reusedConfigs = {
  mode: 'production',
  module: {
    rules: [
      {
        oneOf: [...getProductionLoaders()]
      }
    ]
  },
  plugins: [
    ...getProductionPlugins(),
    // CopyPlugin configurations: https://github.com/webpack-contrib/copy-webpack-plugin
    new CopyPlugin({
      patterns: [
        {
          from: './src/statics/favicons/',
          // to 可以写相对 webpack.config.output.path 的路径，比如 './statics/favicons/'
          // 但 CopyPlugin 插件的文档中没有明确说明 to 最终路径的计算规则
          // 所以我个人推荐手动计算绝对路径，如下
          to: path.resolve(PATHS.output, './statics/favicons/'),
          toType: 'dir'
        },
        {
          from: './src/statics/fonts/',
          to: path.resolve(PATHS.output, './statics/fonts/'),
          toType: 'dir'
        },
        {
          from: './src/statics/images/',
          to: path.resolve(PATHS.output, './statics/images/'),
          toType: 'dir'
        },
        {
          from: './src/statics/styles/',
          to: path.resolve(PATHS.output, './statics/styles/'),
          toType: 'dir'
        }
      ]
    })
  ],
  optimization: {
    minimize: false,
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          sourceMap: true,
          compress: {
            drop_debugger: true,
            drop_console: false
          },
          format: {
            comments: false
          }
        }
      })
    ]
  },
  devtool: 'source-map'
  // devtool: 'hidden-nosources-source-map'
}

const webConfig = { ...reusedConfigs }
const serverConfig = { ...reusedConfigs }
serverConfig.plugins = [serverConfig.plugins[0], ...serverConfig.plugins.slice(3)]

export const getProductionConfig = () => ([
  // {
  //   target: 'web',
  //   // node: {
  //   //   global: true
  //   // },
  //   entry: {
  //     // NOTE: entry sort matters style cascading
  //     static: './src/static.ts',
  //     index: './src/index.ts'
  //   },
  //   ...webConfig
  // },
  {
    target: 'node',
    entry: {
      main: './src/main.ts'
    },
    output: {
      filename: '[name].cjs',
      // @refer: https://webpack.js.org/configuration/output/#outputlibrarytarget
      // @refer: https://webpack.js.org/configuration/output/#outputlibrarytype
      // libraryTarget: 'umd',
      library: {
        name: 'MobiusServer',
        type: 'commonjs2'
      },
      path: PATHS.output
    },
    ...serverConfig
  }
])
