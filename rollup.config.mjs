import {
  getBabelInputPlugin,
  getBabelOutputPlugin,
} from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-import-css";
import svg from "./plugins/svg.js";

const plugins = [
  css(),
  svg(),
  typescript({
    exclude: ["node_modules/**", "*.svg"],
    declaration: false,
  }),
  nodeResolve(),
  json(),
  commonjs(),
  getBabelInputPlugin({
    babelHelpers: "bundled",
  }),
  getBabelOutputPlugin({
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
        },
      ],
    ],
    compact: true,
  }),
];

export default [
  {
    input: "src/main.ts",
    output: {
      format: "es",
      file: "dist/ecoflow-card.js",
      inlineDynamicImports: true,
    },
    plugins,
  },
];
