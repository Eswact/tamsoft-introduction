<script setup>

</script>

<template>
    <div class="w-full flex flex-col">
        <div class="w-full bg-main-light dark:bg-main-shadow flex justify-center items-center">
            <div class="w-full max-w-[1600px] flex flex-col gap-[60px] sm:gap-[30px] justify-center items-center pt-[60px] sm:pt-[30px] pb-[30px]">
                <div class="w-full flex flex-col gap-[40px] justify-center items-center">
                    <h1 class="text-[2.5rem] font-bold sm:text-[2rem]">{{$t('pricingPage.title')}}</h1>
                    <p class="text-[1.25rem] sm:text-[1.1rem] w-full max-w-[800px] text-center px-[20px]">{{$t('pricingPage.description')}}</p>
                </div>
                <div class="w-full flex flex-wrap justify-around gap-[20px] items-center p-[20px]">
                    <div class="relative cursor-pointer dark:text-dark w-[370px] max-w-[100%] h-[490px] px-[30px] pt-[46px] pb-[30px] bg-white border-[2px] border-main shadow-lg shadow-main-shadow transition-all duration-200 hover:scale-[1.025] hover:shadow-xl rounded-xl flex flex-col items-center justify-around gap-[20px]">
                        <div class="w-full flex flex-col justify-center items-center gap-[10px]">
                            <h3 class="text-[2rem] sm:text-[1.75rem] font-semibold">{{$t('pricingPage.basic')}}</h3>
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">10.000</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>
                        </div>
                        <span class="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, sint tempora officiis quaerat ab porro excepturi a voluptate, asperiores dignissimos quibusdam nostrum odio autem aliquam! Corporis vel quasi dolorum libero.</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">Hemen Al</button>
                    </div>
                    <div class="relative cursor-pointer dark:text-dark w-[370px] max-w-[100%] h-[490px] px-[30px] pt-[46px] pb-[30px] bg-white border-[2px] border-main shadow-lg shadow-main-shadow transition-all duration-200 hover:scale-[1.025] hover:shadow-xl rounded-xl flex flex-col items-center justify-around gap-[20px]">
                        <span class="absolute top-[15px] text-[1rem] font-semibold py-[4px] px-[10px] bg-third rounded-lg shadow-sm shadow-third-light text-white">{{$t('pricingPage.recommend')}}</span>
                        <div class="w-full flex flex-col justify-center items-center gap-[10px]">
                            <h3 class="text-[2rem] sm:text-[1.75rem] font-semibold">{{$t('pricingPage.standard')}}</h3>
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">15.000</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>
                        </div>
                        <span class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, iste esse cumque enim voluptate consequuntur odit. Dolor autem beatae voluptates fuga minima itaque labore, magnam molestias ipsa, quae tempora iure!</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">Hemen Al</button>
                    </div>
                    <div class="relative cursor-pointer dark:text-dark w-[370px] max-w-[100%] h-[490px] px-[30px] pt-[46px] pb-[30px] bg-white border-[2px] border-main shadow-lg shadow-main-shadow transition-all duration-200 hover:scale-[1.025] hover:shadow-xl rounded-xl flex flex-col items-center justify-around gap-[20px]">
                        <div class="w-full flex flex-col justify-center items-center gap-[10px]">
                            <h3 class="text-[2rem] sm:text-[1.75rem] font-semibold">Pro Plan</h3>
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">20.000</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></div>
                        </div>
                        <span class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis hic dignissimos obcaecati voluptas labore molestiae voluptatem! Cumque quia accusantium magnam cum consequuntur minus, ea error facere, delectus reprehenderit sit.</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">Hemen Al</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center">
            <div class="w-full max-w-[1600px] p-[30px]">
                Detaylar
            </div>
        </div>
    </div>
</template>
  