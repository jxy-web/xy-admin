import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from "@/layout";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 防止路由重复报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})
export const menuRouter = [
    {
        path: "/xy-admin",
        component: Layout,
        children: [
          {
            path: "/home",
            name: "home",
            component: () => import("@/views/home"),
            meta: {
              title: "home",
              icon: 'iconfont icon-shouye'
            },
          },
           {
                path: "/table",
                name: "table",
                component: () => import("@/views/table/index.vue"),
                meta: {
                    title: "表格",
                    icon: "iconfont icon-table"
                },
            },
        ],
      }
]
// export const menuRouter = [
//     {
//         path: "/home",
//         component: Layout,
//         name: "home",
//         children: [
//           {
//             path: "/",
//             name: "home",
//             component: () => import("@/views/home"),
//             meta: {
//               title: "home",
//               icon: 'iconfont icon-shouye'
//             },
//           },
//         ],
//       },
//     {
//         path: "/table",
//         component: Layout,
//         name: "table",
//         children: [
//             {
//                 path: "/",
//                 name: "table",
//                 component: () => import("@/views/table/index.vue"),
//                 meta: {
//                     title: "表格",
//                     icon: "iconfont icon-table"
//                 },
//             },
//         ],
//     },
//     {
//         path: "/editor",
//         component: Layout,
//         name: "editor",
//         children: [
//             {
//                 path: "/",
//                 name: "editor",
//                 component: () => import("@/views/editor/index.vue"),
//                 meta: {
//                     title: "富文本编辑器",
//                     icon: 'iconfont icon-bianji'
//                 },
//             },
//         ],
//     },
//     {
//         path: "/axios",
//         component: Layout,
//         name: "axios",
//         children: [
//             {
//                 path: "/",
//                 name: "axios",
//                 component: () => import("@/views/upload/index.vue"),
//                 meta: {
//                     title: "axios",
//                     icon: 'iconfont icon-shuaxin'
//                 },
//             },
//         ],
//     },
//     {
//         path:'/calendar',
//         component: Layout,
//         name: "calendar",
//         children: [
//             {
//                 path: "/calendar",
//                 name: "calendar",
//                 component: () => import("@/views/calendar/index.vue"),
//                 meta: {
//                     title: "日历",
//                     icon: 'iconfont icon-riqi'
//                 },
//             },
//         ],
//     },
//     {
//         path:'/vuex',
//         component: Layout,
//         name: "vuex",
//         children: [
//             {
//                 path: "/vuex",
//                 name: "vuex",
//                 component: () => import("@/views/vuex/index.vue"),
//                 meta: {
//                     title: "vuex",
//                     icon: 'iconfont icon-huancun'
//                 },
//             },
//         ],
//     },
//     {
//         path:'/menu',
//         component: Layout,
//         alwaysShow: true,
//         name: 'menu',
//         meta: {
//             title: 'menu',
//             icon: 'iconfont icon-caidan',
//         },
//         children: [
//             {
//                 path: "/menu1",
//                 name: "menu1",
//                 component: () => import("@/views/menu/menu1.vue"),
//                 meta: {
//                     title: "menu1",
//                 },
//             },
//             {
//                 path: "/menu2",
//                 name: "menu2",
//                 alwaysShow: true,
//                 component: () => import("@/views/menu/menu2.vue"),
//                 meta: {
//                     title: "menu2",
//                 },
//                 children:[
//                     {
//                         path: "/menu2-1",
//                         name: "menu2-1",
//                         component: () => import("@/views/menu/menu2-1.vue"),
//                         meta: {
//                             title: "menu2-1",
//                         },
//                     },
//                 ]
//             },
//         ],
//     }
// ]

const mainRouter = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name: 'login',
        component: () => import ('@/views/login'),
        meta: {
            title: "登录",
        },
    }
]

const router = new VueRouter({
    routes:[
        ...menuRouter,
        ...mainRouter,
        {
            path:'*',
            name:'404',
            component: () => import('@/views/404'),
            meta: {
                title: "404",
            },
        }
    ]
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = to.meta.title ? to.meta.title : 'XY-Admin'
    next()
})

router.afterEach(() => {
    NProgress.done();
})

export default router;
