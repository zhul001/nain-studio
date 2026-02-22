<script setup lang="ts">
const features = [
  {
    name: 'Auto-Config Generator',
    desc: 'Hasilkan script network dan source.list Debian secara instan tanpa ketik manual.',
    icon: 'fa-code',
  },
  {
    name: 'Step-by-Step Guide',
    desc: 'Panduan interaktif administrasi server yang ramah untuk pemula.',
    icon: 'fa-list-check',
  },
  {
    name: 'Fast & Offline',
    desc: 'Akses semua referensi konfigurasi kapan saja bahkan tanpa koneksi internet.',
    icon: 'fa-bolt',
  },
  {
    name: 'Debian Focus',
    desc: 'Optimasi khusus untuk Debian dan distro turunannya (Ubuntu, Mint, dll).',
    icon: 'fa-linux',
  },
]

const versions = [
  { version: 'version 1.0', date: '22 feb 26', link: '/download/naintech-v1.0.apk' },
]
</script>

<template>
  <div class="min-h-screen pb-20 bg-white dark:bg-zinc-950">
    <section class="max-w-6xl mx-auto px-6 pt-10 pb-12">
      <RouterLink
        to="/"
        class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-8 group"
      >
        <i class="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
        Kembali ke Dashboard
      </RouterLink>

      <div class="flex flex-col md:flex-row md:items-center gap-10">
        <div class="flex-1">
          <div
            class="w-20 h-20 flex items-center justify-center rounded-3xl bg-red-600 text-white shadow-2xl shadow-red-600/20 mb-8"
          >
            <i class="fas fa-microchip text-3xl"></i>
          </div>
          <h1
            class="text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6"
          >
            Naintech
          </h1>
          <p class="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mb-8">
            Solusi konfigurasi server Debian dalam genggaman. Cepat, tepat, dan bisa diakses di mana
            saja melalui perangkat Android Anda.
          </p>

          <div class="flex flex-wrap gap-4 items-center">
            <a
              href="/download/naintech-v1.0.apk"
              download
              class="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all active:scale-95 hover:shadow-xl dark:shadow-white/10 flex items-center gap-3"
            >
              <i class="fab fa-android text-xl"></i>
              <div class="text-left">
                <span class="text-lg">Download Latest Stable</span>
              </div>
            </a>

            <div class="relative group">
              <button
                class="px-6 py-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center gap-3"
              >
                <span>Other Versions</span>
                <i
                  class="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"
                ></i>
              </button>

              <div
                class="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2"
              >
                <div v-for="v in versions" :key="v.version">
                  <a
                    :href="v.link"
                    download
                    class="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group/item"
                  >
                    <div>
                      <span class="block text-sm font-bold text-black dark:text-white"
                        >{{ v.version }} - {{ v.date }}</span
                      >
                    </div>
                    <i
                      class="fas fa-download text-xs text-zinc-300 group-hover/item:text-red-600 transition-colors"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 relative">
          <div
            class="relative z-10 bg-zinc-100 dark:bg-zinc-800 rounded-[3rem] p-4 border border-zinc-200 dark:border-zinc-700 shadow-2xl max-w-70 mx-auto"
          >
            <div
              class="aspect-9/19 bg-white dark:bg-zinc-950 rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-zinc-700 relative group"
            >
              <img
                src="@/assets/img/preview-naintech.jpeg"
                alt="NainTech Mobile UI"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-linear-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
            </div>
          </div>
          <div class="absolute -inset-4 bg-red-600/10 blur-3xl z-0 rounded-full"></div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-900">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="feat in features"
          :key="feat.name"
          class="p-6 group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 rounded-3xl transition-all"
        >
          <div
            class="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 text-red-600 mb-6 group-hover:scale-110 transition-transform"
          >
            <i :class="['fas', feat.icon]"></i>
          </div>
          <h3 class="font-bold text-lg text-black dark:text-white mb-2">{{ feat.name }}</h3>
          <p class="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">{{ feat.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
