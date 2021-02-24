import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: { file: pkg.main, format: 'cjs' },
  plugins: [
    external(),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    del({ targets: ['dist/*'] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};