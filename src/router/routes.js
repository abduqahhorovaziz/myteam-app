import About from '../pages/about.vue';
import Contact from '../pages/contact.vue';
import Index from '../pages/index.vue';
import NotFound from '../pages/not-found.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/:path(.*)',
    name: 'not-found',
    component: NotFound,
  },
];

export default routes;
