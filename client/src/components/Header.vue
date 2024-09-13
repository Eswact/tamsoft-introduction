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
                <img class="h-[58px] dark:hidden xl:hidden" loading="lazy" src="../images/tamsoft.png" alt="Tamsoft">
                <img class="h-[58px] hidden dark:block xl:dark:hidden" loading="lazy" src="../images/tamsoft-dark.png" alt="Tamsoft">
                <img class="h-[70px] hidden xl:block" loading="lazy" src="../images/logo.png" alt="Tamsoft">
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/features') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] relative group font-ptSans font-semibold" to="/features"> 
                <span class="text-[1.2rem] font-semibold">{{ $t('features') }}</span>
                <span :class="{ 'w-full': isActive('/features'), 'w-0': !isActive('/features') }" class="absolute left-0 bottom-0 h-[2px] bg-main transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/pricing') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] relative group font-ptSans font-semibold" to="/pricing">
                <span class="text-[1.2rem] font-semibold">{{ $t('pricing') }}</span>
                <span :class="{ 'w-full': isActive('/pricing'), 'w-0': !isActive('/pricing') }" class="absolute left-0 bottom-0 h-[2px] bg-main transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/about') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] relative group font-ptSans font-semibold" to="/about">
                <span class="text-[1.2rem] font-semibold">{{ $t('about') }}</span>
                <span :class="{ 'w-full': isActive('/about'), 'w-0': !isActive('/about') }" class="absolute left-0 bottom-0 h-[2px] bg-main transition-all duration-300 group-hover:w-full"></span>
            </RouterLink>
            <RouterLink :class="{ 'text-main': isActive('/contact') }" class="py-[6px] px-[12px] xl:px-[6px] flex items-center gap-[8px] relative group font-ptSans font-semibold" to="/contact"> 
                <span class="text-[1.2rem] font-semibold">{{ $t('contact') }}</span>
                <span :class="{ 'w-full': isActive('/contact'), 'w-0': !isActive('/contact') }" class="absolute left-0 bottom-0 h-[2px] bg-main transition-all duration-300 group-hover:w-full"></span>
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
                <a :href="$t('loginLink')" target="_blank" class="gelatine cursor-pointer text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main text-main shadow-sm shadow-main-shadow py-[6px] text-center w-[90px] md:w-[80px] rounded-md dark:text-white dark:border-white duration-200">{{ $t('login') }}</a>
                <a :href="$t('signupLink')" class="gelatine cursor-pointer text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[6px] text-center w-[90px] md:w-[80px] rounded-md dark:border-white duration-200">{{ $t('signup') }}</a>
            </div>
        </div>
    </div>
</template>