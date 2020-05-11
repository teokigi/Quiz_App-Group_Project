import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

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
            props: true
        }

    ]
})

export default router;
