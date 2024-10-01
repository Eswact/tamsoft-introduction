<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }
    const handleGoHome = () => {
        router.push('/home')
    }
</script>

<template>
    <section class="bg-white dark:bg-dark">
        <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div class="flex flex-col items-center max-w-sm mx-auto text-center">
                <img loading="lazy" src="../images/404.gif" alt="404 Not Found" />
                <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Sayfa Bulunamadı</h1>
                <p class="mt-4 text-gray-500 dark:text-gray-400">Aradığınız sayfa mevcut değil. İşte bazı yararlı bağlantılar:</p>
                <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                    <button @click="handleGoBack" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 shadow-sm">
                        <font-awesome-icon class="pt-[2px]" icon="fa-solid fa-arrow-left-long" />
                        <span>Geri Dön</span>
                    </button>
                    <button @click="handleGoHome" class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-main rounded-lg shrink-0 sm:w-auto shadow-sm shadow-main-shadow hover:shadow-lg hover:bg-third hover:shadow-third-shadow">
                        Anasayfaya Dön
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>