<template>
  <div class="min-h-screen bg-gray-950 flex">
    <!-- Sidebar -->
    <aside class="w-56 bg-gray-900 border-r border-gray-800 flex flex-col fixed h-full z-10">
      <div class="px-5 py-5 border-b border-gray-800">
        <h1 class="text-white font-bold text-lg">Admin Panel</h1>
        <p class="text-gray-500 text-xs mt-0.5">Tamsoft</p>
      </div>

      <nav class="flex-1 overflow-y-auto py-3">
        <p class="text-gray-600 text-xs px-5 mb-2 uppercase tracking-wider">İçerik</p>
        <button
          v-for="section in sections"
          :key="section.key"
          @click="activeSection = section.key; activeTab = 'content'"
          :class="[
            'w-full text-left px-5 py-2.5 text-sm transition',
            activeSection === section.key && activeTab === 'content'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
          ]"
        >
          {{ section.label }}
        </button>

        <p class="text-gray-600 text-xs px-5 mb-2 mt-4 uppercase tracking-wider">Medya</p>
        <button
          @click="activeTab = 'images'"
          :class="[
            'w-full text-left px-5 py-2.5 text-sm transition',
            activeTab === 'images'
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
          ]"
        >
          Görseller
        </button>
      </nav>

      <div class="px-5 py-4 border-t border-gray-800">
        <button @click="logout" class="text-sm text-gray-400 hover:text-white transition">
          Çıkış Yap
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="ml-56 flex-1 p-8">
      <!-- Loading -->
      <div v-if="loading" class="flex items-center justify-center h-64">
        <div class="text-gray-400">Yükleniyor...</div>
      </div>

      <!-- Images Tab -->
      <div v-else-if="activeTab === 'images'">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-white">Görsel Yönetimi</h2>
        </div>

        <!-- Upload -->
        <div class="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6">
          <h3 class="text-sm font-medium text-gray-300 mb-3">Yeni Görsel Yükle</h3>
          <div class="flex gap-3 items-center">
            <input
              type="file"
              ref="fileInput"
              @change="onFileSelected"
              accept="image/*"
              class="hidden"
            />
            <button
              @click="$refs.fileInput.click()"
              class="bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded-lg border border-gray-600 transition"
            >
              Dosya Seç
            </button>
            <span class="text-gray-500 text-sm">{{ selectedFile?.name || 'Dosya seçilmedi' }}</span>
            <button
              v-if="selectedFile"
              @click="uploadFile"
              :disabled="uploading"
              class="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white text-sm px-4 py-2 rounded-lg transition"
            >
              {{ uploading ? 'Yükleniyor...' : 'Yükle' }}
            </button>
          </div>
          <p v-if="uploadedUrl" class="mt-3 text-green-400 text-sm">
            Yüklendi: <span class="font-mono">{{ uploadedUrl }}</span>
          </p>
        </div>

        <!-- Image List -->
        <div class="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <h3 class="text-sm font-medium text-gray-300 mb-4">Yüklü Görseller</h3>
          <div v-if="images.length === 0" class="text-gray-500 text-sm">Henüz görsel yüklenmemiş.</div>
          <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="img in images"
              :key="img.filename"
              class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
            >
              <img :src="serverBase + img.url" :alt="img.filename" class="w-full h-32 object-cover" />
              <div class="p-2">
                <p class="text-gray-400 text-xs truncate">{{ img.filename }}</p>
                <button
                  @click="copyUrl(img.url)"
                  class="text-blue-400 hover:text-blue-300 text-xs mt-1 transition"
                >
                  URL Kopyala
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Editor Tab -->
      <div v-else>
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-white">
            {{ currentSection?.label }}
          </h2>
          <div class="flex gap-3">
            <button
              @click="saveChanges"
              :disabled="saving"
              class="bg-green-600 hover:bg-green-500 disabled:bg-green-800 disabled:cursor-not-allowed text-white text-sm font-medium px-5 py-2 rounded-lg transition"
            >
              {{ saving ? 'Kaydediliyor...' : 'Kaydet' }}
            </button>
          </div>
        </div>

        <p v-if="saveMessage" :class="saveMessage.type === 'success' ? 'text-green-400' : 'text-red-400'" class="text-sm mb-4">
          {{ saveMessage.text }}
        </p>

        <!-- Language columns -->
        <div v-if="languages.tr && languages.en" class="space-y-4">
          <div class="grid grid-cols-2 gap-2 mb-4 sticky top-0 bg-gray-950 pb-2 z-10">
            <div class="bg-gray-800 rounded-lg px-4 py-2 text-center">
              <span class="text-sm font-medium text-gray-200">🇹🇷 Türkçe</span>
            </div>
            <div class="bg-gray-800 rounded-lg px-4 py-2 text-center">
              <span class="text-sm font-medium text-gray-200">🇬🇧 İngilizce</span>
            </div>
          </div>

          <FieldEditor
            :trData="getSectionData('tr')"
            :enData="getSectionData('en')"
            :path="activeSection"
            @update="onFieldUpdate"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { adminService } from '../../services/adminService';
