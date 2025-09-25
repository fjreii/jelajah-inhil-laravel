<template>
  <div>
    <section
      class="hero-bg rounded-xl text-white h-[80vh] flex flex-col justify-center items-center text-center p-8 bg-gray-800 bg-blend-overlay bg-opacity-50"
    >
      <h1 class="hero-txt text-7xl md:text-6xl font-bold mb-4">Jelajahi Inhil nan Molek</h1>
      <p class="text-lg md:text-xl max-w-2xl mb-8">
        Temukan surga tersembunyi, budaya yang kaya, dan petualangan tak terlupakan di seluruh
        penjuru Indragiri Hilir.
      </p>
      <!-- <RouterLink
        to="/destinasi"
        class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg"
        >Mulai Petualangan</RouterLink
      > -->
    </section>

    <section class="my-16">
      <h2 class="text-3xl font-bold text-center mb-8">Mengapa Memilih Kami?</h2>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <WhyChooseUsCard
          icon="fa-map-marked-alt"
          title="Destinasi Terkurasi"
          description="Kami memilih destinasi terbaik dengan pengalaman paling otentik untuk Anda."
        />
        <WhyChooseUsCard
          icon="fa-shield-alt"
          title="Aman & Terpercaya"
          description="Perjalanan Anda dijamin aman dengan pemandu profesional dan layanan terpercaya."
        />
        <WhyChooseUsCard
          icon="fa-headset"
          title="Dukungan 24/7"
          description="Tim kami siap membantu Anda kapan saja, memastikan perjalanan Anda lancar."
        />
      </div>
    </section>

    <section class="my-16">
      <h2 class="text-3xl font-bold text-center mb-2">Destinasi Populer</h2>
      <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Jelajahi tempat-tempat paling ikonik dan menakjubkan yang menjadi favorit para wisatawan di
        Indonesia.
      </p>
      <div
        class="popular-destinations grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-white text-center"
      >
        <div
          v-for="dest in popularDestinations"
          :key="dest.title"
          class="relative rounded-xl shadow-lg overflow-hidden group h-80 bg-cover bg-center transform hover:-translate-y-2 transition-transform duration-300"
          :style="{ backgroundImage: `url(${dest.image})` }"
        >
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300"
          ></div>
          <div class="relative h-full flex flex-col justify-end p-6">
            <h3 class="text-2xl font-bold">{{ dest.title }}</h3>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <RouterLink
          to="/destinasi"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
        >
          Lihat Semua Destinasi
        </RouterLink>
      </div>
    </section>

    <section class="my-16">
      <h2 class="text-3xl font-bold text-center mb-2">Event & Festival</h2>
      <p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Jangan lewatkan perayaan budaya dan acara menarik yang akan datang.
      </p>

      <div class="grid md:grid-cols-3 gap-4 px-8">
        <EventCardOverlay v-for="event in featuredEvents" :key="event.id" :event="event" />
      </div>
      <div class="mt-10 text-center">
        <RouterLink
          to="/event"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
        >
          Lihat Semua Event
        </RouterLink>
      </div>
    </section>

    <section class="my-16 bg-gray-100 py-12 rounded-lg">
      <h2 class="text-3xl font-bold text-center mb-2">Apa Kata Mereka?</h2>
      <p class="text-center text-gray-600 mb-10">
        Kesan dan pengalaman dari mereka yang telah menjelajah bersama kami.
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </section>

    <section class="my-2 bg-blue-600 text-white rounded-lg overflow-hidden">
      <div class="grid md:grid-cols-2 items-center">
        <div class="p-10 text-center md:text-left">
          <h2 class="text-3xl font-bold mb-2">Dapatkan Info & Penawaran Terbaik</h2>
          <p class="mb-6 max-w-xl mx-auto md:mx-0">
            Berlangganan newsletter kami untuk mendapatkan update terbaru, tips perjalanan, dan
            promo spesial langsung ke email Anda.
          </p>

          <form
            v-if="!subscribed"
            @submit.prevent="handleSubscription"
            class="max-w-md mx-auto md:mx-0 flex"
          >
            <input
              v-model="email"
              type="email"
              placeholder="Masukkan alamat email Anda"
              class="w-full px-4 py-3 rounded-l-md text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              class="bg-gray-800 hover:bg-gray-900 text-white font-bold px-6 py-3 rounded-r-md transition duration-300"
            >
              Berlangganan
            </button>
          </form>

          <div v-else class="bg-green-500 text-white font-bold p-4 rounded-lg">
            <p>🎉 Terima kasih telah berlangganan!</p>
          </div>
        </div>
        <div class="hidden md:block h-full">
          <img
            src="/public/assets/img/condong.png"
            alt="Newsletter"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import WhyChooseUsCard from '../components/WhyChooseUsCard.vue'
