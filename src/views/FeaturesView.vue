<script setup>
    import { onMounted, onBeforeUnmount, ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import { useFadeIn } from '../scripts/common';
    const modules = [Autoplay, Pagination, Navigation];
    useFadeIn();

    const itemsToShow = ref(4);
    const latestBooks = ref([]);
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1600) {
        itemsToShow.value = 4;
        } else if (windowWidth >= 1280) {
        itemsToShow.value = 3;
        } else if (windowWidth >= 840) {
        itemsToShow.value = 2;
        } else {
        itemsToShow.value = 1;
        }
    };
    onMounted(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        onBeforeUnmount(() => {
            window.removeEventListener('resize', handleResize);
        });
    });
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div class="w-full flex flex-col gap-[20px] relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <!-- swiper -->
        <div class="w-full bg-main-light dark:bg-main-shadow pb-[20px] shadow-md shadow-main-shadow">
            <swiper
            :slidesPerView="1"
            :loop="true"
            :grabCursor="true"
            :pagination="{
                clickable: true,
            }"
            :autoplay="{
                delay: 4000,
                disableOnInteraction: true,
            }"
            :modules="modules"
            class="w-full min-h-[340px]"
            >
                <swiper-slide class="w-full h-full">
                    <div class="w-full h-full flex justify-center items-center">
                        <div class="w-full max-w-[1600px] flex flex-col gap-[60px] sm:gap-[30px] justify-center items-center pt-[20px] pb-[40px]">
                            <div class="w-full px-[80px] md:px-[20px] flex lg:flex-col-reverse justify-center items-center">
                                <div class="relative w-[50%] xl:w-[60%] lg:w-full px-[28px] pb-[24px] pt-[16px] flex flex-col gap-[20px]">
                                    <div class="border-t-[2px] border-l-[2px] border-main dark:border-white w-[64px] h-[64px] absolute left-0 top-0"></div>
                                    <div class="hidden md:block border-t-[2px] border-r-[2px] border-main dark:border-white w-[64px] h-[64px] absolute right-0 top-0"></div>
                                    <h1 class="text-[2.25rem] font-bold text-dark dark:text-white">Muhasebenizi Kolaylaştırın</h1>
                                    <p class="text-[1.2rem] text-text dark:text-white">Yüzlerce fatura, irsaliye ve diğer dökümanlarınızı manuel olarak takip etmeye çalışmak zor olabilir. Ancak Tamsoft Ön Muhasebe Programı, muhasebe süreçlerinizi otomatize ederek, hatasız ve hızlı bir iş akışı sunar.</p>
                                    <div class="hidden md:block border-b-[2px] border-l-[2px] border-main dark:border-white w-[64px] h-[64px] absolute left-0 bottom-0"></div>
                                    <div class="border-b-[2px] border-r-[2px] border-main dark:border-white w-[64px] h-[64px] absolute right-0 bottom-0"></div>
                                </div>
                                <div class="w-[50%] xl:w-[40%] md:w-full flex justify-center items-center">
                                    <img class="w-full max-w-[410px] xl:max-w-[300px] max-h-[320px] xl:max-h-[210px] object-cover object-bottom" src="../images/trafficData.gif">
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="w-full h-full">
                    <div class="w-full h-full flex justify-center items-center">
                        <div class="w-full max-w-[1600px] flex flex-col gap-[60px] sm:gap-[30px] justify-center items-center pt-[20px] pb-[40px]">
                            <div class="w-full px-[80px] md:px-[20px] flex lg:flex-col-reverse justify-center items-center">
                                <div class="relative w-[50%] xl:w-[60%] lg:w-full px-[28px] pb-[24px] pt-[16px] flex flex-col gap-[20px]">
                                    <div class="border-t-[2px] border-l-[2px] border-main dark:border-white w-[64px] h-[64px] absolute left-0 top-0"></div>
                                    <div class="hidden md:block border-t-[2px] border-r-[2px] border-main dark:border-white w-[64px] h-[64px] absolute right-0 top-0"></div>
                                    <h1 class="text-[2.25rem] font-bold text-dark dark:text-white">Muhasebenizi Kolaylaştırın</h1>
                                    <p class="text-[1.2rem] text-text dark:text-white">Yüzlerce fatura, irsaliye ve diğer dökümanlarınızı manuel olarak takip etmeye çalışmak zor olabilir. Ancak Tamsoft Ön Muhasebe Programı, muhasebe süreçlerinizi otomatize ederek, hatasız ve hızlı bir iş akışı sunar.</p>
                                    <div class="hidden md:block border-b-[2px] border-l-[2px] border-main dark:border-white w-[64px] h-[64px] absolute left-0 bottom-0"></div>
                                    <div class="border-b-[2px] border-r-[2px] border-main dark:border-white w-[64px] h-[64px] absolute right-0 bottom-0"></div>
                                </div>
                                <div class="w-[50%] xl:w-[40%] md:w-full flex justify-center items-center">
                                    <img class="w-full max-w-[410px] xl:max-w-[300px] max-h-[320px] xl:max-h-[210px] object-cover object-bottom" src="../images/trafficData.gif">
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="w-full h-full">
                    <div class="w-full h-full flex justify-center items-center">
                        <div class="w-full max-w-[1600px] flex flex-col gap-[60px] sm:gap-[30px] justify-center items-center pt-[20px] pb-[40px]">
                            <div class="w-full px-[80px] md:px-[20px] flex lg:flex-col-reverse justify-center items-center">
                                <div class="relative w-[50%] xl:w-[60%] lg:w-full px-[28px] pb-[24px] pt-[16px] flex flex-col gap-[20px]">
                                    <div class="border-t-[2px] border-l-[2px] border-main dark:border-white w-[64px] h-[64px] absolute left-0 top-0"></div>
                                    <div class="hidden md:block border-t-[2px] border-r-[2px] border-main dark:border-white w-[64px] h-[64px] absolute right-0 top-0"></div>
                                    <h1 class="text-[2.25rem] font-bold text-dark dark:text-white">Muhasebenizi Kolaylaştırın</h1>
                                    <p class="text-[1.2rem] text-text dark:text-white">Yüzlerce fatura, irsaliye ve diğer dökümanlarınızı manuel olarak takip etmeye çalışmak zor olabilir. Ancak Tamsoft Ön Muhasebe Programı, muhasebe süreçlerinizi otomatize ederek, hatasız ve hızlı bir iş akışı sunar.</p>
                                    <div class="hidden md:block border-b-[2px] border-l-[2px] border-main dark:border-white w-[64px] h-[64px] absolute left-0 bottom-0"></div>
                                    <div class="border-b-[2px] border-r-[2px] border-main dark:border-white w-[64px] h-[64px] absolute right-0 bottom-0"></div>
                                </div>
                                <div class="w-[50%] xl:w-[40%] md:w-full flex justify-center items-center">
                                    <img class="w-full max-w-[410px] xl:max-w-[300px] max-h-[320px] xl:max-h-[210px] object-cover object-bottom" src="../images/trafficData.gif">
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!-- features -->
        <div class="w-full relative flex justify-center items-center">
            <div class="w-full relative flex flex-col gap-[80px] justify-center items-center pt-[20px]">
                <!-- cards -->
                <div class="w-full max-w-[1600px] flex flex-col justify-center items-center gap-[32px]">
                    <div class="w-full max-w-[1000px] flex flex-col justify-center items-center gap-[10px]">
                        <p class="h-[16px] text-[1.2rem] font-bold text-third">Tüm Özellikler</p>
                        <h2 class="text-[2rem] text-center font-bold">Tamsoft ile yapabilecekleriniz </h2>
                        <p class="text-center text-[1.125rem] text-text dark:text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis distinctio doloribus hic? Quidem impedit ut dicta natus, asperiores fugit. Atque non cupiditate dolorum odio, totam rem eius vel natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis distinctio doloribus hic? Quidem impedit ut dicta natus, asperiores fugit. Atque non cupiditate dolorum odio, totam rem eius vel natus.
                        </p>
                    </div>
                    <div class="grid grid-cols-3 place-items-center gap-[40px] xl:gap-[20px] lg:gap-[30px] lg:grid-cols-2 md:grid-cols-1">
                        <a href="#stockManagement" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-layer-group" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">Stok Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">İşletmelerin stoklarını etkin ve verimli bir şekilde yönetmelerine yardımcı olacak birçok özellik sunuyor.</span>     
                        </a>
                        <a href="#cariManagement" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-users" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">Cari Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">İşletmelerin cari hesaplarını etkin bir şekilde yönetmelerine olanak sağlayan kapsamlı bir çözümdür</span>     
                        </a>
                        <a href="#buyManagement" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-cart-shopping" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">Satın Alma</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">İşletmeler için etkili bir satın alma süreci yönetimini sağlayan bir sistem olarak geliştirilmiştir.</span>     
                        </a>
                        <a href="#sellManagement" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-store" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">Satış Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Satış yönetimi ile satışlarınızın planlanması, yürütülmesi ve denetlenmesi artık çok kolay.</span>     
                        </a>
                        <a href="#" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-sack-dollar" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">Finans Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Finansal yönetim ile Para, fon ve sermayenize dijital ortamda da hakim olun.</span>     
                        </a>
                        <a href="#" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-cash-register" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">Market Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Market modülü mükemmel entegrasyonu sayesinde Perakende de elinizi güçlendirir, işinizi kolaylaştırır.</span>     
                        </a>
                        <a href="#" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-address-book" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">CRM Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Müşteri ilişkileri yönetimi ile mevcut ve potansiyel müşterileri bağlantılarınızı yönetmek çok kolay.</span>     
                        </a>
                        <a href="#" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-circle-nodes" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">Entegrasyon</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Entegrasyon işlemleri ile veri akışı ve veri transferi artık çok kolay ve kullanışlı.</span>     
                        </a>
                        <a href="#" class="fade-in group relative cursor-pointer w-[360px] max-w-full h-[220px] px-[24px] pt-[40px] pb-[20px] flex flex-col gap-[18px] justify-start items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-comments-dollar" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-black group-hover:text-third max-w-[220px] text-center">E-Ticaret</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Yerinizden kalkmadan tüm E-Ticaret işlemlerinizi yapmanın tadını çıkarın.</span>     
                        </a>
                    </div>
                </div>
                <!-- sections -->
                <div class="w-full flex flex-col justify-center items-center">
                    <div id="stockManagement" class="w-full relative bg-third-light  px-[10px] py-[60px] flex flex-col justify-center items-center">
                        <div class="bottomWave top-[-30px] thirdWave h-[30px]"></div>
                        <div class="w-full max-w-[1600px] flex flex-col gap-[20px] justify-center items-center">
                            <div class="w-full flex justify-between items-center">
                                <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[30px] max-w-[50%] px-[30px] lg:p-[20px]">
                                    <!-- <div class="bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-layer-group" /></div> -->
                                    <p class="h-0 text-[1.2rem] font-bold text-third">Stok Yönetimi</p>
                                    <h2 class="text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[10px] md:pl-0">Tamsoft stok yönetim modülü</h2>
                                    <div class="relative flex flex-col gap-[20px] text-[1.2rem] font-semibold sm:text-[1.1rem] p-[10px] text-justify">
                                        <p>Tamsoft'un Ön Muhasebe Programı Stok Yönetimi modülü, işletmelere stoklarını her yerden ve her zaman yönetme imkanı sunan bulut tabanlı bir sistemdir. Detaylı stok kartları, esnek birim ve barkod yönetimi, grup ve kategori yönetimi gibi özelliklerle stokları etkin şekilde takip etmeyi sağlar. Çoklu şube ve depo yönetimi, fiyatlandırma stratejilerinin esnek yönetimi ile stokları optimize etmeye olanak tanır.</p>
                                        <p>Ayrıca, mobil uygulama entegrasyonu sayesinde saha satışları, şubeler arası sevkiyat ve hızlı fiyat güncelleme işlemleri kolayca yapılabilir. Bu özellikler, işletmelerin maliyetleri düşürerek stok yönetiminde verimliliği artırmasına yardımcı olur.</p>
                                    </div>
                                </div>
                                <div class="relative w-[45%] h-[500px] lg:hidden p-[50px]">
                                    <img class="fade-in w-full h-full object-cover rounded-lg shadow-[50px_50px_0_0] shadow-third-shadow"
                                        src="https://mldzgea2x0cc.i.optimole.com/mldzgea2x0cc-tmsftcm-cndteem/w:auto/h:auto/q:auto/https://tamsoft.com.tr/wp-content/uploads/Tamsoft-bulut-yazilimi-depo-stok-yonetimi-02-1024x683.jpg">
                                </div>
                            </div>
                            <div class="w-full px-[50px] pt-[40px] sm:p-0 md:p-[20px] flex flex-wrap justify-center items-center gap-[20px]">
                                <swiper
                                :slidesPerView=itemsToShow
                                :loop="true"
                                :grabCursor="true"
                                :pagination="{
                                    clickable: true,
                                }"
                                :autoplay="{
                                    delay: 4000,
                                    disableOnInteraction: true,
                                }"
                                :modules="modules"
                                class="w-full min-h-[210px]"
                                >
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Uzaktan Erişim</h4>
                                                <p class="text-[1rem] text-text">Bulut teknolojisi ile stoklara her yerden erişim.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Detaylı Stok Kartları</h4>
                                                <p class="text-[1rem] text-text">Mamul, hizmet, seri numarası ve parti lot gibi stokların detaylı takibi.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Esnek Birim ve Barkod Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Farklı birimlerde stok takibi ve birime özgü barkod oluşturma.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Grup ve Kategori Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Farklı fiyat tiplerinin tanımlanması ve cari hesaplarla ilişkilendirilmesi.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Fiyat Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Saha satış operasyonlarında stokların plasiyerlere atanması.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Çoklu Şube ve Depo Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Mobil cihazlarla sipariş, mal kabul ve sevkiyat işlemleri.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Saha Satış Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Satış fiyatlarının anında güncellenmesi.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Entegrasyon ve Mobilite</h4>
                                                <p class="text-[1rem] text-text">Bulut teknolojisi ile stoklara her yerden erişim.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Hızlı Fiyat Güncelleme</h4>
                                                <p class="text-[1rem] text-text">Bulut teknolojisi ile stoklara her yerden erişim.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                        <div class="topWave bottom-[-30px] thirdWave h-[30px]"></div>
                    </div>
                    <div id="cariManagement" class="w-full relative  px-[10px] py-[60px] flex flex-col justify-center items-center">
                        <div class="w-full max-w-[1600px] flex flex-col gap-[20px] justify-center items-center">
                            <div class="w-full flex justify-between items-center">
                                <div class="relative w-[45%] h-[500px] lg:hidden p-[50px]">
                                    <img class="fade-in w-full h-full object-cover rounded-lg shadow-[-50px_-50px_0_0] shadow-third-shadow"
                                        src="https://mldzgea2x0cc.i.optimole.com/mldzgea2x0cc-tmsftcm-cndteem/w:auto/h:auto/q:auto/https://tamsoft.com.tr/wp-content/uploads/Tamsoft-bulut-yazilimi-eticaret-yonetimi-04-1024x683.jpg">
                                </div>
                                <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[30px] max-w-[50%] px-[30px] lg:p-[20px]">
                                    <p class="h-0 text-[1.2rem] font-bold text-third">Cari Yönetimi</p>
                                    <h2 class="text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[10px] md:pl-0">Tamsoft cari yönetim modülü</h2>
                                    <div class="relative flex flex-col gap-[20px] text-[1.2rem] sm:text-[1.1rem] p-[10px] text-justify">
                                        <p>Tamsoft Cari Yönetimi, işletmelerin müşteriler ve tedarikçilerle olan tüm ticari işlemlerini etkin bir şekilde yönetmelerini sağlayan kapsamlı bir çözümdür. Gerçek zamanlı bilgi takibi, farklı para birimleri ile çalışabilme ve mobil erişim gibi özelliklerle finansal süreçleri daha şeffaf ve kontrol edilebilir hale getirir. E-Mutabakat ve E-Müstahsil gibi dijital çözümlerle muhasebe süreçleri daha hızlı ve hatasız bir şekilde yönetilir.</p>
                                        <p>Bu sistem, cari hesapları doğru bir şekilde yöneterek ticari ilişkilerin sürdürülebilir olmasını sağlar ve işletmelere daha sağlıklı finansal stratejiler oluşturma imkanı sunar. Hem alacakların hem de borçların takibi kolaylaşırken, enflasyon riskine karşı çeşitli önlemler de alınabilir.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full px-[50px] pt-[40px] sm:p-0 md:p-[20px] flex flex-wrap justify-center items-center gap-[20px]">
                                <swiper
                                :slidesPerView=itemsToShow
                                :loop="true"
                                :grabCursor="true"
                                :pagination="{
                                    clickable: true,
                                }"
                                :autoplay="{
                                    delay: 4000,
                                    disableOnInteraction: true,
                                }"
                                :modules="modules"
                                class="w-full min-h-[210px]"
                                >
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Uzaktan Erişim</h4>
                                                <p class="text-[1rem] text-text">Bulut teknolojisi ile stoklara her yerden erişim.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Detaylı Stok Kartları</h4>
                                                <p class="text-[1rem] text-text">Mamul, hizmet, seri numarası ve parti lot gibi stokların detaylı takibi.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Esnek Birim ve Barkod Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Farklı birimlerde stok takibi ve birime özgü barkod oluşturma.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Grup ve Kategori Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Farklı fiyat tiplerinin tanımlanması ve cari hesaplarla ilişkilendirilmesi.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Fiyat Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Saha satış operasyonlarında stokların plasiyerlere atanması.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Çoklu Şube ve Depo Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Mobil cihazlarla sipariş, mal kabul ve sevkiyat işlemleri.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Saha Satış Yönetimi</h4>
                                                <p class="text-[1rem] text-text">Satış fiyatlarının anında güncellenmesi.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Entegrasyon ve Mobilite</h4>
                                                <p class="text-[1rem] text-text">Bulut teknolojisi ile stoklara her yerden erişim.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide>
                                        <div class="w-full h-full flex justify-center items-center">
                                            <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start w-[340px] h-[150px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                <h4 class="text-[1.25rem] font-bold">Hızlı Fiyat Güncelleme</h4>
                                                <p class="text-[1rem] text-text">Bulut teknolojisi ile stoklara her yerden erişim.</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                    <div id="buyManagement" class="w-full relative bg-third-light  px-[10px] py-[60px] flex flex-col justify-center items-center">
                        <div class="bottomWave top-[-30px] thirdWave h-[30px]"></div>
                        <div class="w-full max-w-[1600px] flex flex-col gap-[20px] justify-center items-center">
                            <div class="w-full flex justify-between items-center">
                                <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[30px] max-w-[50%] px-[30px] lg:p-[20px]">
                                    <p class="h-0 text-[1.2rem] font-bold text-third">Satın Alma Yönetimi</p>
                                    <h2 class="text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[10px] md:pl-0">Tamsoft satın alma yönetim modülü</h2>
                                    <div class="relative flex flex-col gap-[20px] text-[1.2rem] font-semibold sm:text-[1.1rem] p-[10px] text-justify">
                                        <p>Tamsoft Satın Alma Yönetimi, işletmelerin satın alma süreçlerini etkili bir şekilde yönetmelerine olanak sağlayan kapsamlı bir sistemdir. Doğru stok yönetimi, mobil erişim, farklı satış kanalları için optimize edilmiş satın alma ve formüllü fiyatlandırma gibi özelliklerle, işletmelerin maliyetlerini kontrol altında tutarken kar marjlarını artırmalarına yardımcı olur. Bu sistem, satın alma süreçlerini daha verimli ve esnek hale getirerek işletmelere sürdürülebilir karlılık sağlar.</p>
                                        <p>Geniş işlevsellik yelpazesi ile işletmeler, tekliften faturalandırmaya kadar tüm satın alma adımlarını kolayca yönetebilir. Bu, işletmelere daha etkin bir maliyet yönetimi ve tedarik süreçlerinde esneklik kazandırır.</p>
                                    </div>
                                </div>
                                <div class="relative w-[45%] h-[500px] lg:hidden p-[50px]">
                                    <img class="fade-in w-full h-full object-cover rounded-lg shadow-[50px_50px_0_0] shadow-third-shadow"
                                        src="https://mldzgea2x0cc.i.optimole.com/cb:RTl3.d8a4/w:1024/h:683/q:mauto/f:best/https://tamsoft.com.tr/wp-content/uploads/Tamsoft-bulut-yazilimi-satinalma-yonetimi-02.jpg">
                                </div>
                            </div>
                            <div class="w-full px-[50px] flex justify-center items-center gap-[20px]">
                                <div>

                                </div>
                            </div>
                        </div>
                        <div class="topWave bottom-[-30px] thirdWave h-[30px]"></div>
                    </div>
                    <div id="sellManagement" class="w-full relative  px-[10px] py-[60px] flex flex-col justify-center items-center">
                        <div class="w-full max-w-[1600px] flex flex-col gap-[20px] justify-center items-center">
                            <div class="w-full flex justify-between items-center">
                                <div class="relative w-[45%] h-[500px] lg:hidden p-[50px]">
                                    <img class="fade-in w-full h-full object-cover rounded-lg shadow-[-50px_-50px_0_0] shadow-third-shadow"
                                        src="https://mldzgea2x0cc.i.optimole.com/cb:RTl3.d8a4/w:1024/h:683/q:mauto/f:best/https://tamsoft.com.tr/wp-content/uploads/Tamsoft-bulut-yazilimi-satis-yonetimi-2.jpg">
                                </div>
                                <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[30px] max-w-[50%] px-[30px] lg:p-[20px]">
                                    <p class="h-0 text-[1.2rem] font-bold text-third">Satış Yönetimi</p>
                                    <h2 class="text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[10px] md:pl-0">Tamsoft satış yönetim modülü</h2>
                                    <div class="relative flex flex-col gap-[20px] text-[1.2rem] sm:text-[1.1rem] p-[10px] text-justify">
                                        <p>Tamsoft Satış Yönetimi, işletmelerin satış işlemlerini entegre ve verimli bir şekilde yönetmelerine olanak tanıyan kapsamlı bir çözümdür. Tekliften faturalandırmaya kadar tüm satış süreçlerini kolayca yönetme, farklı müşteri gruplarına özel fiyat listeleri oluşturma ve sahada el terminali ile satış yapma gibi özelliklerle satış operasyonlarını optimize eder. Entegre modüller ve bulut teknolojisi ile işletmeler, satış verilerine her yerden erişim sağlayarak stratejik kararlarını bilinçli bir şekilde alabilirler.</p>
                                        <p>Bu sistem, çoklu şube yönetimi, farklı fiyat tiplerini cari hesaplara atama ve detaylı raporlama imkanlarıyla işletmelerin satış süreçlerini daha verimli hale getirir. İşletmelere sunduğu esneklik ve kapsamlı analizlerle müşteri ilişkilerini güçlendirir ve satış verimliliğini artırır.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full px-[50px] flex justify-center items-center gap-[20px]">
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .thirdWave {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23FAA5501A" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
    }
    .dark .thirdWave {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23FAA5505E" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
    }
    .topWave {
        position: absolute;
        left: 0;
        width: 100%;
        transform: rotate(180deg) scaleX(-1);
        background-repeat: repeat-x;
        background-size: contain;
        transition: all 200ms ease-in-out;
    }
    .bottomWave {
        position: absolute;
        left: 0;
        width: 100%;
        background-repeat: repeat-x;
        background-size: contain;
    }
</style>