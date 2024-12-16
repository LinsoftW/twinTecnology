import LoginApp from '@/components/LoginApp.vue'
import MenuApp from '@/views/MenuApp.vue'
import PrincipalApp from '@/views/PrincipalApp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MenuApp,
            redirect: '/login'
        },
        {
            path: '/inicio',
            name: 'inicio',
            component: PrincipalApp
        },
        {
            path: '/pedidos',
            name: 'pedidos',
            component: MenuApp,
        },
        {
            path: '/gest_pedidos',
            name: 'gest_pedidos',
            component: MenuApp,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginApp,
        },
        {
            path: '/inventario',
            name: 'inventario',
            component: MenuApp,
        },
        {
            path: '/sucursales',
            name: 'sucursales',
            component: MenuApp,
        },
        {
            path: '/gest_inventario',
            name: 'gest_inventario',
            component: MenuApp,
        },
        {
            path: '/gest_user',
            name: 'gest_user',
            component: MenuApp,
        },
        {
            path: '/user',
            name: 'user',
            component: MenuApp,
        },
        {
            path: '/gest_sucursal',
            name: 'gest_sucursal',
            component: MenuApp,
        },
        {
            path: '/gest_nomencladores',
            name: 'gest_nomencladores',
            component: MenuApp,
        },
        {
            path: '/cmasiva',
            name: 'cmasiva',
            component: MenuApp,
        },
        {
            path: '/categorias',
            name: 'categorias',
            component: MenuApp,
        },
        
    ]
})

export default router
