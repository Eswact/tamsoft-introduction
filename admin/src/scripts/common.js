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

const uploadImagesArray = (images) => {
    console.log(images)
}

const updateWithPath = (path, object) => {
    console.log(path);
    console.log(object);
}

const saveNewChanges = (func) => {
    const button = document.getElementById('saveChangesButton');
    button.replaceWith(button.cloneNode(true));
    document.getElementById('saveChangesButton').addEventListener('click', function() {
        func();
    });
}

export { getImageFromUploads, handleImageSelection, uploadImagesArray, updateWithPath, saveNewChanges };