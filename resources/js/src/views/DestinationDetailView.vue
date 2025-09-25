<template>
  <section v-if="destination" class="animate-fade-in">
    <div class="mb-8">
      <RouterLink
        to="/destinasi"
        class="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold"
      >
        &larr; Kembali ke Daftar Destinasi
      </RouterLink>
    </div>

    <div class="grid lg:grid-cols-5 gap-8 lg:gap-12">
      <div class="lg:col-span-3 flex flex-col justify-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{{ destination.title }}</h1>
        <div class="flex flex-col sm:flex-row gap-x-6 gap-y-2 text-gray-600 mb-7">
          <span class="flex items-center">
            <i class="fas fa-map-marker-alt mr-2 text-blue-500"></i> {{ destination.location }}
          </span>
        </div>
        <p class="text-gray-600 text-lg mb-8 leading-relaxed">
          {{ destination.description }}
        </p>

        <div class="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Fasilitas Umum</h3>
          <div class="grid grid-cols-2 gap-4 text-gray-700">
            <!-- <span class="flex items-center"
              ><i class="fas fa-wifi mr-3 text-blue-500 fa-fw"></i> WiFi Gratis</span
            > -->
            <span class="flex items-center"
              ><i class="fas fa-parking mr-3 text-blue-500 fa-fw"></i> Area Parkir</span
            >
            <span class="flex items-center"
              ><i class="fas fa-utensils mr-3 text-blue-500 fa-fw"></i> Restoran</span
            >
            <span class="flex items-center"
              ><i class="fas fa-camera mr-3 text-blue-500 fa-fw"></i> Spot Foto</span
            >
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 grid grid-cols-2 grid-rows-2 gap-4 h-[70vh]">
        <div class="col-span-2 row-span-2 rounded-lg overflow-hidden">
          <img
            :src="destination.images[0]"
            :alt="destination.title"
            class="w-full h-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="rounded-lg overflow-hidden">
          <img
            :src="destination.images[1]"
            :alt="destination.title"
            class="w-full h-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="rounded-lg overflow-hidden">
          <img
            :src="destination.images[2]"
            :alt="destination.title"
            class="w-full h-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>

  <section v-else class="text-center py-20"></section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { destinations } from '../data/destinations'

const route = useRoute()
const destination = computed(() => {
  return destinations.find((dest) => dest.id === route.params.id)
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
