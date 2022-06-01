const fs = require('fs');

const autosidebar = require('vuepress-auto-sidebar-doumjun')

module.exports = {
    title: '文沐',
    port: "8080",
    debug: true,
    theme: "reco",
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        logo: "https://avatars.githubusercontent.com/u/22762749?v=4",
        nav: [ // 导航栏
            {
                text: '首页',
                icon: "reco-home",
                link: '/'
            },
            {
                text: '文章',
                icon: "reco-document",
                items: [{
                        text: 'Golang',
                        link: '/golang/'
                    },
                    {
                        text: 'Linux',
                        link: '/linux/'
                    },
                    {
                        text: '其他',
                        link: '/note/'
                    }
                ]
                
            }, {
                text: '文沐的书',
                icon: "reco-document",
                link: 'https://book.iflet.cn'
            },{
                text: '博客',
                icon: "reco-blog",
                items: [{
                        text: '简书',
                        icon: "reco-jianshu",
                        link: 'https://www.jianshu.com/users/7b24334ce846/timeline'
                    },
                    {
                        text: '博客园',
                        icon: "reco-bokeyuan",
                        link: 'https://www.cnblogs.com/kamback/'
                    }
                ]
            }, {
                text: '开源项目',
                icon: "reco-document",
                items: [{
                        text: '海芯导航',
                        icon: "reco-document",
                        link: 'http://www.hixnav.xyz'
                    },
                    {
                        text: '导出书签插件',
                        icon: "reco-document",
                        link: 'https://microsoftedge.microsoft.com/addons/detail/export-bookmarks-to-json/bphcjnoolbcakejfjkjjflkgebndlkef'
                    },
                         {
                        text: 'Go代码生成器',
                        icon: "reco-document",
                        link: 'github.com/wennmu/gint.git'
                    },
                    {
                        text: 'GoweAdmin',
                        icon: "reco-document",
                        link: '/GoweAdmin'
                    }
                ]
            }, 
            {
                text: 'Github',
                icon: "reco-github",
                link: 'https://github.com/wennmu'
            }, {

                text: 'Gitee',
                icon: "reco-mayun",
                link: 'https://gitee.com/wennmu'
            }
        ],
        sidebar: {
//             '/golang-pit-guide/': [{
//                 title: 'Golang避坑指南',
//                 collapsable: false,
//                 children: autosidebar("/golang-pit-guide/")
//             }],
            '/linux/': [{
                title: 'Linux',
                collapsable: false,
                children: autosidebar("/linux/")
            }],
            '/golang/': [{
                title: 'Golang',
                collapsable: false,
                children: autosidebar("/golang/")
            }],
//             '/nginx/config/': [{
//                 title: '配置',
//                 collapsable: false,
//                 children: autosidebar("/nginx/config/")
//             }],
            '/note/': [{
                title: '随笔',
                collapsable: false,
                children: autosidebar("/note/")
            }],
            // '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用 
        },
        sidebarDepth: 2,
        type: 'blog',
        friendLink: [{
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "/imgs/reco.jpg",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '看活一分钟',
                desc: '一分钟Get一个小技能',
                logo: 'https://upload.jianshu.io/users/upload_avatars/9794452/f6d3dad7-60ee-40bd-b55a-d47f41f39a1c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
                link: 'https://www.jianshu.com/u/7b24334ce846'
            },
            // ...
        ],
        // 作者
        author: 'wenmu',
        authorAvatar: '/logo.png',

        // 自动形成侧边导航
        // sidebar: 'auto',

        // 最后更新时间
        // lastUpdated: '最近更新时间',
        // noFoundPageByTencent: true,
        // subSidebar: 'auto',
        /**
         * 密钥 (if your blog is private)
         */
        // 备案
        // record: 'ICP 备案文案',
        // recordLink: 'ICP 备案指向链接',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2020'
    },
    base: "/",
    head: [
        [
            'link',
            {
                rel: "icon",
                href: "logo.png"
            }
        ],
        ["link", { rel: "stylesheet", href: "styles/index.styl" }],
        // ["script", { src: "scripts/demo.js" }]
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
        category: {
            location: 2, // 在导航栏菜单中所占的位置，默认2
            text: '分类' // 默认 “分类”
        },
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: '标签' // 默认 “标签”
        }
    },
}
