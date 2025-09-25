<template>
  <section class="animate-fade-in">
    <div
      class="hero-event-bg rounded-xl text-white h-[40vh] md:h-[50vh] flex flex-col justify-center items-center text-center p-8 bg-gray-800 bg-blend-overlay bg-opacity-50"
    >
      <h1 class="hero-txt text-4xl md:text-6xl font-bold mb-4">Event & Festival</h1>
      <p class="text-lg md:text-xl max-w-2xl">
        Ikuti perayaan budaya dan acara menarik di seluruh penjuru negeri.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </section>
</template>

<script setup>
import EventCard from '../components/EventCard.vue'
import { events } from '../data/events'
</script>

<style scoped>
/* Animasi fade-in untuk konsistensi */
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
