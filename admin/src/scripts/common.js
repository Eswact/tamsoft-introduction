import AjaxScripts from "./ajaxScripts";
import { selectedLanguage } from "@/services/languageServices";

const uploadsUrl=`${import.meta.env.VITE_REQUEST_URL}/uploads/images/`
function getImageFromUploads(name) {
    return `${uploadsUrl}${name}`;
}

const handleImageSelection = (file, imagePreview, newImage) => {
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target.result;
            newImage.value = file;
        };
        reader.readAsDataURL(file);
    }
};

//are you sure modal

const uploadImagesArray = (path, images) => {
    let formData = new FormData();
    if (path) formData.append('path', path);

    images.forEach(image => {
        formData.append('files', image);
    });

    let onSuccess = function(res) {
        console.log(res);
    };
    let onError = function(err) {
        console.log(err);
    };
    AjaxScripts.UploadImages({ formData, onSuccess, onError });
};


const updateWithPath = (path, object) => {
    let language = selectedLanguage.value;
    let data = {
        path: path,
        data: object
    }
    let onSuccess = function(res) {
        console.log(res);
    };
    let onError = function(err) {
        console.log(err);
    };
    AjaxScripts.UpdateLanguageWithPath({ language, data, onSuccess, onError });
}

const saveNewChanges = (func) => {
    const button = document.getElementById('saveChangesButton');
    button.replaceWith(button.cloneNode(true));
    document.getElementById('saveChangesButton').addEventListener('click', function() {
        func();
    });
}

export { getImageFromUploads, handleImageSelection, uploadImagesArray, updateWithPath, saveNewChanges };