<script setup>
  import { computed } from 'vue'
  import { RouterView, useRoute } from 'vue-router'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import HamburgerMenu from './components/HamburgerMenu.vue'

  const route = useRoute()
  const isNotFound = computed(() => {
    return route.name === 'not-found'
  });
</script>

<template>
  <HamburgerMenu/>
  <div class="w-full flex flex-col justify-center items-center">
    <!-- header -->
    <header v-if="!isNotFound" class="w-full flex justify-center items-center bg-white dark:bg-dark transition-all duration-500">
      <Header />
    </header>
    <!-- main -->
    <main class="w-full dark:text-white">
      <RouterView />
    </main>
    <!-- footer -->
    <footer v-if="!isNotFound"></footer>
  </div>
</template>