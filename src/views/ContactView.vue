<template>
    <div class="w-full flex flex-col justify-center items-center gap-[16px]">
        <!-- contact image -->
        <div class="w-full h-[304px] grid place-items-center bg-[#575456] shadow-lg shadow-[rgba(0,0,0,0.37)]">
            <div
                class="relative flex justify-center items-center w-full max-w-[1600px] h-[304px] before:absolute before:inset-0 before:right-auto before:pointer-events-none before:w-20 before:bg-gradient-to-r before:from-[#575456] before:to-[#57545600] before:z-20 after:absolute after:inset-0 after:left-auto after:pointer-events-none after:w-20 after:bg-gradient-to-l after:from-[#575456] after:to-[#57545600] after:z-20 2xl:before:w-0 2xl:after:w-0">
                <img class="w-full h-full object-cover object-bottom"
                    src="../images/contact.jpg">
                <div class="absolute inset-0 bg-black opacity-55 md:opacity-40"></div>
                <h1 class="absolute text-[4rem] md:text-[3rem] font-semibold text-white">{{$t('contactPage.header')}}</h1>
            </div>
        </div>
        <div class="w-full max-w-[1600px] flex flex-col gap-[40px] px-[40px] 3xl:px-[60px] 2xl:px-[40px] py-[40px] md:px-[20px] md:py-[20px] md:flex-col">
            <!-- contact infos -->
            <div class="w-full flex flex-wrap justify-around items-center md:items-start md:justify-start gap-[20px]">
                <div class="px-[20px] md:w-full flex items-center gap-[20px] border-b-1 sm:items-start">
                    <div class="text-[2rem] md:text-[1.5rem] p-[16px] md:p-[10px] rounded-[50%] flex justify-center items-center border border-main bg-main-light text-main dark:bg-main dark:text-white shadow-md shadow-main-shadow">
                        <font-awesome-icon class="w-[30px] flex justify-center items-center" icon="fa-solid fa-phone" />
                    </div>
                    <span class="text-[1.5rem] xl:text-[1.25rem] max-w-[300px] md:max-w-full sm:pt-[7px]">+90 216 441 20 41</span>
                </div>
                <div class="px-[20px] md:w-full flex items-center gap-[20px] border-b-1 sm:items-start">
                    <div class="text-[2rem] md:text-[1.5rem] p-[16px] md:p-[10px] rounded-[50%] flex justify-center items-center border border-main bg-main-light text-main dark:bg-main dark:text-white shadow-md shadow-main-shadow">
                        <font-awesome-icon class="w-[30px] flex justify-center items-center" icon="fa-solid fa-envelope" />
                    </div>
                    <span class="text-[1.5rem] xl:text-[1.25rem] max-w-[300px] md:max-w-full sm:pt-[7px]">info@camlica.com.tr</span>
                </div>
                <div class="px-[20px] md:w-full flex items-center gap-[20px] border-b-1 sm:items-start">
                    <div class="text-[2rem] md:text-[1.5rem] p-[16px] md:p-[10px] rounded-[50%] flex justify-center items-center border border-main bg-main-light text-main dark:bg-main dark:text-white shadow-md shadow-main-shadow">
                        <font-awesome-icon class="w-[30px] flex justify-center items-center" icon="fa-solid fa-location-dot" />
                    </div>
                    <span class="text-[1.25rem] max-w-[300px] md:max-w-full sm:pt-[7px]">{{ $t("contactPage.address") }}</span>
                </div>
            </div>
            <div class="w-full flex items-start md:items-center justify-between lg:flex-col-reverse gap-[30px]">
                <!-- contact form -->
                <div class="w-full max-w-[45%] lg:max-w-[100%] flex flex-col gap-[32px] text-text dark:text-white p-[20px] sm:p-0">
                    <div class="px-[6px]">
                        <h3 class="text-[2.25rem] font-semibold text-main">{{$t('contactPage.getInTouch')}}</h3>
                        <span class="text-[1.25rem] font-thin">{{$t('contactPage.description')}}</span>
                    </div>
                    <form class="flex flex-col gap-[20px] px-[4px]">
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <input class="w-full border-[2px] px-[20px] py-[10px] bg-[#FAF9F9] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" type="text" name="formName" id="formName" :placeholder="$t('contactPage.yourName')"/>
                        </div>
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <input class="w-full border-[2px] px-[20px] py-[10px] bg-[#FAF9F9] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" type="email" name="formMail" id="formMail" :placeholder="$t('contactPage.yourMailAddress')">
                        </div>
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <textarea class="w-full h-[240px] max-h-[320px] min-h-[100px] overflow-y-auto border-[2px] px-[20px] py-[10px] bg-[#FAF9F9] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" name="formMessage" id="formMessage" :placeholder="$t('contactPage.yourMessage')"></textarea>
                        </div>
                        <button class="py-[6px] rounded-md border border-main bg-main text-white text-[1.4rem] font-semibold shadow-lg shadow-main-shadow duration-200 hover:bg-main-light hover:text-main">{{$t('contactPage.submit')}}</button>
                    </form>
                </div>
                <!-- address image -->
                <div class="w-full max-w-[50%] lg:max-w-[100%] flex flex-col items-center justify-center gap-[24px] p-[20px] sm:p-0">
                    <a class="w-full border-[2px] border-main-shadow dark:border-main shadow-md shadow-main-light rounded-lg overflow-hidden hover:shadow-lg hover:scale-[1.01] duration-200" target="_blank" href="https://www.google.com/maps/dir//Z%C3%BCmr%C3%BCtevler,+%C3%87aml%C4%B1ca+Barkod+Sistem+San.+Tic.+Ltd.+%C5%9Eti.,+Adalar+Sk.+No:14+Kat:6,+34852+Maltepe%2F%C4%B0stanbul/@40.9312371,29.1421348,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14cabb24ce3805dd:0x7dd31a904f2f25f2!2m2!1d29.150632!2d40.928546!3e0?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
                        <img class="w-full" src="../images/address.png" alt="address">
                    </a>
                </div>
            </div>
        </div>
        <!-- social media -->
        <div class="fixed 2xl:hidden left-0 bottom-[400px] py-[24px] pl-[10px] pr-[16px] border border-l-0 bg-white z-20 dark:bg-dark border-main dark:border-white text-main dark:text-white text-[1.3rem] flex flex-col gap-[16px] justify-center items-center duration-200 hover:pl-[16px]" style="border-radius: 0 20px 20px 0;">
            <a class="hover:scale-[1.1] duration-200" href=""><font-awesome-icon icon="fa-brands fa-facebook" size="lg" /></a> 
            <a class="hover:scale-[1.1] duration-200" href=""><font-awesome-icon icon="fa-brands fa-twitter" size="lg" /></a> 
            <a class="hover:scale-[1.1] duration-200" href="https://www.instagram.com/tamsoft_/"><font-awesome-icon icon="fa-brands fa-instagram" size="lg" /></a> 
            <a class="hover:scale-[1.1] duration-200" href="https://www.linkedin.com/company/%C3%A7aml%C4%B1ca-barkod/mycompany/"><font-awesome-icon icon="fa-brands fa-linkedin" size="lg" /></a> 
        </div>
    </div>
</template>