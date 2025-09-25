<template>
  <div class="bg-white p-6 rounded-lg shadow-md text-center">
    <i class="text-4xl text-blue-500 mb-4 fas" :class="icon"></i>
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
