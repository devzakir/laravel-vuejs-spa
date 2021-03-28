import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/home.vue'
import CategoryList from '../pages/category/index.vue'
import CreateCategory from '../pages/category/create.vue'
import EditCategory from '../pages/category/edit.vue'
import ProductList from '../pages/product/index.vue'
import CreateProduct from '../pages/product/create.vue'
import EditProduct from '../pages/product/edit.vue'

// Dashboard Component
import Dashboard from '../pages/dashboard/index.vue'

// Authentication File
import Login from '../pages/auth/Login.vue'

const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        },
        {
            path: '/category',
            component: CategoryList,
            name: 'category-list',
        },
        {
            path: '/category/create',
            component: CreateCategory,
            name: 'create-category',
        },
        {
            path: '/category/edit/:id',
            component: EditCategory,
            name: 'edit-category',
        },
        {
            path: '/product',
            component: ProductList,
            name: 'product-list',
        },
        {
            path: '/product/create',
            component: CreateProduct,
            name: 'create-product',
        },
        {
            path: '/product/edit/:id',
            component: EditProduct,
            name: 'edit-product',
        },
        {
            path: '/auth/login',
            component: Login,
            name: 'login',
            meta: {
                requiresVisitor: true,
            }
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                requiresAuth: true,
            }
        }
    ]
});

export default routes;
