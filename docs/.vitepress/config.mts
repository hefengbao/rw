import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "读 & 写",
  description: "学而不思则罔，思而不学则殆。",
  base: "/rw/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    outline: {
      level: [2,3],
      label: '页面导航'
    },
    footer: {
      message: '博学之，审问之，慎思之，明辨之，笃行之。',
      copyright: 'Copyright © 2025 ♥贺丰宝♥'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '读书', link: '/read/', activeMatch: '/read/*' },
      { text: '思考', link: '/write/', activeMatch: '/write/*' },
      { text: '素材', link: '/quote/', activeMatch: '/quote/*' },
    ],

    sidebar: [
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hefengbao' }
    ]
  }
})
