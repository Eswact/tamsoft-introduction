import { createI18n } from 'vue-i18n';
import { fetchTranslations } from './language';

const i18n = createI18n({
  locale: 'tr',
  fallbackLocale: 'en',
  messages: {
    en: await fetchTranslations('en'),
    tr: await fetchTranslations('tr'),
  }
});

export default i18n;