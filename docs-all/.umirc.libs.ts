import { defineConfig } from 'dumi';

const dirName = 'docs-libs'
const outputPath = `../nginx/html/${dirName}/`;
const publicPath = `/${dirName}/`;
console.log(outputPath, publicPath);

export default defineConfig({
  resolve: {
    includes: [dirName],
  },
  base: publicPath.slice(0, -1),
  publicPath,
  outputPath,
});
