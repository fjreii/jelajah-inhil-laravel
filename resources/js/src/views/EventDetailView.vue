<template>
  <section v-if="event" class="animate-fade-in">
    <div class="mb-8">
      <RouterLink
        to="/event"
        class="text-blue-600 hover:text-blue-800 transition-colors duration-300 font-semibold"
      >
        &larr; Kembali ke Daftar Event
      </RouterLink>
    </div>

    <div class="grid lg:grid-cols-5 gap-8 lg:gap-12">
      <div class="lg:col-span-3 flex flex-col justify-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{{ event.title }}</h1>
        <p class="text-gray-600 text-lg mb-8 leading-relaxed">
          {{ event.description }}
        </p>

        <div class="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Detail Informasi Event</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-700">
            <span class="flex items-center">
              <i class="fas fa-calendar-alt mr-3 text-blue-500 fa-fw"></i>
              <div>
                <p class="font-semibold">Tanggal</p>
                <p>{{ event.date }}</p>
              </div>
            </span>
            <span class="flex items-center">
              <i class="fas fa-map-marker-alt mr-3 text-blue-500 fa-fw"></i>
              <div>
                <p class="font-semibold">Lokasi</p>
                <p>{{ event.location }}</p>
              </div>
            </span>
            <span class="flex items-center">
              <i class="fas fa-flag mr-3 text-blue-500 fa-fw"></i>
              <div>
                <p class="font-semibold">Jenis Acara</p>
                <p>Festival Budaya</p>
              </div>
            </span>
            <span class="flex items-center">
              <i class="fas fa-users mr-3 text-blue-500 fa-fw"></i>
              <div>
                <p class="font-semibold">Peserta</p>
                <p>Publik & Wisatawan</p>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 grid grid-cols-2 grid-rows-2 gap-4 h-[70vh]">
        <div class="col-span-2 row-span-2 rounded-lg overflow-hidden">
          <img
            :src="event.images[0]"
            :alt="event.title"
            class="w-full h-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="rounded-lg overflow-hidden">
          <img
            :src="event.images[1]"
            :alt="event.title"
            class="w-full h-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="rounded-lg overflow-hidden">
          <img
            :src="event.images[2]"
            :alt="event.title"
            class="w-full h-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>

  <section v-else class="text-center py-20">
    <h1 class="text-4xl font-bold mb-4">404 - Event Tidak Ditemukan</h1>
    <p class="text-gray-600 mb-8">Maaf, event yang Anda cari tidak ada.</p>
    <RouterLink
      to="/event"
      class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
    >
      Lihat Event Lainnya
    </RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { events } from '../data/events'

const route = useRoute()
const event = computed(() => {
  return events.find((e) => e.id === route.params.id)
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
