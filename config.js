const MAP = {
  'github': ['github', 'https://github.com/awesomeWDB'],
  'gitee': ['gitee', 'https://gitee.com/awesomeWDB'],
  'CSDN': ['CSDN', 'https://blog.csdn.net/qq_36404808'],
  'Bilibili': ['Bilibili', 'https://space.bilibili.com/52225296'],
  'k': ['🎤全民K歌', 'https://kg.qq.com/node/personal?uid=6a95958c2c28328a32'],
}

const dumi_git_nav = {
  title: 'git',
  children: [
    { title: MAP.github[0], path: MAP.github[1] },
    { title: MAP.gitee[0], path: MAP.gitee[1] }
  ]
}

const dumi_social_nav = {
  title: '社交',
  children: [
    { title: MAP.CSDN[0], path: MAP.CSDN[1] },
    { title: MAP.Bilibili[0], path: MAP.Bilibili[1] },
    { title: MAP.k[0], path: MAP.k[1] }
  ]
}

const dumi_home_nav = {
  title: '😺主页😺',
  path: 'https://www.readers.fun/'
}

export const dumi_extend_nav = [
  dumi_home_nav,
  dumi_git_nav,
  dumi_social_nav
]