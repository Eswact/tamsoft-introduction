<script setup>
</script>

<template>
    <div class="w-full flex flex-col justify-center items-center border-t-[2px] border-dark dark:border-black bg-dark dark:bg-black text-white shadow-[0_-2px_2px_2px_#0926355e] dark:shadow-[0_-2px_2px_2px_rgba(0,0,0,0.3)]">
        <div class="w-full max-w-[1600px] px-[40px] pt-[50px] pb-[20px] lg:p-[20px] flex justify-between flex-wrap items-start lg:justify-center lg:items-center lg:flex-col">
            <div class="flex w-full max-w-[500px] p-[20px] flex-col justify-center items-start gap-[20px]">
                <img class="w-full max-w-[280px] ml-[-24px] md:ml-0" src="../images/tamsoft-dark.png" alt="Tamsoft">
                <p class="text-[1.2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam ab culpa cumque. Voluptatibus quos.</p>
                <div class="flex justify-end items-center gap-[20px] py-[10px] text-[1.5rem]">
                    <a class="hover:text-main duration-200" href=""><font-awesome-icon icon="fa-brands fa-facebook" size="lg" /></a> 
                    <a class="hover:text-main duration-200" href=""><font-awesome-icon icon="fa-brands fa-twitter" size="lg" /></a> 
                    <a class="hover:text-main duration-200" href=""><font-awesome-icon icon="fa-brands fa-instagram" size="lg" /></a> 
                    <a class="hover:text-main duration-200" href=""><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
                    <a class="hover:text-main duration-200" href=""><font-awesome-icon icon="fa-brands fa-youtube" size="lg" /></a> 
                </div>
            </div>
            <div class="flex items-start gap-[120px] 2xl:gap-[80px] xl:gap-[60px] lg:gap-[40px] px-[40px] py-[40px] xl:px-[20px] xl:py-[20px] lg:flex-col lg:w-full lg:max-w-[500px]">
                <div class="flex flex-col gap-[24px]">
                    <h3 class="text-[1.5rem] font-bold">{{$t('quickLinks')}}</h3>
                    <ul class="flex flex-col gap-[6px] text-[1.2rem] font-semibold px-[6px]">
                        <li class="hover:text-main duration-200"><a href="/">Home</a></li>
                        <li class="hover:text-main duration-200"><a href="/features">Features</a></li>
                        <li class="hover:text-main duration-200"><a href="/pricing">Pricing</a></li>
                        <li class="hover:text-main duration-200"><a href="/about">About</a></li>
                        <li class="hover:text-main duration-200"><a href="/contact">Contact</a></li>
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
        <div class="w-full flex items-center max-w-[1600px] border-t-[1px] px-[72px] lg:px-[6px] py-[6px] lg:justify-center text-[1.05rem]">
            <span>{{$t('copyright')}}</span>
        </div>
    </div>
</template>