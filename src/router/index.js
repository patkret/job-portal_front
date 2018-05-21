import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Dashboard';
import Offers from '../components/offers/offers'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/offers',
      name: 'Offers',
      component: Offers,
    },

  ],
});
