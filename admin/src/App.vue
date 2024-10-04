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
    <main :class="['pb-[120px]', { 'w-[calc(100%-80px)] md:w-full px-[54px] md:px-[24px] mt-[120px] ml-[80px] md:ml-0': showNavbar }]">
      <RouterView />
      <!-- saveNewChanges Modal -->
       <div v-if="showNavbar" id="saveNewChanges" class="fixed left-[80px] w-[calc(100%-80px)] py-[12px] px-[24px] bg-white border-t-[3px] border-[#ddd] bottom-0 flex-col justify-center items-center gap-[10px]">
          <span class="text-[14px] font-bold">Bazı değişiklikler farkedildi.</span>
          <div class="flex items-center gap-[20px]">
            <button id="saveChangesButton" class="py-[6px] px-[12px] text-[16px] font-mono font-bold rounded-lg text-white bg-green-600">Kaydet</button>
            <button class="py-[6px] px-[12px] text-[16px] font-mono font-bold rounded-lg text-white bg-red-600">Sıfırla</button>
          </div>
       </div>
    </main>
  </div>
</template>

<style scoped>
  #saveNewChanges { display: none; }
  #saveNewChanges.show { display: flex; }
</style>