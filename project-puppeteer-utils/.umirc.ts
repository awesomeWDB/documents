import { defineConfig } from 'dumi';
import { dumi_extend_nav, headScripts } from '../config';

const dirNames = __dirname.replace(/\\/g, '/').split('/');
const dirName = dirNames[dirNames.length - 1];
const indexPath = '../nginx/html';
const outputPath = `${indexPath}/${dirName}/`;
const base = `/${dirName}/`;
console.log(outputPath, base);
const navs = [
  null, // null 值代表保留约定式生成的导航，只做增量配置
  ...dumi_extend_nav,
];
const metas = [
  {
    name: 'keywords',
    content: '吹口琴的喵~ | puppeteer utils | 生成pdf、截屏等等',
  },
  {
    name: 'description',
    content: 'puppeteer utils使用手册',
  },
];

export default defineConfig({
  title: 'puppeteer utils',
  mode: 'site',
  base: base.slice(0, -1),
  publicPath: base,
  navs,
  metas,
  hash: true,
  locales: [['zh-CN', '中文']],
  outputPath,
  // 预渲染
  ssr: {},
  exportStatic: { htmlSuffix: false },
  // favicon
  favicon: 'https://awesomewdb.gitee.io/public/icon/db-blue.svg',
  // styles
  styles: [`https://awesomewdb.gitee.io/public/dumi/theme.css`],
  // headScripts
  headScripts,
  // more config: https://d.umijs.org/config
});
