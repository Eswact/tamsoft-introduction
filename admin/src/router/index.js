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
  {
    path: '/features',
    name: 'features',
    component: () => import('../views/FeaturesView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/PricingView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue')
  }
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
