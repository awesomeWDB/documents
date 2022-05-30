import { defineConfig } from 'dumi';
import { dumi_extend_nav, headScripts } from '../config';

const navs = [
  null, // null 值代表保留约定式生成的导航，只做增量配置
  ...dumi_extend_nav,
];

const metas = [
  {
    name: 'keywords',
    content: '吹口琴的喵~ | 技术小栈 ^_^',
  },
  {
    name: 'description',
    content: '成体系的记录、整理相关知识，以便回顾、检索。',
  },
];

export default defineConfig({
  title: '朝花夕拾',
  mode: 'site',
  navs,
  metas,
  hash: true,
  locales: [['zh-CN', '中文']],
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
