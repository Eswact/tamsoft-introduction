import { fetchData, postData } from '../services/ajaxServices';

const AjaxScripts = {
  SendMail: function ({ data, onSuccess, onError }) {
    postData(`contact/sendMail`, data, onSuccess, onError);
  },
};

export default AjaxScripts;