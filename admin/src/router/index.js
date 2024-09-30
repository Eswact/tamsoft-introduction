import { createRouter, createWebHistory } from 'vue-router';
import AjaxScripts from '@/scripts/ajaxScripts';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = sessionStorage.getItem("user");
    if (!token) {
      return next({ name: 'login' });
    }

    try {
      await new Promise((resolve, reject) => {
        AjaxScripts.VerifyToken({
          data: {token: token},
          onSuccess: function (response) {
            resolve(response);
          },
          onError: function (error) {
            console.log(error);
            sessionStorage.removeItem('user');
            reject(error);
          }
        });
      });
      next();
    } catch (error) {
      return next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
