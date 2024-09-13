<script setup>
    import { onMounted } from 'vue';
    import { useFadeIn } from '../scripts/common';
    import languageJson from '../locales/tr.json'
    const iconCount = languageJson.homePage.icons.length;
    const propertyCount = languageJson.homePage.properties.length;
    useFadeIn();
</script>

<template>
  <div class="w-full flex flex-col justify-start items-center gap-[80px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-third-light"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div class="relative w-full flex flex-col justify-start items-center gap-[20px] bg-gradient-to-b from-third-light to-transparent">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-third-light"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div class="w-full max-w-[1600px] px-[80px] lg:px-[40px] md:px-[10px] xl:py-[40px] flex justify-between items-center">
        <div class="fade-in lg:justify-center lg:w-full lg:items-center flex flex-col justify-start items-start xl:gap-[20px] w-[50%] 2xl:w-[55%]">
          <img class="w-[575px] 2xl:w-[420px] xl:w-[320px]" src="../images/tamsoft-text-logo.png" alt="Tamsoft">
          <div class="flex flex-col justify-start items-start lg:justify-center lg:items-center gap-[20px] xl:gap-[30px] px-[44px] xl:px-[20px]">
            <h1 class="text-[2.2rem] 2xl:text-[2rem] xl:text-[1.5rem] lg:text-center text-third font-bold underline">{{ $t('homePage.title') }}</h1>
            <p class="text-[1.25rem] 2xl:text-[1.2rem] xl:text-[1.1rem] font-semibold text-justify">{{ $t('homePage.description') }}</p>
            <a :href="$t('homePage.buttonLink')" class="text-[1.4rem] mt-[10px] font-bold px-[24px] py-[12px] border border-third rounded-xl bg-third-light text-third shadow-lg shadow-third-shadow hover:bg-third hover:text-white duration-200">{{ $t('homePage.buttonText') }}</a>
          </div>
        </div>
        <div class="fade-in lg:hidden w-[46%] 2xl:w-[42%] xl:w-[300px] xl:p-0 px-[4%] pt-[6%] pb-[2%] flex justify-center items-center">
          <img loading="lazy" src="../images/report-bro.svg" alt="Tamsoft Ön Muhasebe Programı">
        </div>
      </div>
      <div class="fade-in w-full max-w-[1600px] flex justify-around items-center gap-[20px] flex-wrap">
        <div v-for="item in iconCount" :key="item" class="flex flex-col justify-center items-center w-[120px] rounded-lg text-text dark:text-white gap-[8px] ">
          <img class="w-[80px] xl:w-[64px]" loading="lazy" :src="$t(`homePage.icons[${item-1}].icon`)" :alt="$t(`homePage.icons[${item-1}].name`)">
          <span class="text-[1.25rem] text-center xl:text-[1.1rem] font-semibold">{{ $t(`homePage.icons[${item-1}].name`) }}</span>
        </div>
      </div>
    </div>
    <div class="w-full relative py-[20px] sm:p-[28px] bg-main-light dark:bg-main-shadow flex flex-col justify-center items-center">
      <div class="bottomWave top-[-10px] mainWave h-[10px]"></div>
      <div class="w-full max-w-[1600px] flex justify-between items-center">
        <div class="w-[50%] p-[50px] xl:p-[40px] lg:hidden">
          <img class="fade-in" loading="lazy" src="../images/report-pana.svg" alt="Tamsoft Ön Muhasebe Programı">
        </div>
        <div class="w-[50%] lg:w-full flex justify-center items-center">
          <div class="fade-in w-[75%] sm:w-full bg-white flex flex-col gap-[32px] justify-start items-start p-[50px] xl:p-[30px] border rounded-lg shadow-xl">
            <div v-for="item in propertyCount" :key="item" class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
              <img class="w-[3.2rem] xl:w-[2rem]" loading="lazy" src="../images/check.svg" alt="check">
              <span class="text-text text-[1.2rem] xl:text-[1rem]">{{$t(`homePage.properties[${item-1}]`)}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="topWave bottom-[-10px] mainWave h-[10px]"></div>
    </div>
    <div class="w-full relative flex flex-col justify-center items-center">
      <div class="w-full max-w-[1600px] py-[20px] px-[100px] 2xl:px-[50px] xl:p-[25px] sm:p-[20px] flex justify-center items-center lg:flex-col lg:gap-[40px]">
        <div class="w-[100%] flex justify-center items-center px-[20px] sm:px-0">
          <iframe class="fade-in w-full aspect-[560/315] rounded-lg shadow-md" :src="$t('homePage.youtubeLink')" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .mainWave {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23C326401A" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  }
  .dark .mainWave {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23C326405E" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  }
  .topWave {
      position: absolute;
      left: 0;
      width: 100%;
      transform: rotate(180deg) scaleX(-1);
      background-repeat: repeat-x;
      background-size: contain;
      transition: all 200ms ease-in-out;
  }
  .bottomWave {
      position: absolute;
      left: 0;
      width: 100%;
      background-repeat: repeat-x;
      background-size: contain;
  }
</style>