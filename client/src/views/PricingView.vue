<script setup>
    import { onMounted } from 'vue';
    import { useFadeIn } from '../scripts/common';
    import { langCounts } from '@/services/language'
    const propertyLength = langCounts.value.propertyLengthPricing;
    useFadeIn();

    onMounted(() => {
        const cells = document.querySelectorAll('.select-column');
        const columns = document.querySelectorAll('h3.select-column');
        function updateColumns() {
            cells.forEach((cell, index) => {
                if (cell.dataset.column == currentIndex) {
                    cell.classList.add('visible');
                }
                else {
                    cell.classList.remove('visible');
                }
            });
        }
        document.getElementById('prevColumn').addEventListener('click', function () {
            currentIndex = (currentIndex - 1 + columns.length) % columns.length;
            updateColumns();
        });
        document.getElementById('nextColumn').addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % columns.length;
            updateColumns();
        });
        
        let currentIndex = 1;
        updateColumns();
    });
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
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">{{$t('pricingPage.basicPrice')}}</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" :icon="$t('pricingPage.priceIcon')" /></div>
                        </div>
                        <span class="text-justify">{{$t('pricingPage.basicDescription')}}</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button>
                    </div>
                    <div class="fade-in relative cursor-pointer dark:text-dark w-[370px] max-w-[100%] h-[490px] px-[30px] pt-[46px] pb-[30px] bg-white border-[2px] border-main shadow-lg shadow-main-shadow transition-all duration-600 hover:scale-[1.025] hover:shadow-xl rounded-xl flex flex-col items-center justify-around gap-[20px]">
                        <span class="absolute top-[15px] text-[1.05rem] font-semibold py-[4px] px-[10px] bg-third rounded-lg shadow-sm shadow-third-shadow text-white">{{$t('pricingPage.recommend')}}</span>
                        <div class="w-full flex flex-col justify-center items-center gap-[10px]">
                            <h3 class="text-[2rem] sm:text-[1.75rem] font-semibold">{{$t('pricingPage.standard')}}</h3>
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">{{$t('pricingPage.standardPrice')}}</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" :icon="$t('pricingPage.priceIcon')" /></div>
                        </div>
                        <span class="text-justify">{{$t('pricingPage.standardDescription')}}</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button>
                    </div>
                    <div class="fade-in relative cursor-pointer dark:text-dark w-[370px] max-w-[100%] h-[490px] px-[30px] pt-[46px] pb-[30px] bg-white border-[2px] border-main shadow-lg shadow-main-shadow transition-all duration-600 hover:scale-[1.025] hover:shadow-xl rounded-xl flex flex-col items-center justify-around gap-[20px]">
                        <div class="w-full flex flex-col justify-center items-center gap-[10px]">
                            <h3 class="text-[2rem] sm:text-[1.75rem] font-semibold">{{$t('pricingPage.pro')}}</h3>
                            <div class="flex gap-[8px] items-center"><span class="text-[2.5rem] font-bold">{{$t('pricingPage.proPrice')}}</span><font-awesome-icon class="text-[1.75rem] pt-[8px]" :icon="$t('pricingPage.priceIcon')" /></div>
                        </div>
                        <span class="text-justify">{{$t('pricingPage.proDescription')}}</span>
                        <button class="gelatine text-[1.15rem] md:text-[1rem] font-semibold border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">{{$t('pricingPage.buyNow')}}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light dark:fill-main-shadow"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div class="z-10 w-full max-w-[1600px] px-[80px] lg:px-[40px] md:px-[4px] py-[40px] mt-[60px] flex justify-center items-center">
                <div class="bg-white w-full px-[40px] md:px-[10px] py-[20px] border-[2px] rounded-lg text-text text-[1.15rem] md:text-[1rem] md:flex md:flex-col md:justify-center md:items-center md:gap-[20px]">
                    <div class="hidden md:flex items-center justify-center gap-[20px]">
                        <button id="prevColumn" class="rounded-full px-[12px] py-[8px] bg-main text-white">
                            <font-awesome-icon icon="fa-solid fa-chevron-left" size="xl" />
                        </button>
                        <h3 class="select-column text-[1.5rem] text-text" data-column="0">{{$t('pricingPage.basic')}}</h3>
                        <h3 class="select-column text-[1.5rem] text-text" data-column="1">{{$t('pricingPage.standard')}}</h3>
                        <h3 class="select-column text-[1.5rem] text-text" data-column="2">{{$t('pricingPage.pro')}}</h3>
                        <button id="nextColumn" class="rounded-full px-[12px] py-[8px] bg-main text-white">
                            <font-awesome-icon icon="fa-solid fa-chevron-right" size="xl" />
                        </button>
                    </div>
                    <table class="w-full text-center table-fixed">
                        <thead>
                            <tr class="md:hidden">
                                <th class="w-[260px] 2xl:w-[220px] xl:w-[180px] md:w-1/2"></th>
                                <th class="w-1/3 p-[10px] text-center font-semibold text-[1.5rem] md:text-[1.25rem] md:w-1/2">
                                    {{$t('pricingPage.basic')}}
                                </th>
                                <th class="w-1/3 p-[10px] text-center font-semibold text-[1.5rem] md:text-[1.25rem] md:w-1/2">
                                    {{$t('pricingPage.standard')}}
                                </th>
                                <th class="w-1/3 p-[10px] text-center font-semibold text-[1.5rem] md:text-[1.25rem] md:w-1/2">
                                    {{$t('pricingPage.pro')}}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in propertyLength" :key="item">
                                <td class="font-semibold text-[1.2rem] py-[10px] px-[20px] text-start">{{$t(`pricingPage.properties[${item-1}].property`)}}</td>
                                <td class="select-column border p-[10px]" data-column="0">
                                    <font-awesome-icon v-if="$t(`pricingPage.properties[${item-1}].basic`) == 'true'" icon="fa-solid fa-check" size="xl" class="text-green-700" />
                                    <font-awesome-icon v-else icon="fa-solid fa-xmark" size="xl" class="text-red-700" />
                                </td>
                                <td class="select-column border p-[10px]" data-column="1">
                                    <font-awesome-icon v-if="$t(`pricingPage.properties[${item-1}].standard`) == 'true'" icon="fa-solid fa-check" size="xl" class="text-green-700" />
                                    <font-awesome-icon v-else icon="fa-solid fa-xmark" size="xl" class="text-red-700" />
                                </td>
                                <td class="select-column border p-[10px]" data-column="2">
                                    <font-awesome-icon v-if="$t(`pricingPage.properties[${item-1}].pro`) == 'true'" icon="fa-solid fa-check" size="xl" class="text-green-700" />
                                    <font-awesome-icon v-else icon="fa-solid fa-xmark" size="xl" class="text-red-700" />
                                </td>
                            </tr>
                            <tr>
                                <td class="font-semibold text-[1.2rem] py-[10px] px-[20px] text-start">{{$t('pricingPage.price')}}</td>
                                <td class="select-column text-[1.5rem] font-semibold border p-[10px]" data-column="0">10000 <font-awesome-icon class="text-[1.2rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></td>
                                <td class="select-column text-[1.5rem] font-semibold border p-[10px]" data-column="1">15000 <font-awesome-icon class="text-[1.2rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></td>
                                <td class="select-column text-[1.5rem] font-semibold border p-[10px]" data-column="2">20000 <font-awesome-icon class="text-[1.2rem] pt-[8px]" icon="fa-solid fa-turkish-lira-sign" /></td>
                            </tr>
                            <tr class="md:hidden">
                                <td></td>
                                <td class="p-[20px] text-center">
                                    <button class="fade-in w-full font-semibold border-[1px] border-main bg-main hover:bg-main-light hover:text-main duration-600 text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">
                                        {{$t('pricingPage.buyNow')}}
                                    </button>
                                </td>
                                <td class="p-[20px] text-center">
                                    <button class="fade-in w-full font-semibold border-[1px] border-main bg-main hover:bg-main-light hover:text-main duration-600 text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">
                                        {{$t('pricingPage.buyNow')}}
                                    </button>
                                </td>
                                <td class="p-[20px] text-center">
                                    <button class="fade-in w-full font-semibold border-[1px] border-main bg-main hover:bg-main-light hover:text-main duration-600 text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">
                                        {{$t('pricingPage.buyNow')}}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="hidden md:block fade-in w-full font-semibold border-[1px] border-main bg-main hover:bg-main-light hover:text-main duration-600 text-white shadow-md shadow-main-shadow py-[8px] px-[16px] text-center rounded-md">
                        {{$t('pricingPage.buyNow')}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* md:*/
    @media (max-width: 850px) {
        .select-column {
            display: none;
        }
        .select-column.visible {
            display: table-cell;
        }
        h3.select-column.visible {
            display: block;
        }
    }
</style>