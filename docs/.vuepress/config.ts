import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import myPlugin from './myPlugin/my-plugin.js'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Laix\'s blog',
    description: '这是我的第一个博客',
    head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
    base: '/blog/',
    markdown: {
        breaks: true
    },
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            // NavbarItem
            {
                text: '首页',
                link: '/',
            },
            // NavbarGroup
            {
                text: '测试',
                children: ['/test/index.md', '/test/malou.md'],
            },
            // 字符串 - 页面文件路径
            // '/README.md',
        ],
        // sidebar: {
        //     '/test/': [

        //     ]
        // },
        logo: '/favicon.ico',
        repo: 'https://github.com/Laic7092/Laic7092.github.io',
        editLink: false
    }),
    plugins: [
        myPlugin()
    ]
})