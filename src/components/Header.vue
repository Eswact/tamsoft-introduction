<script setup>
    import { RouterLink, useRoute } from 'vue-router'
    import DarkModeToggle from './DarkModeToggle.vue'
    import LanguageToggle from './LanguageToggle.vue'

    const route = useRoute()
    
    const isActive = (path) => {
        return route.path === path
    }

    const openHamburgerMenu = () => {
        document.getElementById('hamburgerMenu').classList.add('show');
    }
</script>

<template>
    <div class="w-full h-full flex justify-between items-center max-w-[1600px] pt-[20px] pb-[10px] px-[20px] lg:px-[10px]">
        <nav class="flex items-center gap-[20px] xl:gap-[10px] text-text dark:text-white md:hidden">
            <RouterLink class="py-[6px] pr-[12px] xl:pr-[10px] xl:pl-[10px]" to="/">
                <img class="h-[58px] dark:hidden xl:hidden" src="../images/tamsoft.png" alt="Tamsoft">
                <img class="h-[58px] hidden dark:block xl:dark:hidden" src="../images/tamsoft-dark.png" alt="Tamsoft">
                <img class="h-[70px] hidden xl:block" src="../images/logo.png" alt="Tamsoft">
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/properties') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] hover:text-main" to="/properties"> 
                <!-- <font-awesome-icon class="text-[1.4rem] lg:text-[1.8rem]" icon="fa-solid fa-star" /> --> 
                <span class="text-[1.2rem] font-semibold">{{ $t('features') }}</span>
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/pricing') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px]  hover:text-main" to="/pricing">
                <!-- <font-awesome-icon class="text-[1.4rem] lg:text-[1.8rem]" icon="fa-solid fa-dollar-sign" /> -->
                <span class="text-[1.2rem] font-semibold">{{ $t('pricing') }}</span>
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/about') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px]  hover:text-main" to="/about">
                <!-- <font-awesome-icon class="text-[1.4rem] lg:text-[1.8rem]" icon="fa-solid fa-circle-info"/> -->
                <span class="text-[1.2rem] font-semibold">{{ $t('about') }}</span>
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/contact') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px]  hover:text-main" to="/contact"> 
                <!-- <font-awesome-icon class="text-[1.4rem] lg:text-[1.8rem]" icon="fa-solid fa-headset"/> --> 
                <span class="text-[1.2rem] font-semibold">{{ $t('contact') }}</span>
            </RouterLink>
        </nav>
        <div class="hidden md:block">
            <button @click="openHamburgerMenu"><font-awesome-icon class="text-[2rem] px-[6px] text-main dark:text-white" icon="fa-solid fa-bars"/></button>
        </div>
        <div class="flex items-center justify-end gap-[30px] xl:gap-[20px] lg:gap-[10px] md:gap-[30px]">
            <!-- language -->
            <LanguageToggle />
            <!-- darkmode -->
            <DarkModeToggle />
            <!-- buttons -->
            <div class="flex items-center justify-end gap-[12px] md:hidden">
                <a href="https://demo.tamsoft.com.tr/" target="_blank" class="gelatine cursor-pointer text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main text-main shadow-sm shadow-main-shadow py-[6px] text-center w-[90px] md:w-[80px] rounded-md dark:text-white dark:border-white duration-200">{{ $t('login') }}</a>
                <a class="gelatine cursor-pointer text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[6px] text-center w-[90px] md:w-[80px] rounded-md dark:border-white duration-200">{{ $t('signup') }}</a>
            </div>
        </div>
    </div>
</template>