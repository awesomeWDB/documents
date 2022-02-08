import { defineConfig } from 'dumi';
import { dumi_extend_nav } from '../config';

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
    content: '吹口琴的喵~ | vscode-plugin-emoji',
  },
  {
    name: 'description',
    content: 'vscode插件开发，一款方便的在vscode中插入emoji的工具',
  },
];

export default defineConfig({
  title: 'vscode-plugin-emoji',
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
  // more config: https://d.umijs.org/config
});
