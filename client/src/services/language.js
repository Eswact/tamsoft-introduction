import { ref } from 'vue';
import AjaxScripts from '@/scripts/ajaxScripts'

const langCounts = ref({
  iconLength: 0, 
  propertyLengthHome: 0,
  propertiesPage: {},
  bannerLength: 0, 
  propCardLength: 0, 
  propsLength: 0, 
  teamSize: 0, 
  propertyLengthPricing: 0
});

const fetchTranslations = async (lang) => {
  return new Promise((resolve, reject) => {
    let onSuccess = function(res) {
      resolve(res);
      if (lang === 'tr') {
        langCounts.value.iconLength = res.homePage.icons.length;
        langCounts.value.propertyLengthHome = res.homePage.properties.length;
        langCounts.value.propertiesPage = res.propertiesPage;
        langCounts.value.bannerLength = res.propertiesPage.banners.length;
        langCounts.value.propCardLength = res.propertiesPage.allProps.cards.length;
        langCounts.value.propsLength = res.propertiesPage.allProps.props.length;
        langCounts.value.teamSize = res.aboutPage.ourTeam.team.length;
        langCounts.value.propertyLengthPricing = res.pricingPage.properties.length;
      }
    };
    let onError = async function(err) {
      console.warn(err);
      const fallbackTranslations = await import(`@/locales/${lang}.json`);
      if (lang === 'tr' && fallbackTranslations) {
        langCounts.value.iconLength = fallbackTranslations.homePage.icons.length;
        langCounts.value.propertyLengthHome = fallbackTranslations.homePage.properties.length;
        langCounts.value.propertiesPage = res.propertiesPage;
        langCounts.value.bannerLength = fallbackTranslations.propertiesPage.banners.length;
        langCounts.value.propCardLength = fallbackTranslations.propertiesPage.allProps.cards.length;
        langCounts.value.propsLength = fallbackTranslations.propertiesPage.allProps.props.length;
        langCounts.value.teamSize = fallbackTranslations.aboutPage.ourTeam.team.length;
        langCounts.value.propertyLengthPricing = fallbackTranslations.pricingPage.properties.length;
      }
      resolve(fallbackTranslations || {});
    };
    AjaxScripts.FindLanguage({ data: lang, onSuccess, onError });
  });
}

export { fetchTranslations, langCounts };