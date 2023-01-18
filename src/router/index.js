import { createRouter, createWebHashHistory } from 'vue-router';
import JournalView from '../views/JournalView.vue';
import ContactsView from '../views/ContactsView.vue';
import ClavierView from '../views/ClavierView.vue';

const routes = [
  {
    path: '/',
    name: 'journal',
    component: JournalView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
