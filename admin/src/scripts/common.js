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

//general func updateWithPath (path, object)

//are you sure modal

//saveNewChanges(func)

export { getImageFromUploads, handleImageSelection };