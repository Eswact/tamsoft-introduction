<script setup>
    import { RouterLink, useRoute } from 'vue-router'

    const route = useRoute()
    
    const isActive = (path) => {
        return route.path === path
    }

    const closeHamburgerMenu = () => {
        document.getElementById('hamburgerMenu').classList.remove('show');
    }
</script>

<template>
    <div id="hamburgerMenu" class="fixed w-full h-full p-[20px] flex-col justify-between bg-white dark:bg-dark">
        <!-- close -->
        <button @click="closeHamburgerMenu" class="absolute flex justify-center items-center text-main shadow-md bg-white border-[1px] border-main shadow-main-shadow rounded-[50%] right-[20px] top-[20px]"><font-awesome-icon class="text-[2rem]" icon="fa-solid fa-circle-xmark" /></button>
        <!-- navigation -->
        <nav class="flex flex-col items-start gap-[10px] text-text dark:text-white">
            <RouterLink class="py-[10px]" to="/">
                <img class="w-[200px] dark:hidden" loading="lazy" src="../images/tamsoft.png" alt="Tamsoft">
                <img class="w-[200px] hidden dark:block" loading="lazy" src="../images/tamsoft-dark.png" alt="Tamsoft">
            </RouterLink>
            <RouterLink @click="closeHamburgerMenu" :class="{ 'text-main': isActive('/features') }" class="p-[10px] flex items-center gap-[8px] mt-[10px]" to="/features"><span class="text-[1.4rem] font-semibold">{{ $t('features') }}</span></RouterLink>
            <RouterLink @click="closeHamburgerMenu" :class="{ 'text-main': isActive('/pricing') }" class="p-[10px] flex items-center gap-[8px]" to="/pricing"><span class="text-[1.4rem] font-semibold">{{ $t('pricing') }}</span></RouterLink>
            <RouterLink @click="closeHamburgerMenu" :class="{ 'text-main': isActive('/about') }" class="p-[10px] flex items-center gap-[8px]" to="/about"><span class="text-[1.4rem] font-semibold">{{ $t('about') }}</span></RouterLink>
            <RouterLink @click="closeHamburgerMenu" :class="{ 'text-main': isActive('/contact') }" class="p-[10px] flex items-center gap-[8px]" to="/contact"><span class="text-[1.4rem] font-semibold">{{ $t('contact') }}</span></RouterLink>
        </nav>
        <!-- buttons -->
        <div class="flex gap-[20px] py-[20px]">
            <a href="https://demo.tamsoft.com.tr/" target="_blank" class="gelatine text-[1.2rem] font-semibold border-[1px] border-main text-main shadow-sm shadow-main-shadow py-[8px] text-center w-[104px] rounded-md dark:text-white dark:border-white">{{ $t('login') }}</a>
            <a class="gelatine text-[1.2rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] text-center w-[104px] rounded-md dark:border-white">{{ $t('signup') }}</a>
        </div>
    </div>
</template>

<style scoped>
    #hamburgerMenu {
        display: none;
        opacity: 0;
        transform: translateY(-20px);
    }
    #hamburgerMenu.show {
        display: flex;
        animation: fadeInSlideRight 0.3s ease forwards;
    }
</style>