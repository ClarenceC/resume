import { createRouter, createWebHashHistory } from 'vue-router';
import ResumeExecutor from '../components/ResumeExecutor.vue';
import ResumeManager from '../components/ResumeManager.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/executor' },
    { path: '/executor', name: 'executor', component: ResumeExecutor },
    { path: '/manager', name: 'manager', component: ResumeManager },
  ],
});

export default router;
