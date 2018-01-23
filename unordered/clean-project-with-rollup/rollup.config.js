import resolveNodeModules from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'tsc_out/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    plugins: [
        //commonjs(),
        resolveNodeModules({
            module: true,
            jsnext: true,
        }),
        uglify()
    ],
};
