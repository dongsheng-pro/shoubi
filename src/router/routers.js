import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true,
      //access: ['super_admin']
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  // {
  //   path: '/users',
  //   name: '用户管理',
  //   meta: {
  //     icon: 'md-people',
  //     title: '用户管理'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'user_table',
  //       name: '用户管理',
  //       meta: {
  //         icon: 'md-person',
  //         title: '用户管理'
  //       },
  //       component: () => import('@/view/single-page/message/index.vue')
  //     }
  //   ]
  //  },
  // {
  //   path: '/playType',
  //   name: '赛事名称',
  //   component: Main,
  //   meta: {
  //     icon: 'md-barcode',
  //     title: '比赛类型'
  //   },
  //   children: [
  //     {
  //       path: 'playFirstType',
  //       name: '一级赛事名称',
  //       meta: {
  //         icon: 'md-barcode',
  //         title: '一级赛事名称'
  //       },
  //       component: () => import('@/view/playType/playFirstType-list.vue')
  //     },
  //     {
  //       path: 'playSecondType',
  //       name: '二级赛事名称',
  //       meta: {
  //         icon: 'md-barcode',
  //         title: '二级赛事名称'
  //       },
  //       component: () => import('@/view/playType/playSecondType-list.vue')
  //     },
  //     {
  //       path: 'playThirdType',
  //       name: '三级赛事名称',
  //       meta: {
  //         icon: 'md-barcode',
  //         title: '三级赛事名称'
  //       },
  //       component: () => import('@/view/playType/playThirdType-list.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/sportdata',
  //   name: '数据中心',
  //   meta: {
  //     icon: 'md-cloud-upload',
  //     title: '数据中心'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'football_table',
  //       name: '足球球队数据',
  //       meta: {
  //         icon: 'md-football',
  //         title: '足球球队数据'
  //       },
  //       component: () => import('@/view/team-table/football_table.vue')
  //     },
  //     {
  //       path: 'play-list',
  //       name: '比赛数据',
  //       meta: {
  //         icon: 'md-flag',
  //         title: '比赛数据'
  //       },
  //       component: () => import('@/view/play/play-list.vue')
  //     },
  //     // {
  //     //   path: 'baseketball_table',
  //     //   name: '篮球球队数据',
  //     //   meta: {
  //     //     icon: 'md-grid',
  //     //     title: '篮球球队数据'
  //     //   },
  //     //   component: () => import('@/view/team-table/basketball_table.vue')
  //     // }
  //   ]
  // },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/message',
    name: 'message',
    component: Main,
    meta: {
      hideInBread: true,
      hideInMenu: true
    },
    children: [
      {
        path: 'message_page',
        name: 'message_page',
        meta: {
          icon: 'md-notifications',
          title: '消息中心'
        },
        component: () => import('@/view/single-page/message/index.vue')
      }
    ]
  },
  {
    path: '/banner',
    name: 'banner',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'banner',
        name: '栏目',
        meta: {
          icon: 'ios-bug',
          title: '栏目'
        },
        component: () => import('@/view/banner/banner.vue')
      }
    ]
  },
  {
    path: '/class',
    name: 'class',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'class',
        name: '文章类别',
        meta: {
          icon: 'ios-bug',
          title: '文章类别'
        },
        component: () => import('@/view/class/class.vue')
      }
    ]
  },
  {
    path: '/news',
    name: 'news',
    meta: {
      hideInBread: true
    },
    component: Main,
    children: [
      {
        path: 'news',
        name: '文章',
        meta: {
          icon: 'ios-bug',
          title: '文章'
        },
        component: () => import('@/view/news/news.vue')
      }
    ]
  },
  // {
  //   path: '/error_list',
  //   name: 'error_list',
  //   meta: {
  //     hideInBread: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_list_page',
  //       name: '错误信息日志',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误信息日志'
  //       },
  //       component: () => import('@/view/error-store/error-list.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/error_logger',
  //   name: 'error_logger',
  //   meta: {
  //     hideInBread: true,
  //     hideInMenu: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'error_logger_page',
  //       name: 'error_logger_page',
  //       meta: {
  //         icon: 'ios-bug',
  //         title: '错误收集'
  //       },
  //       component: () => import('@/view/single-page/error-logger.vue')
  //     }
  //   ]
  // },
  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `{{ params }}-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `{{ query }}-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
