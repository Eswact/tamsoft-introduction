<script setup>
    import { onMounted } from 'vue';
    import { useFadeIn } from '../scripts/common';
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
            <h1 class="text-[2.2rem] 2xl:text-[2rem] xl:text-[1.5rem] lg:text-center text-third font-bold underline">Yeni Nesil Ön Muhasebe Programı</h1>
            <p class="text-[1.25rem] 2xl:text-[1.2rem] xl:text-[1.1rem] font-semibold text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, odit unde. Sint, expedita quidem quos fugit similique quia maiores officia recusandae aut nobis culpa! Rem nisi facilis quod voluptas voluptatem!</p>
            <button class="text-[1.4rem] mt-[10px] font-bold px-[24px] py-[12px] border border-third rounded-xl bg-third-light text-third shadow-lg shadow-third-shadow hover:bg-third hover:text-white duration-200">Hemen Deneyin</button>
          </div>
        </div>
        <div class="fade-in lg:hidden w-[46%] 2xl:w-[42%] xl:w-[300px] xl:p-0 px-[4%] pt-[6%] pb-[2%] flex justify-center items-center">
          <img src="../images/report-bro.svg" alt="Tamsoft Ön Muhasebe Programı">
        </div>
      </div>
      <div class="fade-in w-full max-w-[1600px] flex justify-around items-center gap-[20px] flex-wrap">
        <div class="flex flex-col justify-center items-center w-[120px] rounded-lg text-text dark:text-white gap-[8px] ">
          <img class="w-[80px] xl:w-[64px]" src="../images/star.svg" alt="star">
          <span class="text-[1.25rem] xl:text-[1.1rem] font-semibold">Hızlı</span>
        </div>
        <div class="flex flex-col justify-center items-center w-[120px] rounded-lg text-text dark:text-white gap-[8px] ">
          <img class="w-[80px] xl:w-[64px]" src="../images/security.svg" alt="star">
          <span class="text-[1.25rem] xl:text-[1.1rem] font-semibold">Güvenilir</span>
        </div>
        <div class="flex flex-col justify-center items-center w-[120px] rounded-lg text-text dark:text-white gap-[8px] ">
          <img class="w-[80px] xl:w-[64px]" src="../images/bulb.svg" alt="star">
          <span class="text-[1.25rem] xl:text-[1.1rem] font-semibold">Çözüm Odaklı</span>
        </div>
        <div class="flex flex-col justify-center items-center w-[120px] rounded-lg text-text dark:text-white gap-[8px] ">
          <img class="w-[80px] xl:w-[64px]" src="../images/network.svg" alt="star">
          <span class="text-[1.25rem] xl:text-[1.1rem] font-semibold">Çok Yönlü</span>
        </div>
        <div class="flex flex-col justify-center items-center w-[120px] rounded-lg text-text dark:text-white gap-[8px] ">
          <img class="w-[80px] xl:w-[64px]" src="../images/chat.svg" alt="star">
          <span class="text-[1.25rem] xl:text-[1.1rem] font-semibold">Destek</span>
        </div>
      </div>
    </div>
    <div class="w-full relative py-[20px] sm:p-[28px] bg-main-light dark:bg-main-shadow flex flex-col justify-center items-center">
      <div class="bottomWave top-[-10px] mainWave h-[10px]"></div>
      <div class="w-full max-w-[1600px] flex justify-between items-center">
        <div class="fade-in w-[50%] p-[50px] xl:p-[40px] lg:hidden">
          <img src="../images/report-pana.svg" alt="">
        </div>
        <div class="w-[50%] lg:w-full flex justify-center items-center">
          <div class="fade-in w-[75%] sm:w-full bg-white flex flex-col gap-[32px] justify-start items-start p-[50px] xl:p-[30px] border rounded-lg shadow-xl">
            <div class="flex items-center justify-start gap-[28px] xl:gap-[16px]">
              <img class="w-[3.2rem] xl:w-[2rem]" src="../images/check.svg" alt="check">
              <span class="text-text text-[1.2rem] xl:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="flex items-center justify-start gap-[28px]">
              <img class="w-[3.2rem] xl:w-[2rem]" src="../images/check.svg" alt="check">
              <span class="text-text text-[1.2rem] xl:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="flex items-center justify-start gap-[28px]">
              <img class="w-[3.2rem] xl:w-[2rem]" src="../images/check.svg" alt="check">
              <span class="text-text text-[1.2rem] xl:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="flex items-center justify-start gap-[28px]">
              <img class="w-[3.2rem] xl:w-[2rem]" src="../images/check.svg" alt="check">
              <span class="text-text text-[1.2rem] xl:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="flex items-center justify-start gap-[28px]">
              <img class="w-[3.2rem] xl:w-[2rem]" src="../images/check.svg" alt="check">
              <span class="text-text text-[1.2rem] xl:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="flex items-center justify-start gap-[28px]">
              <img class="w-[3.2rem] xl:w-[2rem]" src="../images/check.svg" alt="check">
              <span class="text-text text-[1.2rem] xl:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div class="flex items-center justify-start gap-[28px]">
              <img class="w-[3.2rem] xl:w-[2rem]" src="../images/check.svg" alt="check">
              <span class="text-text text-[1.2rem] xl:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="topWave bottom-[-10px] mainWave h-[10px]"></div>
    </div>
    <!-- <div class="w-full relative flex flex-col justify-center items-center">
      <div class="w-full max-w-[1600px] py-[20px] px-[100px] 2xl:px-[50px] xl:p-[25px] sm:p-[20px] flex justify-between items-center lg:flex-col lg:gap-[40px]">
        <div class="flex flex-col gap-[20px] w-[50%] max-w-[600px] lg:max-w-full lg:w-full px-[20px] sm:px-0">
          <h2 class="text-[2.5rem] xl:text-[2rem] font-bold text-main">Tamsoft ile işine özgürlük kat</h2>
          <p class="text-[1.2rem] xl:text-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium possimus nostrum, laborum officia ratione exercitationem nulla quasi et fugiat voluptates, nisi eveniet. Officiis quae sequi fugit laudantium ea quia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo alias accusantium quasi quas reiciendis at tempore similique maiores adipisci, quia tempora corporis. Saepe temporibus atque laborum aliquam, mollitia non aliquid?
          </p>
        </div>
        <div class="w-[50%] lg:w-[100%] max-w-[50%] lg:max-w-full flex justify-center items-center px-[20px] sm:px-0">
          <iframe class="w-full max-w-[560px] aspect-[560/315] rounded-lg border-[2px] border-main shadow-lg shadow-main-shadow" src="https://www.youtube.com/embed/6xG7mXzOQW0?si=T9S6vYnSEbcFd8X9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div> -->
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