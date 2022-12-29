import {
    routeGuard,
    requiresAuthGuard,
    logoutGuard,
    requiresRegistrationGuard,
} from './guard';
import { RouteRecordRaw } from 'vue-router';

const routes = <Array<RouteRecordRaw>>[
    {
        name: 'home',
        path: '/',
        component: () => import('@/pages/home/index.vue'),
    },
    {
        name: 'signup',
        path: '/signup',
        component: () => import('@/pages/singup/index.vue'),
    },

    {
        name: 'login',
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
    },
];

export default routes;
