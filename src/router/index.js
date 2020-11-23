import Vue from 'vue';
import VueRouter from 'vue-router';
import PageMain from '@/views/PageMain.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageMain,
    meta: {
      breadcrumb: 'Главная'
    }
  },
  {
    path: '/history',
    name: 'PageHistory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PageHistory" */ '@/views/PageHistory.vue'),
    meta: {
      breadcrumb: 'История'
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
