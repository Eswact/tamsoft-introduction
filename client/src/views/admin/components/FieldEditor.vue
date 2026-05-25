<template>
  <div class="space-y-3">
    <template v-for="key in allKeys" :key="key">
      <div class="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
        <!-- Section header -->
        <div class="px-4 py-2.5 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
          <span class="text-xs font-semibold text-gray-300 uppercase tracking-wide">{{ key }}</span>
          <span class="text-xs text-gray-500">{{ getTypeLabel(trData[key]) }}</span>
        </div>

        <!-- Array of objects (e.g. team, cards, banners, properties) -->
        <div v-if="isArrayOfObjects(trData[key]) || isArrayOfObjects(enData[key])" class="p-4 space-y-4">
          <div
            v-for="(_, idx) in maxArray(trData[key], enData[key])"
            :key="idx"
            class="border border-gray-700 rounded-lg overflow-hidden"
          >
            <div class="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <span class="text-xs text-gray-400 font-medium">Öğe {{ idx + 1 }}</span>
              <div class="flex gap-2">
                <button @click="moveItem(key, idx, -1)" v-if="idx > 0" class="text-xs text-gray-500 hover:text-white transition">↑</button>
                <button @click="moveItem(key, idx, 1)" v-if="idx < maxArray(trData[key], enData[key]).length - 1" class="text-xs text-gray-500 hover:text-white transition">↓</button>
                <button @click="removeItem(key, idx)" class="text-xs text-red-500 hover:text-red-400 transition">Sil</button>
              </div>
            </div>
            <div class="p-4 space-y-3">
              <template v-for="subKey in getObjectKeys(trData[key]?.[idx], enData[key]?.[idx])" :key="subKey">
                <!-- Nested object in array item (e.g. social in team) -->
                <template v-if="isPlainObject(trData[key]?.[idx]?.[subKey]) || isPlainObject(enData[key]?.[idx]?.[subKey])">
                  <div>
                    <p class="text-xs text-gray-500 mb-1 uppercase">{{ subKey }}</p>
                    <template v-for="deepKey in getObjectKeys(trData[key]?.[idx]?.[subKey], enData[key]?.[idx]?.[subKey])" :key="deepKey">
                      <div class="grid grid-cols-2 gap-3 mb-2">
                        <div>
                          <p class="text-xs text-gray-500 mb-1">TR — {{ subKey }}.{{ deepKey }}</p>
                          <input
                            :value="trData[key]?.[idx]?.[subKey]?.[deepKey] ?? ''"
                            @input="emit('update', { path: `${key}.${idx}.${subKey}.${deepKey}`, lang: 'tr', value: $event.target.value })"
                            class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                          />
                        </div>
                        <div>
                          <p class="text-xs text-gray-500 mb-1">EN — {{ subKey }}.{{ deepKey }}</p>
                          <input
                            :value="enData[key]?.[idx]?.[subKey]?.[deepKey] ?? ''"
                            @input="emit('update', { path: `${key}.${idx}.${subKey}.${deepKey}`, lang: 'en', value: $event.target.value })"
                            class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                          />
                        </div>
                      </div>
                    </template>
                  </div>
                </template>

                <!-- Boolean-string (true/false) -->
                <template v-else-if="isBoolString(trData[key]?.[idx]?.[subKey]) || isBoolString(enData[key]?.[idx]?.[subKey])">
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <p class="text-xs text-gray-500 mb-1">TR — {{ subKey }}</p>
                      <select
                        :value="trData[key]?.[idx]?.[subKey] ?? 'false'"
                        @change="emit('update', { path: `${key}.${idx}.${subKey}`, lang: 'tr', value: $event.target.value })"
                        class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      >
                        <option value="true">✓ Evet</option>
                        <option value="false">✗ Hayır</option>
                      </select>
                    </div>
                    <div>
                      <p class="text-xs text-gray-500 mb-1">EN — {{ subKey }}</p>
                      <select
                        :value="enData[key]?.[idx]?.[subKey] ?? 'false'"
                        @change="emit('update', { path: `${key}.${idx}.${subKey}`, lang: 'en', value: $event.target.value })"
                        class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      >
                        <option value="true">✓ Evet</option>
                        <option value="false">✗ Hayır</option>
                      </select>
                    </div>
                  </div>
                </template>

                <!-- Regular string/textarea -->
                <template v-else>
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <p class="text-xs text-gray-500 mb-1">TR — {{ subKey }}</p>
                      <textarea
                        v-if="isLong(trData[key]?.[idx]?.[subKey]) || isLong(enData[key]?.[idx]?.[subKey])"
                        :value="trData[key]?.[idx]?.[subKey] ?? ''"
                        @input="emit('update', { path: `${key}.${idx}.${subKey}`, lang: 'tr', value: $event.target.value })"
                        rows="3"
                        class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
                      />
                      <input
                        v-else
                        :value="trData[key]?.[idx]?.[subKey] ?? ''"
                        @input="emit('update', { path: `${key}.${idx}.${subKey}`, lang: 'tr', value: $event.target.value })"
                        class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <p class="text-xs text-gray-500 mb-1">EN — {{ subKey }}</p>
                      <textarea
                        v-if="isLong(trData[key]?.[idx]?.[subKey]) || isLong(enData[key]?.[idx]?.[subKey])"
                        :value="enData[key]?.[idx]?.[subKey] ?? ''"
                        @input="emit('update', { path: `${key}.${idx}.${subKey}`, lang: 'en', value: $event.target.value })"
                        rows="3"
                        class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
                      />
                      <input
                        v-else
                        :value="enData[key]?.[idx]?.[subKey] ?? ''"
                        @input="emit('update', { path: `${key}.${idx}.${subKey}`, lang: 'en', value: $event.target.value })"
                        class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>
                </template>
              </template>
            </div>
          </div>

          <button
            @click="addItem(key)"
            class="w-full border border-dashed border-gray-600 hover:border-blue-500 text-gray-500 hover:text-blue-400 text-sm py-2.5 rounded-lg transition"
          >
            + Yeni Öğe Ekle
          </button>
        </div>

        <!-- Array of strings -->
        <div v-else-if="isArrayOfStrings(trData[key]) || isArrayOfStrings(enData[key])" class="p-4">
          <div
            v-for="(_, idx) in maxArray(trData[key], enData[key])"
            :key="idx"
            class="grid grid-cols-2 gap-3 mb-3 items-start"
          >
            <div>
              <p class="text-xs text-gray-500 mb-1">TR — {{ idx + 1 }}</p>
              <input
                :value="trData[key]?.[idx] ?? ''"
                @input="emit('update', { path: `${key}.${idx}`, lang: 'tr', value: $event.target.value })"
                class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <div class="flex gap-2 items-end">
              <div class="flex-1">
                <p class="text-xs text-gray-500 mb-1">EN — {{ idx + 1 }}</p>
                <input
                  :value="enData[key]?.[idx] ?? ''"
                  @input="emit('update', { path: `${key}.${idx}`, lang: 'en', value: $event.target.value })"
                  class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <button @click="removeStringItem(key, idx)" class="text-red-500 hover:text-red-400 text-xs pb-2.5 transition">Sil</button>
            </div>
          </div>
          <button
            @click="addStringItem(key)"
            class="w-full border border-dashed border-gray-600 hover:border-blue-500 text-gray-500 hover:text-blue-400 text-sm py-2 rounded-lg transition mt-1"
          >
            + Ekle
          </button>
        </div>

        <!-- Nested plain object (not array) -->
        <div v-else-if="isPlainObject(trData[key]) || isPlainObject(enData[key])" class="p-4 space-y-3">
          <template v-for="subKey in getObjectKeys(trData[key], enData[key])" :key="subKey">
            <!-- Sub-object (e.g. meta.home) -->
            <template v-if="isPlainObject(trData[key]?.[subKey]) || isPlainObject(enData[key]?.[subKey])">
              <div class="border border-gray-700 rounded-lg overflow-hidden">
                <div class="bg-gray-800 px-4 py-2 border-b border-gray-700">
                  <span class="text-xs text-gray-400 font-medium uppercase">{{ subKey }}</span>
                </div>
                <div class="p-4 space-y-3">
                  <template v-for="deepKey in getObjectKeys(trData[key]?.[subKey], enData[key]?.[subKey])" :key="deepKey">
                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <p class="text-xs text-gray-500 mb-1">TR — {{ subKey }}.{{ deepKey }}</p>
                        <textarea
                          v-if="isLong(trData[key]?.[subKey]?.[deepKey]) || isLong(enData[key]?.[subKey]?.[deepKey])"
                          :value="trData[key]?.[subKey]?.[deepKey] ?? ''"
                          @input="emit('update', { path: `${key}.${subKey}.${deepKey}`, lang: 'tr', value: $event.target.value })"
                          rows="2"
                          class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
                        />
                        <input
                          v-else
                          :value="trData[key]?.[subKey]?.[deepKey] ?? ''"
                          @input="emit('update', { path: `${key}.${subKey}.${deepKey}`, lang: 'tr', value: $event.target.value })"
                          class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                        />
                      </div>
                      <div>
                        <p class="text-xs text-gray-500 mb-1">EN — {{ subKey }}.{{ deepKey }}</p>
                        <textarea
                          v-if="isLong(trData[key]?.[subKey]?.[deepKey]) || isLong(enData[key]?.[subKey]?.[deepKey])"
                          :value="enData[key]?.[subKey]?.[deepKey] ?? ''"
                          @input="emit('update', { path: `${key}.${subKey}.${deepKey}`, lang: 'en', value: $event.target.value })"
                          rows="2"
                          class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
                        />
                        <input
                          v-else
                          :value="enData[key]?.[subKey]?.[deepKey] ?? ''"
                          @input="emit('update', { path: `${key}.${subKey}.${deepKey}`, lang: 'en', value: $event.target.value })"
                          class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                        />
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </template>

            <!-- Simple string under object -->
            <template v-else>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <p class="text-xs text-gray-500 mb-1">TR — {{ subKey }}</p>
                  <textarea
                    v-if="isLong(trData[key]?.[subKey]) || isLong(enData[key]?.[subKey])"
                    :value="trData[key]?.[subKey] ?? ''"
                    @input="emit('update', { path: `${key}.${subKey}`, lang: 'tr', value: $event.target.value })"
                    rows="2"
                    class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
                  />
                  <input
                    v-else
                    :value="trData[key]?.[subKey] ?? ''"
                    @input="emit('update', { path: `${key}.${subKey}`, lang: 'tr', value: $event.target.value })"
                    class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <div>
                  <p class="text-xs text-gray-500 mb-1">EN — {{ subKey }}</p>
                  <textarea
                    v-if="isLong(trData[key]?.[subKey]) || isLong(enData[key]?.[subKey])"
                    :value="enData[key]?.[subKey] ?? ''"
                    @input="emit('update', { path: `${key}.${subKey}`, lang: 'en', value: $event.target.value })"
                    rows="2"
                    class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
                  />
                  <input
                    v-else
                    :value="enData[key]?.[subKey] ?? ''"
                    @input="emit('update', { path: `${key}.${subKey}`, lang: 'en', value: $event.target.value })"
                    class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </div>
            </template>
          </template>
        </div>

        <!-- Simple string at top level -->
        <div v-else class="p-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <p class="text-xs text-gray-500 mb-1">TR</p>
              <textarea
                v-if="isLong(trData[key]) || isLong(enData[key])"
                :value="trData[key] ?? ''"
                @input="emit('update', { path: key, lang: 'tr', value: $event.target.value })"
                rows="2"
                class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
              />
              <input
                v-else
                :value="trData[key] ?? ''"
                @input="emit('update', { path: key, lang: 'tr', value: $event.target.value })"
                class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>
            <div>
              <p class="text-xs text-gray-500 mb-1">EN</p>
              <textarea
                v-if="isLong(trData[key]) || isLong(enData[key])"
                :value="enData[key] ?? ''"
                @input="emit('update', { path: key, lang: 'en', value: $event.target.value })"
                rows="2"
                class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition resize-none"
              />
              <input
                v-else
                :value="enData[key] ?? ''"
                @input="emit('update', { path: key, lang: 'en', value: $event.target.value })"
                class="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  trData: { type: Object, default: () => ({}) },
  enData: { type: Object, default: () => ({}) },
  path: { type: String, default: '' },
});

