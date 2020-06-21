import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/home.vue'
import CategoryList from '../pages/category/index.vue'
import CreateCategory from '../pages/category/create.vue'
import EditCategory from '../pages/category/edit.vue'

const routes = new VueRouter({
    mode: 'history',
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
    ]
});

export default routes;