<template>
  <Header />
  <main class="container mx-auto p-6">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <Footer />
</template>

<script setup>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
</script>

<style>
/* Animasi transisi antar halaman */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
