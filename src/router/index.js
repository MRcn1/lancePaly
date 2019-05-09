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
                    redirect: '/tradingFlow'
                },
                {
                    path: '/tradingFlow',
                    name: '交易流水',
                    component(resolve) {
                        require(['../page/transaction/tradingFlow'], resolve)
                    },
                    meta: {
                        top: "交易管理"
                    },
                },
            ]
        },
    ]
})
