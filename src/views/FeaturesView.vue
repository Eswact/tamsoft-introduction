<script setup>
    import { onMounted } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div class="w-full flex flex-col gap-[20px] relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="z-0 w-full absolute top-0 fill-main-light"><path fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,80C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
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
        <div class="w-full relative flex justify-center items-center">
            <div class="w-full max-w-[1600px] flex flex-col gap-[30px] justify-center items-center p-[20px]">
                <!-- cards -->
                <div class="w-full flex flex-col justify-center items-center gap-[32px]">
                    <div class="w-full max-w-[1000px] flex flex-col justify-center items-center gap-[10px]">
                        <h2 class="text-[2.2rem] font-bold text-main">Tüm Özellikler</h2>
                        <p class="text-center text-[1.125rem] text-text dark:text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis distinctio doloribus hic? Quidem impedit ut dicta natus, asperiores fugit. Atque non cupiditate dolorum odio, totam rem eius vel natus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis distinctio doloribus hic? Quidem impedit ut dicta natus, asperiores fugit. Atque non cupiditate dolorum odio, totam rem eius vel natus.
                        </p>
                    </div>
                    <div class="grid grid-cols-3 place-items-center gap-[40px] xl:gap-[20px] lg:gap-[30px] lg:grid-cols-2 md:grid-cols-1">
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-layer-group" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">Stok Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">İşletmelerin stoklarını etkin ve verimli bir şekilde yönetmelerine yardımcı olacak birçok özellik sunuyor.</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-users" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">Cari Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">İşletmelerin cari hesaplarını etkin bir şekilde yönetmelerine olanak sağlayan kapsamlı bir çözümdür</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-cart-shopping" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">Satın Alma</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">İşletmeler için etkili bir satın alma süreci yönetimini sağlayan bir sistem olarak geliştirilmiştir.</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-store" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">Satış Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Satış yönetimi ile satışlarınızın planlanması, yürütülmesi ve denetlenmesi artık çok kolay.</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-sack-dollar" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">Finans Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Finansal yönetim ile Para, fon ve sermayenize dijital ortamda da hakim olun.</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-cash-register" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">Market Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Market modülü mükemmel entegrasyonu sayesinde Perakende de elinizi güçlendirir, işinizi kolaylaştırır.</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-address-book" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">CRM Yönetimi</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Müşteri ilişkileri yönetimi ile mevcut ve potansiyel müşterileri bağlantılarınızı yönetmek çok kolay.</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-circle-nodes" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">Entegrasyon</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Entegrasyon işlemleri ile veri akışı ve veri transferi artık çok kolay ve kullanışlı.</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                        <div class="relative cursor-default w-[356px] max-w-full h-[316px] px-[24px] pt-[50px] pb-[40px] flex flex-col gap-[10px] justify-between items-center border-[2px] border-main rounded-lg shadow-md shadow-main-shadow bg-main-light duration-200 hover:scale-[1.01] hover:bg-transparent dark:hover:bg-black">
                            <div class="absolute top-[10px] left-[12px] p-[12px] bg-main text-[26px] rounded-full w-[58px] h-[58px] flex justify-center items-center text-white"><font-awesome-icon class="max-w-[35px]" icon="fa-solid fa-comments-dollar" /></div>
                            <h4 class="text-[1.8rem] font-semibold text-main max-w-[220px] text-center">E-Ticaret</h4>
                            <span class="text-[1.2rem] text-text text-center dark:text-white">Yerinizden kalkmadan tüm E-Ticaret işlemlerinizi yapmanın tadını çıkarın.</span>
                            <a href="#" class="gelatine border-[1px] border-main bg-main text-white shadow-md shadow-main-shadow py-[4px] px-[16px] text-center rounded-md flex justify-center items-center gap-[0.5rem]">
                                <span class="text-[1.2rem] md:text-[1rem] font-semibold pb-[4px]">Detaylar</span>
                                <font-awesome-icon class="text-[1.2rem] md:text-[1rem]" icon="fa-solid fa-chevron-right" />
                            </a>       
                        </div>
                    </div>
                </div>
                <!-- sections -->
            </div>
        </div>
    </div>
</template>