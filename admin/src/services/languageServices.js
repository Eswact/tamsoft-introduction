import { ref } from "vue";
import AjaxScripts from "@/scripts/ajaxScripts";

const selectedLanguage = ref(sessionStorage.getItem('language') || 'tr');
const selectedJson = ref(null);

const fetchLanguageData = () => {
    AjaxScripts.FindLanguage({
        data: selectedLanguage.value,
        onSuccess: function(res) {
            selectedJson.value = res;
        },
        onError: function(err) {
            console.log(err);
        }
    });
};

if (window.location.pathname !== '/') {
    fetchLanguageData();
}

const switchLanguage = (lang) => {
    selectedLanguage.value = lang;
    sessionStorage.setItem('language', lang);
    fetchLanguageData();
};

export { fetchLanguageData, selectedJson, selectedLanguage, switchLanguage };