const emit = defineEmits(['update']);

const allKeys = computed(() => {
  const keys = new Set([...Object.keys(props.trData), ...Object.keys(props.enData)]);
  return [...keys];
});

const isPlainObject = (val) =>
  val !== null && typeof val === 'object' && !Array.isArray(val);

const isArrayOfObjects = (val) =>
  Array.isArray(val) && val.length > 0 && isPlainObject(val[0]);

const isArrayOfStrings = (val) =>
  Array.isArray(val) && (val.length === 0 || typeof val[0] === 'string' || val[0] === null);

const isBoolString = (val) => val === 'true' || val === 'false';

const isLong = (val) => typeof val === 'string' && val.length > 80;

const maxArray = (a, b) => {
  const len = Math.max(Array.isArray(a) ? a.length : 0, Array.isArray(b) ? b.length : 0);
  return Array.from({ length: len });
};

const getObjectKeys = (objA, objB) => {
  const keys = new Set([
    ...Object.keys(objA || {}),
    ...Object.keys(objB || {}),
  ]);
  return [...keys];
};

const getTypeLabel = (val) => {
  if (Array.isArray(val)) return `Dizi [${val.length}]`;
  if (isPlainObject(val)) return 'Nesne';
  return 'Metin';
};

const addItem = (key) => {
  const template = buildTemplate(props.trData[key]?.[0] || props.enData[key]?.[0]);
  emit('update', { path: `${key}.${(props.trData[key] || []).length}`, lang: 'tr', value: template });
  emit('update', { path: `${key}.${(props.enData[key] || []).length}`, lang: 'en', value: template });
};

