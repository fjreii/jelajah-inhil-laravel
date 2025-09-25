<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
  >
    <div class="h-56 w-full overflow-hidden">
      <img :src="event.images[0]" :alt="event.title" class="w-full h-full object-cover" />
    </div>

    <div class="p-6 flex flex-col flex-grow">
      <h3 class="text-2xl font-bold mb-2">{{ event.title }}</h3>

      <div class="text-gray-600 text-sm space-y-1 mb-4 flex-grow">
        <p class="flex items-center">
          <i class="fas fa-calendar-alt w-4 mr-2 text-blue-500"></i> {{ event.date }}
        </p>
        <p class="flex items-center">
          <i class="fas fa-map-marker-alt w-4 mr-2 text-blue-500"></i> {{ event.location }}
        </p>
      </div>

      <RouterLink
        :to="{ name: 'event-detail', params: { id: event.id } }"
        class="mt-4 self-start bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-center"
      >
        Lihat Detail
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// Komponen ini menerima satu prop 'event' yang berisi data event
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>
