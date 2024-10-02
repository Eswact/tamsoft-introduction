<script setup>
import { ref, watch } from 'vue';
import { selectedJson } from '@/services/languageServices';
import { getImageFromUploads, handleImageSelection } from '@/scripts/common';

const imagePreviews = ref([null, null]);
const newImages = ref([null, null]);

watch(
  () => selectedJson.value,
  (newVal) => {
    if (newVal && newVal.homePage) {
      imagePreviews.value[0] = getImageFromUploads(newVal.homePage.image1);
      imagePreviews.value[1] = getImageFromUploads(newVal.homePage.image2);
    }
  },
  { immediate: true }
);

const handleImageChange = (event, index) => {
  const selectedFile = event.target.files[0];
  handleImageSelection(selectedFile, imagePreviews.value, newImages.value, index);
};
</script>

<template>
  <div class="w-full flex flex-col gap-[20px]">
    <div class="w-full flex flex-col">
      <div class="w-full flex gap-[20px]">
        <div class="w-full flex flex-col gap-[10px] justify-start items-start">
          <div class="w-full flex flex-col justify-start items-start gap-[2px]">
            <small>Başlık</small>
            <input name="homeHeader" id="homeHeader" type="text" maxlength="50" :value="selectedJson.homePage.title" class="w-full p-[8px] border border-[#efefef] rounded-md text-text" />
          </div>
          <div class="w-full flex flex-col justify-start items-start gap-[2px]">
            <small>Açıklama</small>
            <textarea name="homeDescription" id="homeDescription" :value="selectedJson.homePage.description" class="w-full p-[8px] border border-[#efefef] rounded-md text-text min-h-[164px] max-h-[164px]"></textarea>
          </div>
          <div class="w-full flex flex-col justify-start items-start gap-[2px]">
            <small>Buton</small>
            <input name="buttonText" id="buttonText" type="text" maxlength="32" :value="selectedJson.homePage.buttonText" class="w-full p-[8px] border border-[#efefef] rounded-md text-text" />
            <input name="buttonLink" id="buttonLink" type="text" :value="selectedJson.homePage.buttonLink" class="w-full p-[8px] border border-[#efefef] rounded-md text-text" />
          </div>
        </div>
        <div class="w-full flex flex-col gap-[10px] items-start">
          <div class="w-full flex flex-col justify-start items-start gap-[2px]">
            <small>Resim 1</small>
            <img :src="imagePreviews[0]" alt="Preview" class="w-full h-[300px] object-contain border rounded-md" />
          </div>
          <label class="w-full">
            <span class="w-full block bg-main-shadow hover:bg-main duration-200 text-main hover:text-white text-[20px] font-mono font-extrabold text-center p-[4px] rounded-md cursor-pointer">Resim Seçimi</span>
            <input type="file" accept="image/*" @change="(event) => handleImageChange(event, 0)" class="hidden" />
          </label>
        </div>
      </div>
      <!-- icons -->
      <div class="py-[40px]">iCONS</div>
    </div>
    <div class="w-full flex gap-[20px]">
      <div class="w-full flex flex-col gap-[10px] items-start">
        <div class="w-full flex flex-col justify-start items-start gap-[2px]">
          <small>Resim 2</small>
          <img :src="imagePreviews[1]" alt="Preview" class="w-full h-[300px] object-contain border rounded-md" />
        </div>
        <label class="w-full">
          <span class="w-full block bg-main-shadow hover:bg-main duration-200 text-main hover:text-white text-[20px] font-mono font-extrabold text-center p-[4px] rounded-md cursor-pointer">Resim Seçimi</span>
          <input type="file" accept="image/*" @change="(event) => handleImageChange(event, 1)" class="hidden" />
        </label>
      </div>
      <div class="w-full flex flex-col gap-[10px] justify-start items-start">
        PROPS
      </div>
    </div>
    <div class="w-full">
      <div class="w-full flex flex-col justify-start items-start gap-[2px]">
        <small>Youtube Link</small>
        <input name="youtubeLink" id="youtubeLink" type="text" :value="selectedJson.homePage.youtubeLink" class="w-full p-[8px] border border-[#efefef] rounded-md text-text" />
      </div>
    </div>
  </div>
</template>
