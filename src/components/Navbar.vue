<script setup lang="ts">
import { ref, onMounted } from 'vue'

const scrolled = ref(false)
const darkMode = ref(false)

const updateTheme = () => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  updateTheme()
}

onMounted(() => {
  // 1. Cek apakah ada pilihan manual di localStorage
  const saved = localStorage.getItem('theme')

  // 2. Cek apakah sistem Windows sedang mode Dark
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (saved) {
    // Jika user PERNAH pilih manual, pakai pilihan itu
    darkMode.value = saved === 'dark'
  } else {
    // Jika user BELUM PERNAH pilih, ikut tema Windows
    darkMode.value = prefersDark
  }

  updateTheme()

  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})
</script>

<template>
  <nav
    :class="[
      'sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300',
      scrolled
        ? 'border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80'
        : 'border-transparent bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
      <RouterLink
        to="/"
        class="text-xl font-black tracking-tighter text-black dark:text-white uppercase italic"
      >
        NAIN STUDIO<span class="text-cyan-500">.</span>
      </RouterLink>

      <div class="flex items-center gap-3">
        <RouterLink
          to="/"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
        >
          <i class="fas fa-home text-sm"></i>
        </RouterLink>

        <button
          @click="toggleDarkMode"
          class="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black transition-all active:scale-95 cursor-pointer"
        >
          <i :class="['fas', darkMode ? 'fa-sun' : 'fa-moon']"></i>

          <span class="text-[10px] font-black uppercase tracking-[0.2em]">
            {{ darkMode ? 'Light' : 'Dark' }}
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>
