<script setup>
    import { onMounted, onBeforeUnmount, ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import { useFadeIn } from '../scripts/common';
    import languageJson from '../locales/tr.json'

    const modules = [Autoplay, Pagination, Navigation];

    const propertiesPageJson = languageJson.propertiesPage;
    const bannerLength = propertiesPageJson.banners.length;
    const propCardLength = propertiesPageJson.allProps.cards.length;
    const propsLength = propertiesPageJson.allProps.props.length;

    const itemsToShow = ref(4);
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

    useFadeIn();
</script>

<template>
    <div class="w-full">
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
                    <swiper-slide class="w-full h-full" v-for="item in bannerLength" :key="item">
                        <div class="w-full h-full flex justify-center items-center">
                            <div class="w-full max-w-[1600px] flex flex-col gap-[60px] sm:gap-[30px] justify-center items-center pt-[20px] pb-[40px]">
                                <div class="w-full px-[80px] md:px-[20px] flex lg:flex-col-reverse justify-center items-center">
                                    <div class="relative w-[50%] xl:w-[60%] lg:w-full px-[28px] pb-[24px] pt-[16px] flex flex-col gap-[20px]">
                                        <div class="border-t-[2px] border-l-[2px] border-main dark:border-white w-[64px] h-[64px] absolute left-0 top-0"></div>
                                        <div class="hidden md:block border-t-[2px] border-r-[2px] border-main dark:border-white w-[64px] h-[64px] absolute right-0 top-0"></div>
                                        <h1 class="text-[2.25rem] font-bold text-dark dark:text-white">{{ $t(`propertiesPage.banners[${item-1}].header`) }}</h1>
                                        <p class="text-[1.2rem] text-text dark:text-white">{{ $t(`propertiesPage.banners[${item-1}].description`) }}</p>
                                        <div class="hidden md:block border-b-[2px] border-l-[2px] border-main dark:border-white w-[64px] h-[64px] absolute left-0 bottom-0"></div>
                                        <div class="border-b-[2px] border-r-[2px] border-main dark:border-white w-[64px] h-[64px] absolute right-0 bottom-0"></div>
                                    </div>
                                    <div class="w-[50%] xl:w-[40%] md:w-full flex justify-center items-center">
                                        <img class="w-full max-w-[410px] xl:max-w-[300px] max-h-[340px] xl:max-h-[240px] object-contain object-bottom" loading="lazy" :src="$t(`propertiesPage.banners[${item-1}].img`)" :alt="$t(`propertiesPage.banners[${item-1}].header`)">
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
                            <p class="h-[16px] text-[1.2rem] font-bold text-third">{{$t(`propertiesPage.allProps.head`)}}</p>
                            <h2 class="text-[2rem] text-center font-bold">{{$t(`propertiesPage.allProps.header`)}}</h2>
                            <p class="text-center text-[1.125rem] text-text dark:text-white">
                                {{$t(`propertiesPage.allProps.description`)}}
                            </p>
                        </div>
                        <div class="grid grid-cols-3 gap-[40px] xl:gap-[20px] lg:gap-[30px] lg:grid-cols-2 md:grid-cols-1">
                            <a v-for="item in propCardLength" :key="item" :href="$t(`propertiesPage.allProps.cards[${item-1}].href`)"  class="fade-in group relative cursor-pointer w-[360px] min-h-[240px] max-w-full px-[30px] py-[40px] flex flex-col gap-[18px] justify-center items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-transparent duration-400 dark:hover:bg-black hover:border-third hover:shadow-third-shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main-shadow group-hover:fill-third-shadow dark:group-hover:fill-third"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                                <div class="absolute top-[10px] left-[12px] p-[12px] bg-third group-hover:bg-third text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" :icon="$t(`propertiesPage.allProps.cards[${item-1}].icon`)" /></div>
                                <h4 class="text-[1.55rem] font-semibold text-black group-hover:text-third dark:text-main max-w-[220px] text-center">{{ $t(`propertiesPage.allProps.cards[${item-1}].header`) }}</h4>
                                <span class="text-[1.2rem] text-text text-center dark:text-white">{{ $t(`propertiesPage.allProps.cards[${item-1}].description`) }}</span>     
                            </a>                        
                        </div>
                    </div>
                    <!-- sections -->
                    <div v-for="item in propsLength" :key="item" class="w-full flex flex-col justify-center items-center">
                        <div v-if="item % 2 != 0"  :id="$t(`propertiesPage.allProps.props[${item-1}].id`)" class="w-full relative bg-third-light dark:bg-third-shadow  px-[10px] py-[60px] flex flex-col justify-center items-center">
                            <div class="bottomWave top-[-30px] thirdWave h-[30px]"></div>
                            <div class="w-full max-w-[1600px] flex flex-col gap-[20px] justify-center items-center">
                                <div class="w-full flex justify-between items-center">
                                    <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[30px] max-w-[50%] px-[30px] lg:p-[20px]">
                                        <p class="h-0 text-[1.2rem] font-bold text-third">{{ $t(`propertiesPage.allProps.props[${item-1}].head`) }}</p>
                                        <h2 class="text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[10px] md:pl-0">{{ $t(`propertiesPage.allProps.props[${item-1}].header`) }}</h2>
                                        <div class="relative flex flex-col gap-[20px] text-[1.2rem] font-semibold sm:text-[1.1rem] p-[10px] text-justify">
                                            <p>{{ $t(`propertiesPage.allProps.props[${item-1}].p1`) }}</p>
                                            <p>{{ $t(`propertiesPage.allProps.props[${item-1}].p2`) }}</p>
                                        </div>
                                    </div>
                                    <div class="relative w-[45%] h-[500px] lg:hidden p-[50px]">
                                        <img class="fade-in w-full h-full object-cover rounded-lg shadow-[50px_50px_0_0] shadow-third-shadow"
                                            loading="lazy"
                                            :src="$t(`propertiesPage.allProps.props[${item-1}].src`)"
                                            :alt="$t(`propertiesPage.allProps.props[${item-1}].head`)">
                                    </div>
                                </div>
                                <div v-if="propertiesPageJson.allProps.props[item-1].cards != ('' && null)" class="w-full px-[50px] pt-[40px] sm:p-0 md:p-[20px] flex flex-wrap justify-center items-center gap-[20px]">
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
                                    class="w-full min-h-[230px]"
                                    >
                                        <swiper-slide v-for="item2 in propertiesPageJson.allProps.props[item-1].cards.length" :key="item2">
                                            <div class="w-full h-full flex justify-center items-center">
                                                <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start max-w-full w-[350px] h-[170px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                    <h4 class="text-[1.25rem] font-bold dark:text-third">{{$t(`propertiesPage.allProps.props[${item-1}].cards[${item2-1}].header`)}}</h4>
                                                    <p class="text-[1rem] text-text">{{$t(`propertiesPage.allProps.props[${item-1}].cards[${item2-1}].description`)}}</p>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                            <div class="topWave bottom-[-30px] thirdWave h-[30px]"></div>
                        </div>
                        <div v-else :id="$t(`propertiesPage.allProps.props[${item-1}].id`)" class="w-full relative  px-[10px] py-[60px] flex flex-col justify-center items-center">
                            <div class="w-full max-w-[1600px] flex flex-col gap-[20px] justify-center items-center">
                                <div class="w-full flex justify-between items-center">
                                    <div class="relative w-[45%] h-[500px] lg:hidden p-[50px]">
                                        <img class="fade-in w-full h-full object-cover rounded-lg shadow-[-50px_-50px_0_0] shadow-third-shadow"
                                            loading="lazy"
                                            :src="$t(`propertiesPage.allProps.props[${item-1}].src`)"
                                            :alt="$t(`propertiesPage.allProps.props[${item-1}].head`)">
                                    </div>
                                    <div class="lg:w-full lg:max-w-[100%] lg:min-h-0 flex flex-col gap-[30px] max-w-[50%] px-[30px] lg:p-[20px]">
                                        <p class="h-0 text-[1.2rem] font-bold text-third">{{ $t(`propertiesPage.allProps.props[${item-1}].head`) }}</p>
                                        <h2 class="text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] font-bold pl-[10px] md:pl-0">{{ $t(`propertiesPage.allProps.props[${item-1}].header`) }}</h2>
                                        <div class="relative flex flex-col gap-[20px] text-[1.2rem] font-semibold sm:text-[1.1rem] p-[10px] text-justify">
                                            <p>{{ $t(`propertiesPage.allProps.props[${item-1}].p1`) }}</p>
                                            <p>{{ $t(`propertiesPage.allProps.props[${item-1}].p2`) }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="propertiesPageJson.allProps.props[item-1].cards != ('' && null)" class="w-full px-[50px] pt-[40px] sm:p-0 md:p-[20px] flex flex-wrap justify-center items-center gap-[20px]">
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
                                    class="w-full min-h-[230px]"
                                    >
                                        <swiper-slide v-for="item2 in propertiesPageJson.allProps.props[item-1].cards.length" :key="item2">
                                            <div class="w-full h-full flex justify-center items-center">
                                                <div class="p-[20px] flex flex-col gap-[10px] justify-start items-start max-w-full w-[350px] h-[170px] border-[2px] border-third bg-white rounded-lg shadow-md shadow-third-shadow">
                                                    <h4 class="text-[1.25rem] font-bold dark:text-third">{{$t(`propertiesPage.allProps.props[${item-1}].cards[${item2-1}].header`)}}</h4>
                                                    <p class="text-[1rem] text-text">{{$t(`propertiesPage.allProps.props[${item-1}].cards[${item2-1}].description`)}}</p>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                    </swiper>
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