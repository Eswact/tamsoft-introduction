import { createRouter, createWebHistory } from 'vue-router';
import { useHead } from '@unhead/vue';
import i18n from '../services/language';
import { adminService } from '../services/adminService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        i18nKey: 'meta.home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        i18nKey: 'meta.about'
      }
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/PricingView.vue'),
      meta: {
        i18nKey: 'meta.pricing'
      }
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('../views/FeaturesView.vue'),
      meta: {
        i18nKey: 'meta.features'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        i18nKey: 'meta.contact'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/admin',
      name: 'admin-login',
      component: () => import('../views/admin/AdminLogin.vue'),
      meta: { isAdmin: true }
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: () => import('../views/admin/AdminDashboard.vue'),
      meta: { isAdmin: true, requiresAuth: true }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !adminService.isLoggedIn()) {
    return next('/admin');
  }
  if (to.name === 'admin-login' && adminService.isLoggedIn()) {
    return next('/admin/dashboard');
  }

  const { t } = i18n.global;

  if (to.meta.i18nKey) {
    const metaKey = to.meta.i18nKey;

    const title = t(`${metaKey}.title`);
    const description = t(`${metaKey}.description`);
    const keywords = t(`${metaKey}.keywords`);

    useHead({
      title: title || 'Varsayılan Başlık',
      meta: [
        {
          name: 'description',
          content: description || 'Varsayılan Açıklama',
        },
        {
          name: 'keywords',
          content: keywords || 'Varsayılan Anahtar Kelimeler',
        },
      ],
    });
  }

  next();
});


export default router;