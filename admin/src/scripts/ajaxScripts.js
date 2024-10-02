import { fetchData, postData } from '../services/ajaxServices';

const AjaxScripts = {
    VerifyToken: function ({ data, onSuccess, onError }) {
        postData(`admin/verifyToken`, data, onSuccess, onError);
    },
    Login: function ({ data, onSuccess, onError }) {
        postData(`user/login`, data, onSuccess, onError);
    },
    Logout: function ({ data, onSuccess, onError }) {
        postData(`user/logout`, data, onSuccess, onError);
    },
    GetLanguages: function ({ onSuccess, onError }) {
        fetchData(`language/languages`, onSuccess, onError);
    },
    FindLanguage: function ({ data, onSuccess, onError }) {
        postData(`language/findLanguage/${data}`, null, onSuccess, onError);
    },
};

export default AjaxScripts;