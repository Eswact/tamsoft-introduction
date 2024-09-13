<script setup>
    import { useI18n } from 'vue-i18n';
    import { watch, onMounted } from 'vue';
    import { useHead } from '@unhead/vue';
    import { useRouter } from 'vue-router';

    const { locale, t } = useI18n();
    const currentLocale = locale;
    const router = useRouter();

    watch(locale, (newLocale) => { 
        const route = router.currentRoute.value;
        const metaKey = route.meta.i18nKey;

        if (metaKey) {
            const title = t(`${metaKey}.title`);
            const description = t(`${metaKey}.description`);
            const keywords = t(`${metaKey}.keywords`);

            // update Meta
            useHead({
                title: title || 'Varsayılan Başlık',
                meta: [
                    { name: 'description', content: description || 'Varsayılan Açıklama' },
                    { name: 'keywords', content: keywords || 'Varsayılan Anahtar Kelimeler' },
                ],
            });
        }
    });

    const switchLanguage = (lang) => {
        locale.value = lang;
        localStorage.setItem('selectedLanguage', lang);
    };

    onMounted(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            locale.value = savedLanguage;
        }
    });
</script>


<template>
    <div class="flex items-center justify-center">
        <img
            loading="lazy"
            @click="switchLanguage('tr')"
            :class="{ 'hidden': currentLocale !== 'en' }"
            class="w-[36px] md:w-[40px] cursor-pointer rounded-sm border-[1px] border-main dark:border-white"
            src="../images/tr-flag.png"
            alt="TR"
        />
        <img
            loading="lazy"
            @click="switchLanguage('en')"
            :class="{ 'hidden': currentLocale !== 'tr' }"
            class="w-[36px] md:w-[40px] cursor-pointer rounded-sm border-[1px] border-main dark:border-white"
            src="../images/uk-flag.png"
            alt="EN"
        />
    </div>
</template>