import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/List')
    },
    {
      name: 'add-form',
      path: '/add',
      component: () => import('@/views/AddForm')
    },
    {
      name: 'detail-view',
      path: '/recipe/:slug',
      component: () => import('@/views/DetailView')
    }
  ]
});
