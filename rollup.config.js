import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    sourcemap: true,
    name: 'wikifela-module-one',
    plugins: [
      terser(),
    ],
  },
  plugins: [
    typescript(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'cloneElement',
          'createContext',
          'Component',
          'createElement',
          'isValidElement',
          'Children',
        ],
        'node_modules/react-dom/index.js': ['render', 'hydrate', 'createPortal'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef',
          'Memo',
          'isFragment'
        ],
      },
    }),
  ],
};
