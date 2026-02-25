<script setup lang="ts">
const features = [
  {
    name: 'Smart Capture',
    desc: 'Tangkap layar penuh atau area spesifik dengan presisi pixel.',
    icon: 'fa-expand',
  },
  {
    name: 'Quick Edit',
    desc: 'Tambahkan anotasi, panah, dan teks secara instan setelah capture.',
    icon: 'fa-pen-nib',
  },
  {
    name: 'Cloud Sync',
    desc: 'Simpan hasil screenshot langsung ke server Nain Studio.',
    icon: 'fa-cloud-arrow-up',
  },
  { name: 'Auto Format', desc: 'Konversi otomatis ke PNG, JPG, atau WebP.', icon: 'fa-file-image' },
]
</script>

<template>
  <div class="min-h-screen pb-20">
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
            class="w-20 h-20 flex items-center justify-center rounded-3xl bg-cyan-500 text-white text-3 shadow-2xl shadow-cyan-500/20 mb-8"
          >
            <i class="fas fa-screwdriver-wrench text-3xl"></i>
          </div>
          <h1
            class="text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6"
          >
            Nain <span class="text-zinc-400 dark:text-zinc-600">MiniTool.</span>
          </h1>
          <p class="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg mb-8">
            Alat dokumentasi layar tercepat untuk alur kerja profesional. Tangkap, edit, dan bagikan
            dalam hitungan detik.
          </p>
          <div class="flex flex-wrap gap-4 items-center">
            <a
              href="/download/nain-minitool_v1.0.exe"
              class="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all active:scale-95 hover:shadow-xl dark:shadow-white/10 flex items-center gap-3"
            >
              <i class="fas fa-download"></i>
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
                class="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2"
              >
                <a
                  href="/download/nain-minitool_v1.0.exe"
                  class="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <div>
                    <span class="block text-sm font-bold text-black dark:text-white"
                      >Version 1.0 - 22 feb 26</span
                    >
                  </div>
                </a>
              </div>

              <div
                class="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2"
              >
                <a
                  href="/download/Nain_Minitool_V2.0.exe"
                  download="Nain Minitool.exe"
                  class="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <div>
                    <span class="block text-sm font-bold text-black dark:text-white"
                      >Version 2.0 - 25 feb 26</span
                    >
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 relative">
          <div
            class="relative z-10 bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-4 border border-zinc-200 dark:border-zinc-700 shadow-2xl"
          >
            <div class="flex items-center justify-between mb-4 px-2">
              <div class="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                Nain MiniTool - Preview
              </div>
            </div>
            <div
              class="aspect-video bg-white dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 flex items-center justify-center relative group"
            >
              <img
                src="@/assets/img/preview-nain-minitool.png"
                alt="UI Preview"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
          <div class="absolute -inset-4 bg-cyan-500/20 blur-3xl z-0 rounded-full"></div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-100 dark:border-zinc-900">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feat in features" :key="feat.name" class="p-6">
          <div
            class="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-900 text-cyan-500 mb-6"
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
