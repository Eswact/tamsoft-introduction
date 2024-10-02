<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute();
const showNavbar = computed(() => {
  return route.path !== '/' && route.name !== 'notFound';
});
</script>

<template>
  <div>
    <Navbar v-if="showNavbar" />
    <main :class="['', { 'w-[calc(100%-80px)] md:w-full px-[54px] md:px-[24px] mt-[120px] ml-[80px] md:ml-0': showNavbar }]">
      <RouterView />
    </main>
  </div>
</template>