import FieldEditor from './components/FieldEditor.vue';

const router = useRouter();
const loading = ref(true);
const saving = ref(false);
const saveMessage = ref(null);
const languages = ref({ tr: {}, en: {} });
const activeSection = ref('meta');
const activeTab = ref('content');

const serverBase = import.meta.env.VITE_REQUEST_URL;
const images = ref([]);
const selectedFile = ref(null);
const uploading = ref(false);
const uploadedUrl = ref('');

const sections = [
  { key: 'meta', label: 'Meta (SEO)' },
  { key: 'navbar', label: 'Navbar / Genel' },
  { key: 'homePage', label: 'Ana Sayfa' },
  { key: 'propertiesPage', label: 'Özellikler Sayfası' },
  { key: 'pricingPage', label: 'Fiyatlandırma' },
  { key: 'aboutPage', label: 'Hakkımızda' },
  { key: 'contactPage', label: 'İletişim' },
  { key: 'social', label: 'Sosyal Medya' },
  { key: 'toastMessages', label: 'Toast Mesajları' },
  { key: '404', label: '404 Sayfası' },
];

const navbarKeys = [
  'home','features','pricing','about','contact','login','loginLink',
  'signup','signupLink','footerDescription','quickLinks','softwares',
  'tamsoft','tampos','tamsaha','smartPos','support','copyright','createdBy'
];

const currentSection = computed(() => sections.find(s => s.key === activeSection.value));

const getSectionData = (lang) => {
  const data = languages.value[lang];
  if (!data) return {};
  if (activeSection.value === 'navbar') {
    const result = {};
    navbarKeys.forEach(k => { if (k in data) result[k] = data[k]; });
    return result;
  }
  return data[activeSection.value] ?? {};
};

const onFieldUpdate = ({ path, lang, value }) => {
  const fullPath = activeSection.value === 'navbar'
    ? path
    : `${activeSection.value}.${path}`;
  setNestedValue(languages.value[lang], fullPath, value);
};

const setNestedValue = (obj, path, value) => {
  const parts = path.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = isNaN(parts[i]) ? parts[i] : parseInt(parts[i]);
    cur = cur[key];
  }
  const last = parts[parts.length - 1];
  const idx = parseInt(last);
  if (!isNaN(idx) && Array.isArray(cur)) {
    cur[idx] = value;
  } else {
    cur[last] = value;
  }
};

const saveChanges = async () => {
  saving.value = true;
  saveMessage.value = null;
  try {
    await Promise.all([
      adminService.updateLanguage('tr', languages.value.tr),
      adminService.updateLanguage('en', languages.value.en),
    ]);
    saveMessage.value = { type: 'success', text: 'Değişiklikler başarıyla kaydedildi.' };
  } catch (err) {
    saveMessage.value = { type: 'error', text: 'Kayıt sırasında hata oluştu.' };
  } finally {
    saving.value = false;
    setTimeout(() => saveMessage.value = null, 3000);
  }
};

const onFileSelected = (e) => {
  selectedFile.value = e.target.files[0] || null;
  uploadedUrl.value = '';
};

const uploadFile = async () => {
  if (!selectedFile.value) return;
  uploading.value = true;
  try {
    const res = await adminService.uploadImage(selectedFile.value);
    uploadedUrl.value = res.data.url;
    selectedFile.value = null;
    await loadImages();
  } catch (err) {
    alert('Yükleme başarısız.');
  } finally {
    uploading.value = false;
  }
};

const loadImages = async () => {
  try {
    const res = await adminService.getImages();
    images.value = res.data.images;
  } catch {}
};

const copyUrl = (url) => {
  navigator.clipboard.writeText(serverBase + url);
};

const logout = () => {
  adminService.logout();
  router.push('/admin');
};

onMounted(async () => {
  try {
    const res = await adminService.getLanguages();
    languages.value = res.data;
    await loadImages();
  } catch (err) {
    if (err.response?.status === 401 || err.response?.status === 403) {
      router.push('/admin');
    }
  } finally {
    loading.value = false;
  }
});
</script>
