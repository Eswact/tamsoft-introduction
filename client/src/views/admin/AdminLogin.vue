<template>
  <div class="min-h-screen bg-gray-950 flex items-center justify-center">
    <div class="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-sm shadow-2xl">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-white">Admin Panel</h1>
        <p class="text-gray-400 text-sm mt-1">Tamsoft Tanıtım Sitesi</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm text-gray-400 mb-1">Kullanıcı Adı</label>
          <input
            v-model="form.username"
            type="text"
            class="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            placeholder="admin"
            required
          />
        </div>

        <div>
          <label class="block text-sm text-gray-400 mb-1">Şifre</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            placeholder="••••••••"
            required
          />
        </div>

        <p v-if="error" class="text-red-400 text-sm text-center">{{ error }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium rounded-lg py-2.5 transition"
        >
          {{ loading ? 'Giriş yapılıyor...' : 'Giriş Yap' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { adminService } from '../../services/adminService';

const router = useRouter();
const form = ref({ username: '', password: '' });
const error = ref('');
const loading = ref(false);

const handleLogin = async () => {
  error.value = '';
  loading.value = true;
  try {
    const res = await adminService.login(form.value.username, form.value.password);
    localStorage.setItem('adminToken', res.data.token);
    router.push('/admin/dashboard');
  } catch (err) {
    error.value = err.response?.data?.message || 'Giriş başarısız.';
  } finally {
    loading.value = false;
  }
};
</script>
