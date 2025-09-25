<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
  >
    <img :src="destination.image" :alt="destination.title" class="w-full h-56 object-cover" />
    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-2xl font-bold mb-2">{{ destination.title }}</h3>
      <p class="text-gray-600 mb-4 flex-grow">{{ destination.shortDescription }}</p>
      <RouterLink
        :to="{ name: 'destination-detail', params: { id: destination.id } }"
        class="mt-4 self-start bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Lihat Detail
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  destination: {
    type: Object,
    required: true,
  },
})
</script>
