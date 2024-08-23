<template>
    <div class="w-full flex flex-col justify-center items-center">
        <div class="repeatedBg w-full h-[100px] mt-[10px] flex justify-center items-center"></div>
        <div class="w-full max-w-[1600px] flex flex-col gap-[20px] p-[40px]">
            <div class="w-full flex items-start justify-between">
                <div class="w-full max-w-[60%] flex items-center justify-between">
                    <!-- address img -->
                    <!-- phone/address/mail -->
                </div>
                <div class="w-full max-w-[40%] flex flex-col gap-[32px] text-text">
                    <div class="px-[6px]">
                        <h3 class="text-[2.25rem] font-semibold text-main">Get In Touch</h3>
                        <span class="text-[1.25rem] font-thin">We are here for you! How can we help ?</span>
                    </div>
                    <form class="flex flex-col gap-[20px] px-[4px]">
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <!-- <label class="text-[0.85rem]" for="formName">Name</label> -->
                            <input class="w-full border-[2px] px-[20px] py-[10px] bg-[#FAF4F5] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" type="text" name="formName" id="formName" placeholder="Your Name"/>
                        </div>
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <!-- <label class="text-[0.85rem]" for="formMail">Mail</label> -->
                            <input class="w-full border-[2px] px-[20px] py-[10px] bg-[#FAF4F5] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" type="email" name="formMail" id="formMail" placeholder="Your Mail Address">
                        </div>
                        <div class="flex flex-col items-start justify-start gap-[2px]">
                            <!-- <label class="text-[0.85rem]" for="formMessage">Message</label> -->
                            <textarea class="w-full h-[220px] max-h-[320px] overflow-y-auto border-[2px] px-[20px] py-[10px] bg-[#FAF4F5] rounded-md border-main-shadow shadow-md shadow-main-light placeholder:text-[#AAA0A2] text-[1.15rem]" name="formMessage" id="formMessage" placeholder="Your message"></textarea>
                        </div>
                        <button class="py-[6px] rounded-md border border-main bg-main text-white text-[1.4rem] font-semibold shadow-lg shadow-main-shadow duration-200 hover:bg-main-light hover:text-main">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="repeatedBg w-full h-[100px] mt-[10px] flex justify-center items-center"></div>
    </div>
</template>

<style scoped>
    .repeatedBg {
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23c32640' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
</style>