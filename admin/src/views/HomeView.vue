<script setup>
  import { ref, watch } from 'vue';
  import { selectedJson } from '@/services/languageServices';
  import { getImageFromUploads, handleImageSelection, uploadImagesArray, updateWithPath, saveNewChanges } from '@/scripts/common';

  // Initial state
  const originalHomePage = ref(selectedJson.value?.homePage);
  const hasChanges = ref(false);

  // homePage Object
  const title = ref(selectedJson.value?.homePage.title || '');
  const description = ref(selectedJson.value?.homePage.description || '');
  const buttonText = ref(selectedJson.value?.homePage.buttonText || '');
  const buttonLink = ref(selectedJson.value?.homePage.buttonLink || '');
  const youtubeLink = ref(selectedJson.value?.homePage.youtubeLink || '');
  const icons = ref(selectedJson.value?.homePage.icons || []);
  const properties = ref(selectedJson.value?.homePage.properties || []);
  const image1 = ref(selectedJson.value?.homePage.image1 || '');
  const image2 = ref(selectedJson.value?.homePage.image2 || '');
  const imagePreview1 = ref(getImageFromUploads(selectedJson.value?.homePage.image1) || '');
  const imagePreview2 = ref(getImageFromUploads(selectedJson.value?.homePage.image2) || '');

  const newImage1 = ref(null);
  const newImage2 = ref(null);

  const newProperty = ref('');

  const isModalOpen = ref(false);
  const iconPreview = ref(null);
  const iconName = ref('');
  const fileInput = ref(null);

  const images2upload = ref([]);

  watch(
    () => selectedJson.value,
    (newVal) => {
      if (newVal && newVal.homePage) {
        title.value = newVal.homePage.title;
        description.value = newVal.homePage.description;
        buttonText.value = newVal.homePage.buttonText;
        buttonLink.value = newVal.homePage.buttonLink;
        youtubeLink.value = newVal.homePage.youtubeLink;
        icons.value = newVal.homePage.icons;
        properties.value = newVal.homePage.properties;
        image1.value = newVal.homePage.image1;
        image2.value = newVal.homePage.image2;
        imagePreview1.value = getImageFromUploads(newVal.homePage.image1);
        imagePreview2.value = getImageFromUploads(newVal.homePage.image2);
      }
    },
    { immediate: true }
  );

  const handleImageChange = (event, index) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileName = selectedFile.name;
      if (index === 1) {
        image1.value = fileName;
        handleImageSelection(selectedFile, imagePreview1, newImage1);
      } else if (index === 2) {
        image2.value = fileName;
        handleImageSelection(selectedFile, imagePreview2, newImage2);
      }
    }
  };

  // Props Array
  const deleteFromPropsArray = (index) => {
    properties.value.splice(index, 1);
  };
  const add4PropsArray = () => {
    if (newProperty.value.trim()) {
      properties.value.push(newProperty.value);
      newProperty.value = '';
    }
  };

  // Icon Modal
  const openIconModal = () => {
    isModalOpen.value = true;
  };
  const closeIconModal = () => {
    isModalOpen.value = false;
    iconPreview.value = null;
    iconName.value = '';
  };
  const handleIconChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        iconPreview.value = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const saveIcon = () => {
    if (iconName.value && iconPreview.value) {
      icons.value.push({
        icon: fileInput.value.files[0].name,
        name: iconName.value,
        preview: iconPreview.value, //kaydetmeden önce silincek
      });
      images2upload.value.push(fileInput.value.files[0]);
      closeIconModal();
    }
    else {
      alert('Gerekli bilgileri giriniz.');
    }
  };
  const deleteIcon = (index) => {
    const fileIndex = images2upload.value.findIndex(f => f.name === icons.value[index].icon);
    if (fileIndex !== -1) {
      images2upload.value.splice(fileIndex, 1);
    }
    icons.value.splice(index, 1);
  };

  // check Changes
  const checkForChanges = () => {
    const currentHomePage = {
      title: title.value,
      description: description.value,
      buttonText: buttonText.value,
      buttonLink: buttonLink.value,
      image1: image1.value,
      image2: image2.value,
      icons: icons.value,
      properties: properties.value,
      youtubeLink: youtubeLink.value,
    };

    hasChanges.value = JSON.stringify(currentHomePage) !== JSON.stringify(originalHomePage.value);
    (hasChanges.value) 
      ? document.getElementById('saveNewChanges').classList.add('show')
      : document.getElementById('saveNewChanges').classList.remove('show');
  };
  watch([title, description, buttonText, buttonLink, youtubeLink, icons, properties, image1, image2], checkForChanges);

  // saveUpdates
  const saveUpdates4Home = () => {
    // Create new home object
    icons.value.forEach(icon => {
      delete icon.preview;
    });
    
    let newHomePageObject = {
      title: title.value,
      description: description.value,
      buttonText: buttonText.value,
      buttonLink: buttonLink.value,
      youtubeLink: youtubeLink.value,
      icons: icons.value,
      properties: properties.value,
      image1: image1.value,
      image2: image2.value,
    };

    // Image to upload
    const imageFile1 = document.getElementById('image1').files[0];
    const imageFile2 = document.getElementById('image2').files[0];
    if (imageFile1) images2upload.value.push(imageFile1);
    if (imageFile2) images2upload.value.push(imageFile2);

    if (images2upload.value.length > 0) uploadImagesArray(images2upload.value);
    updateWithPath('homePage', newHomePageObject);
  };
  saveNewChanges(saveUpdates4Home);
