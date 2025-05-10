import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import nodePolyfills from 'rollup-plugin-node-polyfills'

const getPluginsForBrowser = () => [
  nodeResolve({
    preferBuiltins: true
  }),
  commonjs({
    include: '.png'
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**'
  }),
  nodePolyfills()
]

const getBrowserOutputConfig = ({
  filePath = '',
  globals,
  name = 'natdsReact'
}) => [
  {
    dir: `./dist/umd/${filePath}`,
    format: 'umd',
    globals,
    name,
    sourcemap: true
  }
]

const globals = {
  react: 'React'
}
const external = Object.keys(globals)

export default [
  {
    external,
    input: './dist/index.js',
    output: getBrowserOutputConfig({
      globals
    }),
    plugins: getPluginsForBrowser()
  }
]
