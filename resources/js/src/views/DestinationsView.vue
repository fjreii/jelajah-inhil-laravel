<template>
  <section class="animate-fade-in">
    <div
      class="hero-bg rounded-xl text-white h-[40vh] md:h-[50vh] flex flex-col justify-center items-center text-center p-8 bg-gray-900 bg-blend-overlay bg-opacity-60"
    >
      <h1 class="hero-txt text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Destinasi Wisata Inhil
      </h1>
      <p class="text-lg md:text-xl max-w-2xl drop-shadow-md">
        Temukan pesona tersembunyi di Negeri Seribu Parit.
      </p>
    </div>

    <div class="my-16 text-center">
      <h2 class="text-3xl font-bold text-gray-800">Jelajahi Pilihan Terbaik Kami</h2>
      <p class="text-gray-500 mt-2">
        Pilih petualangan Anda berikutnya dari destinasi populer di bawah ini.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <DestinationCard v-for="dest in destinations" :key="dest.id" :destination="dest" />
    </div>
  </section>
</template>

<script setup>
import DestinationCard from '../components/DestinationCard.vue'
import { destinations } from '../data/destinations'

// Menambahkan animasi fade-in sederhana
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