</script>

<template>
  <div class="w-full flex flex-col gap-[20px]">
    <!-- Section 1 -->
    <div class="w-full flex flex-col">
      <div class="w-full flex gap-[20px]">
        <div class="w-full flex flex-col gap-[10px] justify-start items-start">
          <div class="w-full flex flex-col justify-start items-start gap-[2px]">
            <small>Başlık</small>
            <input name="homeHeader" id="homeHeader" type="text" maxlength="50" v-model="title" class="w-full p-[8px] border border-[#efefef] rounded-md text-text" />
          </div>
          <div class="w-full flex flex-col justify-start items-start gap-[2px]">
            <small>Açıklama</small>
            <textarea name="homeDescription" id="homeDescription" v-model="description" class="w-full p-[8px] border border-[#efefef] rounded-md text-text min-h-[164px] max-h-[164px]"></textarea>
          </div>
          <div class="w-full flex flex-col justify-start items-start gap-[2px]">
            <small>Buton</small>
            <input name="buttonText" id="buttonText" type="text" maxlength="32" v-model="buttonText" class="w-full p-[8px] border border-[#efefef] rounded-md text-text" />
            <input name="buttonLink" id="buttonLink" type="text" v-model="buttonLink" class="w-full p-[8px] border border-[#efefef] rounded-md text-text" />
          </div>
        </div>
        <div class="w-full flex flex-col gap-[10px] items-start">
          <div class="w-full flex flex-col justify-start items-start gap-[2px]">
            <small>Resim 1</small>
            <img :src="imagePreview1" alt="Preview" class="w-full h-[300px] object-contain border rounded-md" />
          </div>
          <label class="w-full">
            <span class="w-full block bg-main-shadow hover:bg-main duration-200 text-main hover:text-white text-[20px] font-mono font-extrabold text-center p-[4px] rounded-md cursor-pointer">Resim Seçimi</span>
            <input id="image1" type="file" accept="image/*" @change="(event) => handleImageChange(event, 1)" class="hidden" />
          </label>
        </div>
      </div>
      <!-- Icons -->
      <div class="w-full py-[24px] flex flex-col justify-start items-start gap-[2px]">
        <small>İkonlar</small>
        <div class="w-full flex justify-center items-center gap-[20px] flex-wrap">
          <div v-for="(icon, index) in icons" :key="icon" class="relative h-[90px] w-[120px] text-[12px] flex flex-col justify-center items-center border border-main-shadow rounded-md">
            <button @click="deleteIcon(index)" class="absolute top-[-13px] right-[-9px] text-red-600 text-[24px]"><font-awesome-icon icon="fa-solid fa-circle-xmark" /></button>
            <img class="w-[50px] aspect-square" :src="icon.preview ? icon.preview : getImageFromUploads(icon.icon)" />
            <span>{{ icon.name }}</span>
          </div>
          <div class="h-[90px] w-[120px] flex flex-col justify-center items-center border border-green-600 rounded-md">
            <button @click="openIconModal" class="text-green-600 text-[24px]"><font-awesome-icon icon="fa-solid fa-plus" /></button>
          </div>
        </div>
      </div>
    </div>
    <!-- Section 2 -->
    <div class="w-full flex gap-[20px]">
      <div class="w-full flex flex-col gap-[10px] items-start">
        <div class="w-full flex flex-col justify-start items-start gap-[2px]">
          <small>Resim 2</small>
          <img :src="imagePreview2" alt="Preview" class="w-full h-[300px] object-contain border rounded-md" />
        </div>
        <label class="w-full">
          <span class="w-full block bg-main-shadow hover:bg-main duration-200 text-main hover:text-white text-[20px] font-mono font-extrabold text-center p-[4px] rounded-md cursor-pointer">Resim Seçimi</span>
          <input id="image2" type="file" accept="image/*" @change="(event) => handleImageChange(event, 2)" class="hidden" />
        </label>
      </div>
      <div class="w-full flex flex-col gap-[10px] justify-start items-start">
        <div class="w-full flex flex-col justify-start items-start gap-[2px]">
          <small>Özellikler</small>
          <div class="w-full relative flex items-center" v-for="(prop, index) in properties" :key="prop">
            <input type="text" v-model="properties[index]" class="properties w-full p-[8px] pr-[24px] border border-[#efefef] rounded-md text-text" />
            <button @click="deleteFromPropsArray(index)" class="absolute right-[4px] text-red-600 text-[24px]"><font-awesome-icon icon="fa-solid fa-circle-xmark" /></button>
          </div>
          <div class="w-full relative flex items-center"> 
            <input v-model="newProperty" type="text" placeholder="Yeni Özellik" class="properties w-full p-[8px] pr-[24px] border border-[#efefef] rounded-md text-text" />
            <button @click="add4PropsArray" class="absolute right-[6px] text-green-600 text-[24px]"><font-awesome-icon icon="fa-solid fa-plus" /></button>
          </div>
        </div>
      </div>
    </div>
    <!-- YoutubeLink -->
    <div class="w-full">
      <div class="w-full flex flex-col justify-start items-start gap-[2px]">
        <small>Youtube Linki</small>
        <input name="youtubeLink" id="youtubeLink" type="text" v-model="youtubeLink" class="w-full p-[8px] border border-[#efefef] rounded-md text-text" />
      </div>
    </div>

    <!-- Icon Modal -->
    <transition name="modal">
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
        <div class="relative w-[360px] max-w-full flex flex-col justify-center items-center gap-3 bg-white p-5 rounded-lg shadow-lg transition-transform duration-300 transform"
            :class="{'scale-100': isModalOpen, 'scale-95': !isModalOpen}">
          <button @click="closeIconModal" class="bg-main text-white absolute top-0 right-0 px-2 py-1">x</button>
          <h3 class="w-full text-lg font-semibold">Yeni İkon Ekle</h3>
          <div class="flex w-full flex-col items-center border-dashed border-2 border-gray-400 p-4 rounded-md cursor-pointer" @click="fileInput.click()">
            <input type="file" accept="image/*" ref="fileInput" @change="handleIconChange" class="hidden" />
            <span class="text-gray-600">Sürükleyin veya tıklayın</span>
            <span class="text-gray-400">Dosya Seç</span>
          </div>
          <div v-if="iconPreview" class="icon-preview w-full h-[200px] p-[10px] border border-gray-300 flex justify-center items-center bg-gray-100">
            <img :src="iconPreview" alt="Icon Preview" class="w-full h-full object-contain" />
          </div>
          <input type="text" v-model="iconName" placeholder="İkon Adı" class="w-full p-2 border border-gray-300 rounded-md" />
          <button @click="saveIcon" class="w-full bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Kaydet</button>
        </div>
      </div>
    </transition>
  </div>
</template>