// import EventScroller from '../components/EventScroller.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import EventCardOverlay from '../components/EventCardOverlay.vue'
import { events } from '../data/events' // <-- IMPORT data events di sini

// Data dipindahkan dari HTML ke script, membuatnya lebih mudah dikelola
const popularDestinations = [
  { title: 'Pantai Solop', image: '/assets/img/solop.jpg' },
  { title: 'Bukit Condong', image: '/assets/img/condong-camp.jpg' },
  { title: 'Air Terjun 86', image: '/assets/img/air-terjun-86.jpg' },
  { title: 'Air Terjun Tembulon Ruso', image: '/assets/img/tembulon-ruso.jpg' },
  { title: 'Agrowisata Kelapa', image: '/assets/img/kelapa.jpg' },
  { title: 'Hutan Bakau Sungai Asam', image: '/assets/img/bakau.jpg' },
]

// const popularEvents = [
//   { title: 'Sampan Leper', image: '/resources/img/sampan-leper.jpg' },
//   { title: 'Sampan Slodang', image: '/resources/img/slodang.jpg' },
//   { title: 'Festival Menongkah', image: '/resources/img/menongkah' },
//   { title: 'Festival Sungai Indragiri', image: '/resources/img/festival-indragiri' },
//   { title: 'Workshop Kerajinan Tangan', image: '/resources/img/workshop-kerajinan.jpg' },
// ]

// Data Event untuk HomeView (misalnya, 3 event teratas/terbaru)
// Anda bisa mengambil beberapa item dari array 'events' yang lengkap
const featuredEvents = ref(events.slice(0, 3)) // Ambil 3 event pertama

const testimonials = ref([
  {
    quote:
      'Pengalaman yang luar biasa! Destinasinya terkurasi dengan baik dan pemandunya sangat profesional. Sangat direkomendasikan!',
    avatar: 'https://placehold.co/100x100/e0e0e0/757575?text=A',
    name: 'Andini Putri',
    origin: 'Wisatawan dari Jakarta',
  },
  {
    quote:
      'Jelajah Inhil membuat perjalanan solo saya ke Bukit Condong menjadi sangat mudah dan aman. Dukungan 24/7 mereka benar-benar membantu.',
    avatar: 'https://placehold.co/100x100/e0e0e0/757575?text=B',
    name: 'Budi Santoso',
    origin: 'Backpacker dari Surabaya',
  },
  {
    quote:
      'A truly memorable trip to Pantai Solop. Everything was well-organized. Thank you for the wonderful service!',
    avatar: 'https://placehold.co/100x100/e0e0e0/757575?text=C',
    name: 'Citra Lestari',
    origin: 'Wisatawan dari Malaysia',
  },
])

// Variabel reaktif untuk menampung input email
const email = ref('')

// Variabel reaktif untuk menandai status berlangganan
const subscribed = ref(false)

// Fungsi yang akan dijalankan saat form disubmit
const handleSubscription = () => {
  if (email.value && email.value.includes('@')) {
    // Simulasi pengiriman data ke server
    console.log(`Email terdaftar: ${email.value}`)

    // Tampilkan pesan sukses
    subscribed.value = true

    // Kosongkan input field (opsional)
    // email.value = '';
  } else {
    alert('Silakan masukkan alamat email yang valid.')
  }
}
</script>
