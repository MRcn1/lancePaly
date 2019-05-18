import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component(resolve) {
                require(['../page/login'], resolve)
            },
        },
        {
            path: '',
            name: 'home',
            component(resolve) {
                require(['../page/layout/layout'], resolve)
            },
            children: [
                {
                    path: '',
                    redirect: '/index'
                },
                {
                    path: '/index',
                    name: '首页',
                    component(resolve) {
                        require(['../page/index'], resolve)
                    },
                },
                // 交易管理
                {
                    path: '/tradingFlow',
                    name: '交易流水',
                    component(resolve) {
                        require(['../page/transaction/tradingFlow'], resolve)
                    },
                    meta: {
                        top: "交易管理",
                        icon: 'syicon_21.png',
                    },
                },
                {
                    path: '/LaundryList',
                    name: '代付流水',
                    component(resolve) {
                        require(['../page/transaction/LaundryList'], resolve)
                    },
                    meta: {
                        top: "交易管理",
                        icon: 'syicon_21.png',
                    },
                },
                // 结算管理
                {
                    path: '/settlementMan',
                    name: '结算管理',
                    component(resolve) {
                        require(['../page/settlementMan/settlementMan'], resolve)
                    },
                    meta: {
                        top: "结算管理 ",
                        icon: 'syicon_21.png',
                    },
                },
                // 经营报表
                {
                    path: '/business',
                    name: '余额查询',
                    component(resolve) {
                        require(['../page/business/businessreport'], resolve)
                    },
                    meta: {
                        top: "经营报表",
                        icon: 'syicon_21.png'
                    }
                }
            ]
        },
    ]
})
