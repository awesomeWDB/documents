const sidebar = {
  'react': [
    { text: '基础', link: '/frontend/react/' },
    { text: '进阶', link: '/frontend/react/advanced' },
    { text: '进阶2', link: '/frontend/react/advanced2' },
  ],
  'vue2': [
    { text: '基础', link: '/frontend/vue2/' },
    { text: '进阶', link: '/frontend/vue2/advanced' },
  ],
  'vue3': [
    { text: '基础', link: '/frontend/vue3/' },
    { text: '进阶', link: '/frontend/vue3/advanced' },
  ],
  'node': [
    { text: 'index', link: '/backend/node/' }
  ],
  'koa2': [
    { text: 'index', link: '/backend/koa2/' }
  ],
  'collections': [
    {
      text: 'vue2源码赏析',
      children: [
        { text: 'index', link: '/collections/vue2源码赏析/' }
      ],
    },
    {
      text: 'vue3源码赏析',
      children: [
        { text: 'index', link: '/collections/vue3源码赏析/' }
      ],
    },
    {
      text: 'docker开发环境搭建',
      children: [
        { text: 'index', link: '/collections/docker开发环境搭建/' }
      ],
    },
    {
      text: 'k8s基础学习笔记',
      children: [
        { text: 'index', link: '/collections/k8s基础学习笔记/' }
      ],
    }
  ]
}

module.exports = {
  // 网站标题
  title: '吹口琴的喵~',
  // 网站描述
  description: 'blog with vitePress by 吹口琴的喵~',
  // 打包目录
  dest: './dist',
  base: '/blog/',
  // 头部head
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/blog/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true
  },
  // 使用插件
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [
      {
        text: '随笔', items: [
          { text: '前端-vue2', link: '/frontend/vue2/' },
          { text: '前端-vue3', link: '/frontend/vue3/' },
          { text: '前端-react', link: '/frontend/react/' },
          { text: '后端-node', link: '/backend/node/' },
          { text: '后端-koa2', link: '/backend/koa2/' },
          { text: '工程化', link: '/engineering/' },
        ]
      },
      {
        text: '专题',
        link: '/collections/'
      },
      { text: '个人网站', link: 'http://www.readers.fun/' },
      {
        text: '社交', items: [
          { text: 'bilibili', link: 'https://space.bilibili.com/52225296' },
          { text: 'CSDN', link: 'https://blog.csdn.net/qq_36404808' },
          { text: 'Github', link: 'https://github.com/awesomeWDB' },
          { text: 'Gitee', link: 'https://gitee.com/awesomeWDB' }
        ]
      },
      { text: 'git仓库', link: 'https://gitee.com/awesomeWDB/documents.git' }
    ],
    sidebarDepth: 2,
    sidebar: {
      collapsable: true,
      '/frontend/react/': sidebar.react,
      '/frontend/vue2/': sidebar.vue2,
      '/frontend/vue3/': sidebar.vue3,
      '/backend/node/': sidebar.node,
      '/backend/koa2/': sidebar.koa2,
      '/collections/': sidebar.collections,
    }
  }
}