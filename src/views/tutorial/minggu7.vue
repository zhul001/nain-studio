<script setup lang="ts">
// Script bersih untuk menghindari error "latestVersion"
</script>

<template>
  <div class="min-h-screen pb-20 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
    <section class="max-w-6xl mx-auto px-6 pt-10 pb-12">
      <RouterLink
        to="/"
        class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black dark:hover:text-white transition-colors mb-12 group"
      >
        <i class="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
        Kembali ke Dashboard
      </RouterLink>

      <div class="mb-16">
        <h1 class="text-5xl md:text-6xl font-black tracking-tighter text-black dark:text-white mb-6">
          Nain <span class="text-zinc-400 dark:text-zinc-600">Resources.</span>
        </h1>
        <p class="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
          Koleksi template resmi untuk alur kerja profesional. Pilih infrastruktur yang sesuai dengan kebutuhan proyek Anda.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-16">
        
        <div class="flex flex-col gap-8 group">
          <div class="relative">
            <div class="relative z-10 bg-zinc-100 dark:bg-zinc-800 rounded-[2.5rem] p-4 border border-zinc-200 dark:border-zinc-700 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <div class="aspect-video bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                <img 
                  src="@/assets/img/preview-butterfly.jpg" 
                  alt="Butterfly Preview" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </div>
            <div class="absolute -inset-6 bg-cyan-500/10 blur-3xl z-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div class="px-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/20">
                <i class="fas fa-leaf"></i>
              </div>
              <h2 class="text-3xl font-black tracking-tight text-black dark:text-white">Butterfly LP</h2>
            </div>
            <p class="text-zinc-500 dark:text-zinc-400 text-lg mb-8">Template landing page modern, bersih, dan sangat responsif untuk profil bisnis.</p>
            
            <div class="flex flex-wrap gap-4 items-center">
              <a href="https://bootstrapmade.com/butterfly-free-bootstrap-theme/" target="_blank" 
  rel="noopener noreferrer" class="px-6 py-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center gap-2">
                <i class="fas fa-eye text-xs"></i> View Website
              </a>
              <a href="/download/Butterfly.zip" class="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all hover:shadow-xl flex items-center gap-2 active:scale-95">
                <i class="fas fa-download"></i> Download
              </a>
              <a href="/download/frontend.zip" class="px-6 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 rounded-2xl font-bold text-xs hover:text-cyan-500 transition-colors">
                Versi Copas
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-8 group">
          <div class="relative">
            <div class="relative z-10 bg-zinc-100 dark:bg-zinc-800 rounded-[2.5rem] p-4 border border-zinc-200 dark:border-zinc-700 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
              <div class="aspect-video bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                <img 
                  src="@/assets/img/preview-niceadmin.jpg" 
                  alt="Nice Admin Preview" 
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </div>
            <div class="absolute -inset-6 bg-indigo-500/10 blur-3xl z-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div class="px-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
                <i class="fas fa-chart-line"></i>
              </div>
              <h2 class="text-3xl font-black tracking-tight text-black dark:text-white">Nice Admin</h2>
            </div>
            <p class="text-zinc-500 dark:text-zinc-400 text-lg mb-8">untuk saat ini nice admin tidak bisa di unduh free, jadi sebagai gantinnya gunakan template dari nain-studio-admin</p>
            
            <div class="flex flex-wrap gap-4 items-center">
            <a href="https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/#" target="_blank" 
  rel="noopener noreferrer" class="px-6 py-4 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all flex items-center gap-2">
                <i class="fas fa-eye text-xs"></i> View Website
              </a>
              <a href="/download/nain-studio-admin.zip" class="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all hover:shadow-xl flex items-center gap-2 active:scale-95">
                <i class="fas fa-download"></i> Download
              </a>
              <a href="/download/backend.zip" class="px-6 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500 rounded-2xl font-bold text-xs hover:text-indigo-500 transition-colors">
                Versi Copas
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-100 dark:border-zinc-900">
      <div class="bg-zinc-50 dark:bg-zinc-900/30 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-[3rem] p-16 text-center group">
        <div class="w-20 h-20 bg-white dark:bg-zinc-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl transition-transform group-hover:rotate-12">
          <i class="fas fa-book-open text-cyan-500 text-3xl"></i>
        </div>
        <h3 class="text-3xl font-black text-black dark:text-white mb-4">Tutorial Penggunaan</h3>
        <p class="text-zinc-500 dark:text-zinc-400 text-lg italic">"Sabar ya, panduan lengkap sedang dalam tahap penyusunan. Tunggu update dulu ya!"</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Tambahan transisi halus untuk semua elemen */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>