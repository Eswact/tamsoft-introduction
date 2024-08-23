<script setup>
    import { useFadeIn } from '../scripts/common';
    useFadeIn();
</script>

<template>
    <div class="w-full flex flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div class="w-full relative bg-main-light dark:bg-main-shadow flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div class="w-full max-w-[1600px] flex flex-col gap-[60px] sm:gap-[30px] justify-center items-center pt-[60px] sm:pt-[30px]">
                <div class="fade-in w-full flex flex-col gap-[40px] justify-center items-center">
                    <h1 class="text-[2.5rem] font-bold sm:text-[2rem]">{{$t('pricingPage.title')}}</h1>
                    <p class="text-[1.25rem] sm:text-[1.1rem] w-full max-w-[800px] text-center px-[20px]">{{$t('pricingPage.description')}}</p>
                </div>
                <div class="w-full flex flex-wrap justify-around gap-[20px] items-center p-[20px]">
                    <div class="fade-in relative cursor-pointer dark:text-dark w-[370px] max-w-[100%] h-[490px] px-[30px] pt-[46px] pb-[30px] bg-white border-[2px] border-main shadow-lg shadow-main-shadow transition-all duration-600 hover:scale-[1.025] hover:shadow-xl rounded-xl flex flex-col items-center justify-around gap-[20px]">
                        <div class="w-full flex flex-col justify-center items-center gap-[10px]">
                            <h3 class="text-[2rem] sm:text-[1.75rem] font-semibold">{{$t('pricingPage.basic')}}</h3>
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">10.000</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>
                        </div>
                        <span class="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, sint tempora officiis quaerat ab porro excepturi a voluptate, asperiores dignissimos quibusdam nostrum odio autem aliquam! Corporis vel quasi dolorum libero.</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button>
                    </div>
                    <div class="fade-in relative cursor-pointer dark:text-dark w-[370px] max-w-[100%] h-[490px] px-[30px] pt-[46px] pb-[30px] bg-white border-[2px] border-main shadow-lg shadow-main-shadow transition-all duration-600 hover:scale-[1.025] hover:shadow-xl rounded-xl flex flex-col items-center justify-around gap-[20px]">
                        <span class="absolute top-[15px] text-[1.05rem] font-semibold py-[4px] px-[10px] bg-third rounded-lg shadow-sm shadow-third-shadow text-white">{{$t('pricingPage.recommend')}}</span>
                        <div class="w-full flex flex-col justify-center items-center gap-[10px]">
                            <h3 class="text-[2rem] sm:text-[1.75rem] font-semibold">{{$t('pricingPage.standard')}}</h3>
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">15.000</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>
                        </div>
                        <span class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, iste esse cumque enim voluptate consequuntur odit. Dolor autem beatae voluptates fuga minima itaque labore, magnam molestias ipsa, quae tempora iure!</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button>
                    </div>
                    <div class="fade-in relative cursor-pointer dark:text-dark w-[370px] max-w-[100%] h-[490px] px-[30px] pt-[46px] pb-[30px] bg-white border-[2px] border-main shadow-lg shadow-main-shadow transition-all duration-600 hover:scale-[1.025] hover:shadow-xl rounded-xl flex flex-col items-center justify-around gap-[20px]">
                        <div class="w-full flex flex-col justify-center items-center gap-[10px]">
                            <h3 class="text-[2rem] sm:text-[1.75rem] font-semibold">{{$t('pricingPage.pro')}}</h3>
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">20.000</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>
                        </div>
                        <span class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis hic dignissimos obcaecati voluptas labore molestiae voluptatem! Cumque quia accusantium magnam cum consequuntur minus, ea error facere, delectus reprehenderit sit.</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main-shadow"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div class="z-10 w-full max-w-[1600px] px-[80px] lg:px-[40px] md:px-[20px] py-[40px] mt-[60px] flex justify-center items-center">
                <div class="bg-white grid items-center grid-cols-4 md:grid-cols-3 w-full px-[40px] py-[20px] md:px-0 md:py-0 md:border-0 border-[2px] rounded-lg text-text text-[1.15rem] md:text-[1rem]">
                    <!-- Başlıklar -->
                    <div class="p-[8px] md:text-center md:col-span-3"></div>
                    <div class="p-[10px] text-center font-semibold text-[1.5rem] md:text-[1.25rem]">{{$t('pricingPage.basic')}}</div>
                    <div class="p-[10px] text-center font-semibold text-[1.5rem] md:text-[1.25rem]">{{$t('pricingPage.standard')}}</div>
                    <div class="p-[10px] text-center font-semibold text-[1.5rem] md:text-[1.25rem]">{{$t('pricingPage.pro')}}</div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px] md:border-t-[1px]">Özellik 1</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px]">Özellik 2</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px]">Özellik 3</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px]">Uzun Özellik 1</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px]">Uzun Özellik 2</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px]">Uzun Özellik 3</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px] md:border-t-[1px]">Özellik 4</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px]">Özellik 5</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px]">Özellik 6</div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-xmark" size="xl" class="text-red-700"/></div>
                    <div class="border p-[10px] text-center"><font-awesome-icon icon="fa-solid fa-check" size="xl" class="text-green-700" /></div>

                    <div class="font-semibold p-[10px] md:text-center md:col-span-3 md:border-r-[1px] md:border-l-[1px]">{{ $t('pricingPage.price') }}</div>
                    <div class="text-[1.5rem] font-semibold border p-[10px] text-center">10000 <font-awesome-icon class="text-[1.2rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>
                    <div class="text-[1.5rem] font-semibold border p-[10px] text-center">15000 <font-awesome-icon class="text-[1.2rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>
                    <div class="text-[1.5rem] font-semibold border p-[10px] text-center">20000 <font-awesome-icon class="text-[1.2rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>

                    <div class="pt-[20px] md:text-center md:col-span-3"></div>
                    <div class="p-[20px] md:pt-0 text-center"><button class="fade-in w-full font-semibold border-[1px] border-main bg-main hover:bg-main-light hover:text-main duration-600 text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button></div>
                    <div class="p-[20px] md:pt-0 text-center"><button class="fade-in w-full font-semibold border-[1px] border-main bg-main hover:bg-main-light hover:text-main duration-600 text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button></div>
                    <div class="p-[20px] md:pt-0 text-center"><button class="fade-in w-full font-semibold border-[1px] border-main bg-main hover:bg-main-light hover:text-main duration-600 text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button></div>
                </div>
            </div>
        </div>
    </div>
</template>
  