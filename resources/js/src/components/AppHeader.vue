<template>
  <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <RouterLink to="/" class="hero-txt text-2xl font-bold text-green-600 flex items-center">
        <img src="/public/assets/img/logo.png" alt="Jelajah Inhil Logo" class="h-12 mr-3" />Jelajah
        Inhil
      </RouterLink>

      <div class="hidden md:flex space-x-8">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="nav-link text-gray-600 hover:text-green-500 transition duration-300"
          >{{ link.name }}</RouterLink
        >
      </div>

      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="text-gray-600 hover:text-green-500 font-medium transition duration-300"
          >Masuk</a
        >
        <a
          href="#"
          class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >Daftar</a
        >
      </div>

      <button @click="toggleMobileMenu" class="md:hidden text-2xl">
        <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </nav>

    <div :class="{ hidden: !isMobileMenuOpen }" class="md:hidden px-6 pt-2 pb-4">
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        @click="closeMobileMenu"
        class="nav-link block text-gray-600 hover:text-green-500 transition duration-300 py-2"
        >{{ link.name }}</RouterLink
      >
      <div class="border-t border-gray-200 mt-2 pt-2">
        <a href="#" class="block text-gray-600 hover:text-green-500 transition duration-300 py-2"
          >Masuk</a
        >
        <a
          href="#"
          class="block mt-2 text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >Daftar</a
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Destinasi', path: '/destinasi' },
  { name: 'Event', path: '/event' },
  { name: 'Tentang', path: '/tentang' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
/* Vue router akan otomatis menambahkan class ini ke link yang aktif */
.nav-link.router-link-exact-active {
  color: #16a34a; /* green-500 */
  font-weight: 600;
}
</style>
