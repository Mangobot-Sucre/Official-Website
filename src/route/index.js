import { createWebHistory, createRouter } from 'vue-router'

import Layout from '@/components/layout/index.vue'


const routes = [
    // 首页
    {
        path : '/',
        component : Layout,
        children : [
            {
                path : '',
                name: 'Home',
                component : () => import('@/views/HomePage/index.vue'),
            },
            {
                path : '/products/:name',
                name: 'Product',
                component : () => import('@/views/ProductPage/index.vue'),
            },
            {
                path : '/description/:name',
                name: 'Description',
                component : () => import('@/views/Description/index.vue'),
            },
            {
                path : '/privacy',
                name: 'Privacy',
                component : () => import('@/views/Policy/index.vue'),
            },
            {
                path : '/terms',
                name: 'Terms',
                component : () => import('@/views/Terms/index.vue'),
            },
            {
                path : '/contactus',
                name: 'Contactus',
                component : () => import('@/views/Contactus/index.vue'),
            },
            {
               path : '/aboutus',
               name: 'Aboutus',
               component : () => import('@/views/Aboutus/index.vue'),
            },
            {
                path : '/robotics',
                name: 'Robotics',
                component : () => import('@/views/Robotics/index.vue'),
            },
            {
                path : 'HomePage',
                redirect: '/'
            }
        ],
    },
    
]



const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router