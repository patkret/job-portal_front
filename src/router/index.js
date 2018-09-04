import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Dashboard';
import Offers from '../components/offers/offers'
import Cities from '../components/cities/Cities'
import CityForm from '../components/cities/CityForm'

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    {
      path: '/cities',
      name: 'Cities',
      component: Cities,
    },
    {
      path: '/cities-add',
      name: 'CityForm',
      component: CityForm,
    },
    {
      path: '/cities/edit/:item',
      name: 'CityForm',
      component: CityForm,
    },
  ],
});
