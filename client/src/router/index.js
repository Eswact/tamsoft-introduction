import { createRouter, createWebHistory } from 'vue-router';
import { useHead } from '@unhead/vue';
import i18n from '../services/language';

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