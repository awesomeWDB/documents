import { defineConfig } from 'dumi';

const dirNames = __dirname.split('/');
const dirName = dirNames[dirNames.length - 1];
const indexPath = '../document-index'
const outputPath = `${indexPath}/${dirName}/`
const base = `/${dirName}/`;
console.log(outputPath, base);
const navs = [
  null, // null 值代表保留约定式生成的导航，只做增量配置
  {
    title: 'GitHub',
    path: 'https://github.com/umijs/dumi',
  },
]
const metas = [
  {
    name: 'keywords',
    content: '吹口琴的喵~ | docker learning',
  },
  {
    name: 'description',
    content: '记录、整理学习docker相关知识的笔记',
  },
]

export default defineConfig({
  title: 'docker learning',
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