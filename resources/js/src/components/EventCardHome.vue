<template>
  <div
    class="relative rounded-xl shadow-lg overflow-hidden h-96 w-64 md:w-72 flex-shrink-0 bg-cover bg-center"
    :style="{ backgroundImage: `url(${eventho.image})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div class="relative h-full flex flex-col justify-end p-6 text-white">
      <h3 class="font-bold text-xl mb-2">{{ eventho.title }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  eventho: {
    type: Object,
    required: true,
  },
})
</script>
