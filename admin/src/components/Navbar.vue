<script setup>
    import { ref } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { useRoute, useRouter } from 'vue-router';
    import AjaxScripts from '@/scripts/ajaxScripts';
    import { switchLanguage, selectedLanguage } from '@/services/languageServices';

    const toggleLanguage = () => {
      const newLanguage = selectedLanguage.value === 'tr' ? 'en' : 'tr';
      switchLanguage(newLanguage);
    };

    const route = useRoute();
    const router = useRouter();

    const isActive = (path) => {
        return route.path === path;
    };

    const showNavbar = () => {
        document.getElementById('asideBar').classList.add('show');
    };
    const closeNavbar = () => {
        document.getElementById('asideBar').classList.remove('show')
    };

    const clearSessionStorage = () => {
        sessionStorage.clear();
    };
    const exit = async () => {
        let data = {};
        let onSuccess = function(res) {
            console.log(res);
            clearSessionStorage();
            router.push('/');
        }
        let onError = function(err) {
            console.error(err);
        }
        AjaxScripts.Logout({ data, onSuccess, onError });
    };
</script>

<template>
    <div>
      <!-- Navbar -->
      <aside id="asideBar" class="z-20 fixed flex flex-col gap-[28px] overflow-hidden left-0 top-0 h-full py-[34px] w-[80px] md:w-0 hover:w-[248px] md:hover:w-0 transition-all bg-second shadow-[0_2px_3px_3px] shadow-second-shadow md:shadow-none">
        <!-- Logo -->
        <div class="flex items-center gap-[12px] p-[12px]">
          <img class="rounded-lg bg-white h-[56px] w-[56px] px-[3px] pt-[4px] pb-[2px]" src="/logo.png" alt="logo" />
          <h1 class="text-[28px] font-bold block p-[6px] text-white">Tamsoft</h1>
        </div>
        <!-- Navigation Links -->
        <ul class="flex flex-col items-start justify-start gap-[2px] py-[20px] font-semibold">
          <li class="flex justify-start items-center w-full">
            <router-link title="Home" class="w-full h-full flex items-center gap-[20px] px-[18px] py-[12px] cursor-pointer text-white transition-all hover:bg-main" to="/home" @click="closeNavbar">
              <span :class="['p-[8px] w-[44px] border-box flex justify-center items-center', { 'bg-main rounded-lg': isActive('/home') }]">
                <font-awesome-icon class="min-w-[30px] flex justify-center items-center text-[26px]" icon="fa-solid fa-home"/>
              </span>
              <span class="text-[1.45rem] font-semibold">Home</span>
            </router-link>
          </li>
          <li class="flex justify-start items-center w-full">
            <router-link title="Features" class="w-full h-full flex items-center gap-[20px] px-[18px] py-[12px] cursor-pointer text-white transition-all hover:bg-main" to="/features" @click="closeNavbar">
              <span :class="['p-[8px] w-[44px] border-box flex justify-center items-center', { 'bg-main rounded-lg': isActive('/features') }]">
                <font-awesome-icon class="min-w-[30px] flex justify-center items-center text-[26px]" icon="fa-solid fa-award"/>
              </span>
              <span class="text-[1.45rem] font-semibold">Features</span>
            </router-link>
          </li>
          <li class="flex justify-start items-center w-full">
            <router-link title="Pricing" class="w-full h-full flex items-center gap-[20px] px-[18px] py-[12px] cursor-pointer text-white transition-all hover:bg-main" to="/pricing" @click="closeNavbar">
              <span :class="['p-[8px] w-[44px] border-box flex justify-center items-center', { 'bg-main rounded-lg': isActive('/pricing') }]">
                <font-awesome-icon class="min-w-[30px] flex justify-center items-center text-[26px]" icon="fa-solid fa-sack-dollar"/>
              </span>
              <span class="text-[1.45rem] font-semibold">Pricing</span>
            </router-link>
          </li>
        </ul>
      </aside>
  
      <!-- Header -->
      <header class="w-[calc(100%-80px)] md:w-full fixed top-0 left-[80px] md:left-0 h-[90px] bg-[#fff] justify-center items-center px-[50px] pt-[25px] md:px-[20px]">
        <nav class="w-full h-full px-[40px] md:px-[20px] py-[4px] flex items-center justify-between border-[1px] border-second bg-second-shadow rounded-md">
          <div class="flex items-center">
            <button @click="showNavbar" class="hidden md:block text-second hover:text-main text-[1.5rem] px-[4px]">
              <font-awesome-icon icon="fa-solid fa-bars"/>
            </button>
          </div>
          <div class="flex gap-[34px] md:gap-[20px] items-center justify-end">
            <!-- Settings Button -->
            <button @click="toggleLanguage" class="text-[1.5rem] px-[4px]">
              <img
                  loading="lazy"
                  :class="{ 'hidden': selectedLanguage != 'en' }"
                  class="w-[36px] md:w-[40px] cursor-pointer rounded-sm border-[1px] border-main dark:border-white"
                  src="../images/tr-flag.png"
                  alt="TR"
              />
              <img
                  loading="lazy"
                  :class="{ 'hidden': selectedLanguage != 'tr' }"
                  class="w-[36px] md:w-[40px] cursor-pointer rounded-sm border-[1px] border-main dark:border-white"
                  src="../images/uk-flag.png"
                  alt="EN"
              />
            </button>
            <!-- Logout Button -->
            <button @click="exit" class="text-main hover:text-main text-[1.5rem] px-[4px]">
              <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket"/>
            </button>
          </div>
        </nav>
      </header>
    </div>
</template>

<style scoped>
    #asideBar.show {
        display: flex;
        width: 100%;
    }
</style>