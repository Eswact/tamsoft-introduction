<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 
import AjaxScripts from '@/scripts/ajaxScripts';

const email = ref('');
const password = ref('');
const passwordVisible = ref(false);

const router = useRouter();

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

const login = async () => {
  let data = {
    mail: email.value,
    password: password.value,
  };
  let onSuccess = function(res) {
    console.log(res);
    sessionStorage.setItem('user', res.token);
    router.push('/home'); 
  }
  let onError = function(err) {
    console.error(err);
    email.value = password.value = '';
  }
  AjaxScripts.Login({ data, onSuccess, onError });
};
</script>

<template>
  <div class="w-full h-[100dvh] flex overflow-hidden">
    <div class="flex min-h-full w-[420px] md:w-full flex-col justify-center gap-[36px] p-[40px]">
      <div class="w-full flex flex-col justify-center items-center gap-[18px]">
        <img class="h-[72px] w-auto" src="../images/logo.png" alt="Tamsoft">
        <h2 class="text-3xl sm:text-2xl font-newAmsterdam leading-9 font-bold">Hesabına Giriş Yap</h2>
      </div>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="login" class="space-y-5" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email adresi</label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                v-model="email"
                type="email"
                autocomplete="current-email"
                placeholder="example@mail.com"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Parola</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-main hover:text-third">Parolamı unuttum?</a>
              </div>
            </div>
            <div class="mt-1 relative flex items-center">
              <input
                id="password"
                name="password"
                v-model="password"
                :type="passwordVisible ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="············"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 placeholder:text-[32px] placeholder:h-[32px] focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
              <span class="absolute right-[12px] cursor-pointer text-main" @click="togglePasswordVisibility">
                  <font-awesome-icon :icon="passwordVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"/>
              </span>
            </div>
          </div>
          <div>
            <button type="submit" class="w-full flex justify-center py-[6px] px-[12px] border border-transparent text-[18px] font-bold font-mono tracking-widest rounded-md text-white bg-main hover:bg-third focus:outline-none focus:border-third focus:bg-third focus:shadow-outline-indigo active:bg-main transition duration-150 ease-in-out">Giriş Yap</button>
          </div>
        </form>
      </div>
    </div>
    <div class="md:hidden block relative w-0 flex-1">
        <img
        class="absolute inset-0 h-full w-full object-cover"
        src="../images/login.jpg"
        alt="Login"
        />
    </div>
  </div>
</template>