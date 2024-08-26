<script setup>
</script>

<template>
    <div>
        <div class="footer-svg"></div>
        <div class="w-full flex flex-col justify-center items-center border-t-[2px] border-dark dark:border-black bg-dark dark:bg-black text-white">
            <div class="w-full max-w-[1600px] px-[40px] py-[20px] lg:p-[20px] flex justify-between flex-wrap items-start lg:justify-center lg:items-center lg:flex-col">
                <div class="flex w-full max-w-[500px] p-[20px] flex-col justify-center items-start gap-[20px]">
                    <img class="w-full max-w-[280px] ml-[-24px] md:ml-0" src="../images/tamsoft-dark.png" alt="Tamsoft">
                    <p class="text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam ab culpa cumque. Voluptatibus quos.</p>
                    <div class="flex justify-end items-center gap-[20px] py-[10px] text-[1.5rem]">
                        <a class="hover:text-main duration-200" href=""><font-awesome-icon icon="fa-brands fa-facebook" size="lg" /></a> 
                        <a class="hover:text-main duration-200" href=""><font-awesome-icon icon="fa-brands fa-twitter" size="lg" /></a> 
                        <a class="hover:text-main duration-200" href="https://www.instagram.com/tamsoft_/"><font-awesome-icon icon="fa-brands fa-instagram" size="lg" /></a> 
                        <a class="hover:text-main duration-200" href="https://www.linkedin.com/company/%C3%A7aml%C4%B1ca-barkod/mycompany/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
                        <a class="hover:text-main duration-200" href="https://www.youtube.com/@tamsoft3257"><font-awesome-icon icon="fa-brands fa-youtube" size="lg" /></a> 
                    </div>
                </div>
                <div class="flex items-start gap-[120px] 2xl:gap-[80px] xl:gap-[60px] lg:gap-[40px] px-[40px] py-[40px] xl:px-[20px] xl:py-[20px] lg:flex-col lg:w-full lg:max-w-[500px]">
                    <div class="flex flex-col gap-[24px]">
                        <h3 class="text-[1.5rem] font-bold">{{$t('quickLinks')}}</h3>
                        <ul class="flex flex-col gap-[6px] text-[1.2rem] font-semibold px-[6px]">
                            <li class="hover:text-main duration-200"><a href="/">{{$t("home")}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/features">{{$t("features")}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/pricing">{{$t("pricing")}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/about">{{$t("about")}}</a></li>
                            <li class="hover:text-main duration-200"><a href="/contact">{{$t("contact")}}</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-[24px]">
                        <h3 class="text-[1.5rem] font-bold">{{$t('services')}}</h3>
                        <ul class="flex flex-col gap-[6px] text-[1.2rem] font-semibold px-[6px]">
                            <li class="hover:text-main duration-200"><a href="/">Service 3</a></li>
                            <li class="hover:text-main duration-200"><a href="/">Service 2</a></li>
                            <li class="hover:text-main duration-200"><a href="/">Service 1</a></li>
                            <li class="hover:text-main duration-200"><a href="/">Service</a></li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-[24px]">
                        <h3 class="text-[1.5rem] font-bold">{{$t('support')}}</h3>
                        <ul class="flex flex-col gap-[6px] text-[1.2rem] font-semibold px-[6px]">
                            <li class="hover:text-main duration-200"><a href="/">Support</a></li>
                            <li class="hover:text-main duration-200"><a href="/">Help</a></li>
                            <li class="hover:text-main duration-200"><a href="/">Help</a></li>
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
