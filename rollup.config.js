import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const rollupConfig = [
  {
    file: 'lib/implausible.esm.js',
    format: 'esm',
    sourcemap: true
  },
  {
    file: 'lib/implausible.umd.js',
    format: 'umd',
    name: 'implausible',
    sourcemap: true
  }
].map(output => ({
  output,
  input: 'src/index.js',
  plugins: [
    builtins(),
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    terser()
  ]
}))

export default rollupConfig
