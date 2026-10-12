import { createRouter, createWebHashHistory } from 'vue-router';
import ResumeExecutor from '../components/ResumeExecutor.vue';
import ResumeManager from '../components/ResumeManager.vue';
import ResumeFullstack from '../components/ResumeFullstack.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/executor' },
    { path: '/executor', name: 'executor', component: ResumeExecutor },
    { path: '/manager', name: 'manager', component: ResumeManager },
    { path: '/fullstack', name: 'fullstack', component: ResumeFullstack },
  ],
});

export default router;
