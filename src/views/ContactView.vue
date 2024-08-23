<template>
    <div class="w-full flex flex-col justify-center items-center">
        <div class="repeatedBg w-full h-[100px] md:h-[65px] mt-[10px] flex justify-center items-center"></div>
        <div class="w-full max-w-[1600px] flex flex-col gap-[20px] p-[40px] md:p-[10px]">
            <div class="w-full flex items-start md:items-center justify-between lg:flex-col-reverse gap-[30px]"> 
                <div class="w-full max-w-[40%] lg:max-w-[100%] flex flex-col gap-[32px] text-text dark:text-white">
                    <div class="px-[6px]">
                        <h3 class="text-[2.25rem] font-semibold text-main">{{$t('contactPage.getInTouch')}}</h3>
                        <span class="text-[1.25rem] font-thin">{{$t('contactPage.description')}}</span>
                    </div>
                    <form class="flex flex-col gap-[20px] px-[4px]">
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <input class="w-full border-[2px] px-[20px] py-[10px] bg-[#FAF4F5] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" type="text" name="formName" id="formName" :placeholder="$t('contactPage.yourName')"/>
                        </div>
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <input class="w-full border-[2px] px-[20px] py-[10px] bg-[#FAF4F5] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" type="email" name="formMail" id="formMail" :placeholder="$t('contactPage.yourMailAddress')">
                        </div>
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <textarea class="w-full h-[220px] max-h-[320px] min-h-[100px] overflow-y-auto border-[2px] px-[20px] py-[10px] bg-[#FAF4F5] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" name="formMessage" id="formMessage" :placeholder="$t('contactPage.yourMessage')"></textarea>
                        </div>
                        <button class="py-[6px] rounded-md border border-main bg-main text-white text-[1.4rem] font-semibold shadow-lg shadow-main-shadow duration-200 hover:bg-main-light hover:text-main">{{$t('contactPage.submit')}}</button>
                    </form>
                </div>
                <div class="w-full max-w-[50%] lg:max-w-[100%] flex flex-col items-center justify-center gap-[24px] md:p-[20px]">
                    <a class="w-full block md:hidden border-[2px] border-main shadow-sm shadow-main-shadow rounded-lg overflow-hidden hover:shadow-md hover:scale-[1.025] duration-200" target="_blank" href="https://www.google.com/maps/dir//Z%C3%BCmr%C3%BCtevler,+%C3%87aml%C4%B1ca+Barkod+Sistem+San.+Tic.+Ltd.+%C5%9Eti.,+Adalar+Sk.+No:14+Kat:6,+34852+Maltepe%2F%C4%B0stanbul/@40.9312371,29.1421348,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14cabb24ce3805dd:0x7dd31a904f2f25f2!2m2!1d29.150632!2d40.928546!3e0?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
                        <img class="w-full" src="../images/address.png" alt="address">
                    </a>
                    <a class="w-full hidden md:block border-[2px] border-main shadow-sm shadow-main-shadow rounded-lg overflow-hidden hover:shadow-md hover:scale-[1.025] duration-200" target="_blank" href="https://www.google.com/maps/dir//Z%C3%BCmr%C3%BCtevler,+%C3%87aml%C4%B1ca+Barkod+Sistem+San.+Tic.+Ltd.+%C5%9Eti.,+Adalar+Sk.+No:14+Kat:6,+34852+Maltepe%2F%C4%B0stanbul/@40.9312371,29.1421348,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14cabb24ce3805dd:0x7dd31a904f2f25f2!2m2!1d29.150632!2d40.928546!3e0?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
                        <img class="w-full" src="../images/address-mobile.png" alt="address">
                    </a>
                    <div class="w-full flex flex-col gap-[12px] justify-center items-center">
                        <div class="w-full flex items-center gap-[20px] border-b-1 md:items-start">
                            <font-awesome-icon class="w-[40px] text-[2rem] text-main md:pt-[4px]" icon="fa-solid fa-phone" />
                            <span class="text-[1.25rem] w-full text-text dark:text-white py-[6px] px-[12px] bg-main-light rounded-md shadow-md shadow-main-light border border-main-shadow">+90 216 441 20 41</span>
                        </div>
                        <div class="w-full flex items-center gap-[20px] border-b-1 md:items-start">
                            <font-awesome-icon class="w-[40px] text-[2rem] text-main md:pt-[4px]" icon="fa-solid fa-fax" />
                            <span class="text-[1.25rem] w-full text-text dark:text-white py-[6px] px-[12px] bg-main-light rounded-md shadow-md shadow-main-light border border-main-shadow">+90 216 352 56 09</span>
                        </div>
                        <div class="w-full flex items-center gap-[20px] border-b-1 md:items-start">
                            <font-awesome-icon class="w-[40px] text-[2rem] text-main md:pt-[4px]" icon="fa-solid fa-envelope" />
                            <span class="text-[1.25rem] w-full text-text dark:text-white py-[6px] px-[12px] bg-main-light rounded-md shadow-md shadow-main-light border border-main-shadow">info@camlica.com.tr</span>
                        </div>
                        <div class="w-full flex items-center gap-[20px] border-b-1 md:items-start">
                            <font-awesome-icon class="w-[40px] text-[2rem] text-main md:pt-[4px]" icon="fa-solid fa-location-dot" />
                            <span class="text-[1.25rem] w-full text-text dark:text-white py-[6px] px-[12px] bg-main-light rounded-md shadow-md shadow-main-light border border-main-shadow">Zümrütevler Mah. Adalar Sok. No: 14 Kat: 6, Maltepe/İstanbul</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="repeatedBg w-full h-[100px] md:h-[65px] mt-[10px] flex justify-center items-center"></div>
    </div>
</template>

<style scoped>
    .repeatedBg {
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23c32640' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E");
        background-repeat: repeat-x;
        animation: moveBackground 2s linear infinite;
    }
</style>