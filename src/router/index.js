import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/RecipeList')
    },
    {
      name: 'add-form',
      path: '/add',
      component: () => import('@/views/AddForm')
    },
    {
      name: 'detail-view',
      path: '/recipe/:id',
      component: () => import('@/views/DetailView')
    }
  ]
});
