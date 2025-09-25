<template>
  <div class="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
    <p class="text-gray-600 italic flex-grow">"{{ testimonial.quote }}"</p>
    <div class="flex items-center mt-4">
      <img :src="testimonial.avatar" class="w-12 h-12 rounded-full mr-4" alt="User Avatar" />
      <div>
        <p class="font-bold">{{ testimonial.name }}</p>
        <p class="text-sm text-gray-500">{{ testimonial.origin }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Mendefinisikan props yang akan diterima oleh komponen ini dari komponen induknya.
defineProps({
  testimonial: {
    type: Object, // Tipe datanya adalah sebuah objek
    required: true, // Prop ini wajib diisi
  },
})
</script>

<style scoped>
/* Tidak ada style khusus yang diperlukan di sini */
</style>
