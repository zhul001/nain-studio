<script setup lang="ts">
const services = [
  {
    category: 'Web Development',
    projects: [
      {
        title: 'Naintech',
        desc: 'Konfigurasi debian dan turunanya',
        icon: 'fa-globe',
        link: 'https://naintech.vercel.app/',
        external: true,
      },
    ],
  },
  {
    category: 'Desktop Apps',
    projects: [
      {
        title: 'Nain MiniTool',
        desc: 'Screenshoot dan editing',
        icon: 'fa-screwdriver-wrench',
        link: '/desktop/nain-minitool',
        external: false,
      },
    ],
  },
  {
    category: 'Mobile Apps',
    projects: [
      {
        title: 'Naintech',
        desc: 'Konfigurasi debian dan turunannya',
        icon: 'fa-mobile-screen',
        link: '/mobile/naintech',
        external: false,
      },
    ],
  },
]
</script>

<template>
  <div class="min-h-screen">
    <header class="max-w-6xl mx-auto px-6 pt-10 pb-12">
      <div
        class="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase border border-zinc-300 dark:border-zinc-700 rounded-full"
      >
        Creative Studio 2026
      </div>
      <h1
        class="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-black dark:text-white leading-tight"
      >
        Nain Studio <br />
        <span class="text-zinc-400 dark:text-zinc-600 italic"> Digital Ecosystem </span>
      </h1>
      <p class="max-w-xl text-zinc-500 dark:text-zinc-400 text-lg">
        Platform integrasi untuk semua alat digital. Dari otomasi desktop hingga pengembangan web
        modern dalam satu ekosistem terpadu.
      </p>
    </header>

    <main class="max-w-6xl mx-auto px-6 pb-20">
      <div v-for="(section, sIndex) in services" :key="sIndex" class="mb-16">
        <div class="flex items-center gap-4 mb-10">
          <h2 class="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
            {{ section.category }}
          </h2>
          <div class="h-px grow bg-zinc-200 dark:bg-zinc-800"></div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <template v-for="(item, pIndex) in section.projects" :key="pIndex">
            <a
              v-if="item.external"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 transition-all duration-300 hover:border-black dark:hover:border-white overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out opacity-[0.02] dark:opacity-[0.05]"
              ></div>
              <div class="relative z-10 flex items-center gap-5">
                <div
                  class="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300"
                >
                  <i :class="['fas text-xl text-zinc-800 dark:text-zinc-200', item.icon]"></i>
                </div>
                <div>
                  <h3 class="font-bold text-xl text-black dark:text-white leading-none mb-1">
                    {{ item.title }}
                    <i class="fas fa-external-link-alt text-[10px] ml-1 opacity-50"></i>
                  </h3>
                  <p class="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </a>

            <RouterLink
              v-else
              :to="item.link"
              class="group relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 transition-all duration-300 hover:border-black dark:hover:border-white overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out opacity-[0.02] dark:opacity-[0.05]"
              ></div>
              <div class="relative z-10 flex items-center gap-5">
                <div
                  class="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300"
                >
                  <i :class="['fas text-xl text-zinc-800 dark:text-zinc-200', item.icon]"></i>
                </div>
                <div>
                  <h3 class="font-bold text-xl text-black dark:text-white leading-none mb-1">
                    {{ item.title }}
                  </h3>
                  <p class="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </RouterLink>
          </template>
        </div>
      </div>

      <div class="flex items-center gap-4 mt-12">
        <div class="relative">
          <RouterLink to="/troubleshooting" class="group block">
            <h2
              class="text-xs font-black uppercase tracking-[0.3em] text-black dark:text-zinc-400 transition-colors duration-300"
            >
              System Support
            </h2>
            <span
              class="absolute -bottom-1 left-0 w-0 h-px bg-black dark:bg-zinc-400 transition-all duration-500 ease-in-out group-hover:w-full"
            ></span>
          </RouterLink>
        </div>
        <div class="h-px grow bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    </main>
  </div>
</template>
