<template>
  <RouterLink
    :to="{ name: 'event-detail', params: { id: event.id } }"
    class="relative rounded-xl shadow-lg overflow-hidden group h-96 bg-cover bg-center transform hover:-translate-y-2 transition-transform duration-300"
    :style="{ backgroundImage: `url(${event.images[0]})` }"
  >
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300"
    ></div>
    <div class="relative h-full flex flex-col justify-end p-6 text-white">
      <h3 class="text-2xl font-bold">{{ event.title }}</h3>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
/* Tidak ada style khusus di sini karena semua sudah ditangani Tailwind */
</style>
