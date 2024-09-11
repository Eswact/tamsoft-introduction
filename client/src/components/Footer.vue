<script setup>
</script>

<template>
    <div>
        <div class="footer-svg"></div>
        <div class="w-full flex flex-col justify-center items-center border-t-[2px] border-dark dark:border-black bg-dark dark:bg-black text-white">
            <div class="w-full max-w-[1600px] px-[40px] py-[20px] lg:p-[20px] flex justify-between flex-wrap items-start lg:justify-center lg:items-center sm:items-start lg:flex-col">
                <div class="flex w-full max-w-[400px] p-[20px] flex-col justify-center items-start gap-[20px]">
                    <img class="w-full max-w-[280px] ml-[-24px] md:ml-0" src="../images/tamsoft-dark.png" alt="Tamsoft">
                    <p class="text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam ab culpa cumque.</p>
                    <div class="flex justify-end items-center gap-[20px] py-[10px] text-[1.5rem]">
                        <a class="hover:text-main duration-200" target="_blank" :href="$t('social.facebook')"><font-awesome-icon icon="fa-brands fa-facebook" size="lg" /></a> 
                        <a class="hover:text-main duration-200" target="_blank" :href="$t('social.x')"><font-awesome-icon icon="fa-brands fa-twitter" size="lg" /></a> 
                        <a class="hover:text-main duration-200" target="_blank" :href="$t('social.instagram')"><font-awesome-icon icon="fa-brands fa-instagram" size="lg" /></a> 
                        <a class="hover:text-main duration-200" target="_blank" :href="$t('social.in')"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
                        <a class="hover:text-main duration-200" target="_blank" :href="$t('social.youtube')"><font-awesome-icon icon="fa-brands fa-youtube" size="lg" /></a> 
                    </div>
                </div>
                <div class="min-w-[calc(100%-400px)] flex flex-wrap items-start justify-end gap-[80px] full:gap-[60px] 2xl:gap-[40px] px-[10px] py-[40px] xl:px-[20px] xl:py-[20px] lg:flex-col">
                    <div class="flex flex-col gap-[24px]">
                        <h3 class="text-[1.5rem] font-bold 2xl:text-[1.25rem] md:text-[1.5rem]">{{$t('quickLinks')}}</h3>
                        <ul class="flex flex-col gap-[6px] text-[1.2rem] 2xl:text-[1rem] md:text-[1.2rem] font-semibold px-[6px]">
                            <li class="hover:text-main duration-200"><a href="/">{{$t("home")}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/features">{{$t("features")}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/pricing">{{$t("pricing")}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/about">{{$t("about")}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/contact">{{$t("contact")}}</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-[24px]">
                        <h3 class="text-[1.5rem] font-bold 2xl:text-[1.25rem] md:text-[1.5rem]">{{$t('softwares')}}</h3>
                        <ul class="flex flex-col gap-[6px] text-[1.2rem] 2xl:text-[1rem] md:text-[1.2rem] font-semibold px-[6px]">
                            <li class="hover:text-main duration-200"><a href="/">{{$t('tamsoft')}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/">{{$t('tampos')}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/">{{$t('tamsaha')}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/">{{$t('smartPos')}}</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-[24px]">
                        <h3 class="text-[1.5rem] font-bold 2xl:text-[1.25rem] md:text-[1.5rem]">{{$t('support')}}</h3>
                        <ul class="flex flex-col gap-[12px] text-[1.2rem] 2xl:text-[1rem] md:text-[1.2rem] font-semibold px-[6px]">
                            <li class="hover:text-main duration-200"><a class="flex items-start justify-start gap-[12px]" href="tel:+902162960777"><font-awesome-icon class="text-[24px] 2xl:text-[20px] pt-[4px]" icon="fa-solid fa-headset" /> <span>0216 296 0 777</span></a></li>
                            <li class="hover:text-main duration-200"><a class="flex items-start justify-start gap-[12px]" href="mailto:info@tamsoft.com.tr"><font-awesome-icon class="text-[24px] 2xl:text-[20px] pt-[4px]" icon="fa-solid fa-envelope" /> <span>info@tamsoft.com.tr</span></a></li>
                            <li class="hover:text-main duration-200"><a class="flex items-start justify-start gap-[12px]" href="https://www.google.com/maps/dir//Z%C3%BCmr%C3%BCtevler,+%C3%87aml%C4%B1ca+Barkod+Sistem+San.+Tic.+Ltd.+%C5%9Eti.,+Adalar+Sk.+No:14+Kat:6,+34852+Maltepe%2F%C4%B0stanbul/@40.9312371,29.1421348,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14cabb24ce3805dd:0x7dd31a904f2f25f2!2m2!1d29.150632!2d40.928546!3e0?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"><font-awesome-icon class="text-[24px] 2xl:text-[20px] pt-[4px]" icon="fa-solid fa-map" /> <span class="block max-w-[300px] 2xl:max-w-[220px] md:max-w-[300px] sm:max-w-full">{{ $t('contactPage.address') }}</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center max-w-[1600px] border-t-[1px] px-[60px] lg:px-[6px] py-[6px] lg:justify-center text-[1.05rem]">
                <span>{{$t('copyright')}}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer-svg {
        width: 100%;
        height: 40px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23092635" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
        background-repeat: repeat-x;
        background-size: contain;
    }
    .dark .footer-svg {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,186.7C672,160,768,128,864,133.3C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
    }
</style>
