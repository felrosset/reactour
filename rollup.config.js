import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.dependencies),
  ],
  plugins: [
    babel({
      exclude: ['node_modules/**'],
    }),
  ],
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'es', exports: 'named' },
  ],
}
