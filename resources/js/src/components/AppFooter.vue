<template>
  <footer class="bg-gray-800 text-gray-300 mt-12">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2 lg:col-span-1">
          <RouterLink to="/" class="hero-txt text-2xl font-bold text-white flex items-center">
            <img src="/public/assets/img/logo.png" alt="Jelajah Inhil Logo" class="h-12 mr-3" />Jelajah
            Inhil
          </RouterLink>
          <p class="mt-4 text-sm">
            Membantu Anda menemukan keindahan tersembunyi di seluruh Indragiri Hilir dengan
            pengalaman yang tak terlupakan.
          </p>
          <div class="flex space-x-4 mt-6 text-xl">
            <a href="#" class="hover:text-white transition-colors" aria-label="Facebook"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" class="hover:text-white transition-colors" aria-label="Instagram"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="#" class="hover:text-white transition-colors" aria-label="Twitter"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="#" class="hover:text-white transition-colors" aria-label="Youtube"
              ><i class="fab fa-youtube"></i
            ></a>
          </div>
        </div>

        <div>
          <h3 class="font-bold text-white text-lg mb-4">Navigasi</h3>
          <ul class="space-y-2">
            <li v-for="link in navLinks" :key="link.name">
              <RouterLink :to="link.path" class="hover:text-white transition-colors">{{
                link.name
              }}</RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-white text-lg mb-4">Dukungan</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Tentang Kami</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-white text-lg mb-4">Hubungi Kami</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt mt-1 mr-3"></i>
              <span>Jl. Pariwisata No. 123, Tembilahan, Indonesia</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone-alt mr-3"></i>
              <span>(021) 1234 5678</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-envelope mr-3"></i>
              <span>info@jelajahinhil.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {{ currentYear }} Jelajah Inhil. Semua Hak Cipta Dilindungi.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// Mendefinisikan link navigasi sebagai data.
// Ini membuat template lebih bersih dan link lebih mudah dikelola.
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Destinasi', path: '/destinasi' },
  { name: 'Event', path: '/event' },
  { name: 'Tentang', path: '/tentang' },
]

// Membuat tahun copyright dinamis
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Tidak perlu ada style khusus di sini karena semua styling
   sudah ditangani oleh Tailwind CSS secara global. */
</style>
