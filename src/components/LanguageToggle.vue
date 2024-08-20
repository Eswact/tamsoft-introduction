<script setup>
    import { useI18n } from 'vue-i18n'
    import { onMounted } from 'vue'

    const { locale } = useI18n()
    const currentLocale = locale

    const switchLanguage = (lang) => {
        locale.value = lang
        localStorage.setItem('selectedLanguage', lang)
    }

    onMounted(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage')
        if (savedLanguage) {
            locale.value = savedLanguage
        }
    });
</script>

<template>
    <div class="flex items-center justify-center">
        <img
            @click="switchLanguage('tr')"
            :class="{ 'hidden': currentLocale !== 'en' }"
            class="w-[36px] sm:w-[40px] cursor-pointer"
            src="../images/tr-flag.png"
            alt="TR"
        />
        <img
            @click="switchLanguage('en')"
            :class="{ 'hidden': currentLocale !== 'tr' }"
            class="w-[36px] sm:w-[40px] cursor-pointer"
            src="../images/uk-flag.png"
            alt="EN"
        />
    </div>
</template>