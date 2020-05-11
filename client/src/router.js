import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import Study from '@/views/Study.vue';
import Test from '@/views/Test.vue';
import Statistics from '@/views/Statistics.vue';

const router = new Router({
    mode:'history',
    routes:[
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: Statistics,
        },

        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/test',
            name: 'test',
            component: Test,
        },

        {
            path: '/study',
            name: 'study',
            component: Study,
        }

    ]
})

export default router;
