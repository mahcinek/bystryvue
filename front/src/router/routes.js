import Index from '../pages/index';
import Map from '../pages/Map';

export default [
  { path: '', component: Index },
  { path: '/map', component: Map },
  { path: '*', component: () => import('pages/404') },
];
