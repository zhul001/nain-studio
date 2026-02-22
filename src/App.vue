<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div
    class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300 transition-colors duration-300"
  >
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
