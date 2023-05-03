import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import json from "@rollup/plugin-json";

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'esm',
                file: 'dist/index.mjs'
            },
            {
                format: 'cjs',
                file: 'dist/index.js'
            }
        ],
        plugins: [
            vue(), peerDepsExternal(),json()
        ],
    }
]
