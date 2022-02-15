import { defineConfig } from 'dumi';
import { dumi_extend_nav, headScripts } from '../config';

const dirNames = __dirname.replace(/\\/g, '/').split('/');
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
    content: '吹口琴的喵~ | 面试整理',
  },
  {
    name: 'description',
    content: '整理一些面试的知识点',
  },
]

export default defineConfig({
  title: '面试整理',
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
  favicon: "https://awesomewdb.gitee.io/public/icon/db-blue.svg",
  // styles
  styles: [`https://awesomewdb.gitee.io/public/dumi/theme.css`],
  // headScripts
  headScripts,
  // more config: https://d.umijs.org/config
});

// https://blog.csdn.net/qq_42532128/article/details/105318439
// https://www.cnblogs.com/haoyijing/p/5898420.html