const removeItem = (key, idx) => {
  const newTr = [...(props.trData[key] || [])];
  const newEn = [...(props.enData[key] || [])];
  newTr.splice(idx, 1);
  newEn.splice(idx, 1);
  emit('update', { path: key, lang: 'tr', value: newTr });
  emit('update', { path: key, lang: 'en', value: newEn });
};

const moveItem = (key, idx, dir) => {
  const moveFn = (arr) => {
    const a = [...(arr || [])];
    const target = idx + dir;
    if (target < 0 || target >= a.length) return a;
    [a[idx], a[target]] = [a[target], a[idx]];
    return a;
  };
  emit('update', { path: key, lang: 'tr', value: moveFn(props.trData[key]) });
  emit('update', { path: key, lang: 'en', value: moveFn(props.enData[key]) });
};

const addStringItem = (key) => {
  const newTr = [...(props.trData[key] || []), ''];
  const newEn = [...(props.enData[key] || []), ''];
  emit('update', { path: key, lang: 'tr', value: newTr });
  emit('update', { path: key, lang: 'en', value: newEn });
};

const removeStringItem = (key, idx) => {
  const newTr = [...(props.trData[key] || [])];
  const newEn = [...(props.enData[key] || [])];
  newTr.splice(idx, 1);
  newEn.splice(idx, 1);
  emit('update', { path: key, lang: 'tr', value: newTr });
  emit('update', { path: key, lang: 'en', value: newEn });
};

const buildTemplate = (sample) => {
  if (!isPlainObject(sample)) return {};
  const result = {};
  for (const k in sample) {
    if (isPlainObject(sample[k])) {
      result[k] = buildTemplate(sample[k]);
    } else if (Array.isArray(sample[k])) {
      result[k] = [];
    } else {
      result[k] = '';
    }
  }
  return result;
};
</script>
