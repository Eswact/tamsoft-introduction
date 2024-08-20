<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/Header.vue'
</script>

<template>
  <div class="w-full flex flex-col gap-[10px] justify-center items-center">
    <!-- header -->
    <Header />
    <!-- main -->
    <main class="w-full max-w-[1600px] px-[10px] dark:text-white">
      <RouterView />
    </main>
    <!-- footer -->
    <footer></footer>
  </div>
</template>