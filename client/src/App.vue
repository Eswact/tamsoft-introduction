<script setup>
  import { computed } from 'vue'
  import { RouterView, useRoute } from 'vue-router'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import HamburgerMenu from './components/HamburgerMenu.vue'

  const route = useRoute()
  const isNotFound = computed(() => route.name === 'not-found')

  if (typeof window !== 'undefined') {
    let ticking = false
    const scrollToTopButton = document.getElementById('scrollToTopButton')
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (scrollToTopButton) {
            const show = window.scrollY > 200
            scrollToTopButton.classList.toggle('opacity-0', !show)
            scrollToTopButton.classList.toggle('pointer-events-none', !show)
            scrollToTopButton.classList.toggle('opacity-100', show)
            scrollToTopButton.classList.toggle('pointer-events-auto', show)
          }
          ticking = false
        })
        ticking = true
      }
    }, { passive: true })
  }
</script>

<template>
  <HamburgerMenu class="z-30"/>
  <div class="w-full flex flex-col justify-center items-center">
    <!-- header -->
    <header v-if="!isNotFound" class="z-20 fixed top-0 left-0 w-full h-[100px] sm:h-[80px] flex justify-center items-center bg-white dark:bg-dark transition-all duration-500 shadow-md dark:shadow-dark">
      <Header />
    </header>
    <!-- main -->
    <main :class="{ 'mt-[100px] sm:mt-[80px]': !isNotFound }" class="z-10 w-full dark:text-white">
      <RouterView />
    </main>
    <!-- footer -->
    <footer class="w-full mt-[40px]" v-if="!isNotFound">
      <Footer />
    </footer>
  </div>
  <!-- whatsapp -->
  <a v-if="!isNotFound" class="whatsapp-logo bg-[#25D366] p-[4px] z-20 fixed bottom-[24px] right-[24px] lg:bottom-[10px] lg:right-[10px] overflow-hidden rounded-[50%]" target="_blank" href="https://web.whatsapp.com/send?phone=+902164412041&text=Merhaba+Tamsoft+Yaz%C4%B1l%C4%B1ma+Ho%C5%9Fgeldiniz."><img class="aspect-square w-[55px] lg:w-[50px] rounded-[50%]" src="/images/whatsapp-logo.png" alt="whatsapp logo"></a>
  <!-- arrow up -->
  <a href="#" id="scrollToTopButton" class="fixed text-[1.5rem] bottom-[30vh] right-0 z-30 py-[8px] pl-[12px] pr-[6px] bg-main text-white shadow-md transition-opacity duration-300 opacity-0 pointer-events-none" style="border-radius: 50% 0 0 50%;">
    <font-awesome-icon icon="fa-solid fa-chevron-up" />
  </a>

</template>