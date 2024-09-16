import { createI18n } from 'vue-i18n';
import AjaxScripts from '@/scripts/ajaxScripts'

async function fetchTranslations(lang) {
  return new Promise((resolve, reject) => {
    let onSuccess = function(res) {
      resolve(res);
    };
    let onError = function(err) {
      console.warn(err);
      //Hata durumunda Local'den getirme
      const fallbackTranslations = import(`@/locales/${lang}.json`);
      resolve(fallbackTranslations || {});
    };
    AjaxScripts.FindLanguage({ data: lang, onSuccess, onError });
  });
}

const i18n = createI18n({
  locale: 'tr',
  fallbackLocale: 'en',
  messages: {
    en: await fetchTranslations('en'),
    tr: await fetchTranslations('tr'),
  }
});

export default i18n;