import { defineConfig } from 'dumi';
import { dumi_extend_nav } from '../config'

const dirNames = __dirname.split('/');
const dirName = dirNames[dirNames.length - 1];
const indexPath = '../nginx/html'
const outputPath = `${indexPath}/${dirName}/`
const base = `/${dirName}/`;
console.log(outputPath, base);
const navs = [
  null, // null 值代表保留约定式生成的导航，只做增量配置
  ...dumi_extend_nav
]
const metas = [
  {
    name: 'keywords',
    content: '吹口琴的喵~ | CI/CD learning',
  },
  {
    name: 'description',
    content: '记录、整理学习CI/CD相关知识的笔记',
  },
]

export default defineConfig({
  title: 'CI/CD learning',
  mode: 'site',
  base: base,
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
  favicon: "https://awesomewdb.gitee.io/public/icon/db-white.svg",
  // styles
  styles: [`https://awesomewdb.gitee.io/public/dumi/theme.css`],
  // more config: https://d.umijs.org/config
});
