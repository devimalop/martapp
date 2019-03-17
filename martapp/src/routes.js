import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';
// import Draw from './pages/draw.vue';
import Draw from './components/blackboard.vue';
import Cat from './pages/cat.vue';
import SketchPad from './pages/sketchpad.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/sketchpad/',
    component: SketchPad,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/draw/',
    component: Draw,
  },
  {
    path: '/cat/',
    component: Cat,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
