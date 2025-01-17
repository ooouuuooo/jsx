jsproxy_config({
  // 当前配置的版本（服务端记录在日志中，方便排查问题）
  ver: '55',

  // 节点配置
  node_map: {
    'mysite': {
      label: '当前站点',
      lines: [
        // 静态资源和代理接口位于同个服务器的场合
        // 例如默认的 ip.xip.io 以及 cloudflare worker
        location.host
        ]
    },
    'cfworker': {
      label: 'Cloudflare Worker',
      hidden: true,
      lines: [
        // 实验中...
        //'node-cfworker.etherdream.com:8443'
        location.host
      ]
    }
  },

  /**
   * 默认节点
   */
  node_default: 'mysite',

  /**
   * 加速节点
   */
  //node_acc: 'cfworker',
  node_acc: 'mysite',
  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  //assets_cdn: 'https://cdn.jsdelivr.net/gh/ifyour/js-online-proxy@latest/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'http://haha.com/': {
      content: 'Hello World'
    },
  }
})
