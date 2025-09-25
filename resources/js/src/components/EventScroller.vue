<template>
  <section class="my-16">
    <h2 class="text-3xl font-bold text-center mb-2">Event & Festival</h2>
    <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
      Jangan lewatkan perayaan budaya dan acara menarik yang akan datang.
    </p>
    <div class="relative group">
      <button
        @click="scrollLeft"
        class="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 h-10 w-10 flex items-center justify-center text-xl text-gray-800 z-20 shadow-lg transition opacity-0 group-hover:opacity-100"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        @click="scrollRight"
        class="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 h-10 w-10 flex items-center justify-center text-xl text-gray-800 z-20 shadow-lg transition opacity-0 group-hover:opacity-100"
      >
        <i class="fas fa-chevron-right"></i>
      </button>

      <div
        ref="scrollContainer"
        class="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-6 md:space-x-8 py-4 px-2"
      >
        <div v-for="event in events" :key="event.id" class="flex-shrink-0 w-64 md:w-72">
          <EventCard :event="event" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { events } from '../data/events'
import EventCard from './EventCard.vue'

const scrollContainer = ref(null)

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}
</script>
