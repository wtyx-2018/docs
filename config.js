module.exports = {
    title: '武藤游戏',
    description: '问题出现我再告诉大家',
    // navbar:false,  不显示导航栏
    themeConfig: {
      lastUpdated: '最后更新时间',
      logo: '/assets/img/QQ.jpg',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about/' },
        { text: 'External', link: 'https://google.com' },
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ],
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico'}]
      ],
      sidebar: [
        '/',
        'about',
      ]
    }
  }