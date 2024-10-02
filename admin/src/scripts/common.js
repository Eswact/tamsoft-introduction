const uploadsUrl=`${import.meta.env.VITE_REQUEST_URL}/uploads/images/`
function getImageFromUploads(name) {
    return `${uploadsUrl}${name}`;
}

const handleImageSelection = (file, imagePreviews, newImages, index) => {
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreviews[index] = e.target.result;
            newImages[index] = file;
        };
        reader.readAsDataURL(file);
    }
};
  

export { getImageFromUploads, handleImageSelection };