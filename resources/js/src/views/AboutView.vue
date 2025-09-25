<template>
  <section class="animate-fade-in bg-gray-50 pb-16">
    <div
      class="hero-bg-about rounded-b-xl text-white h-[50vh] md:h-[60vh] flex flex-col justify-center items-center text-center p-8 bg-gray-900 bg-blend-overlay bg-opacity-60"
    >
      <h1 class="hero-txt text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Selamat Datang di Indragiri Hilir
      </h1>
      <p class="text-lg md:text-xl max-w-3xl drop-shadow-md">
        Menjelajahi Pesona Negeri Seribu Parit & Hamparan Kelapa Dunia.
      </p>
    </div>

    <div class="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-5xl mx-auto -mt-24 relative z-10">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-800">Mengenal Jantung Riau Pesisir</h2>
        <p class="mt-2 text-gray-600 max-w-2xl mx-auto">
          Indragiri Hilir adalah kabupaten unik yang kehidupannya menyatu dengan alam pesisir,
          sungai, dan perkebunan kelapa yang legendaris.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="bg-blue-50 p-4 rounded-lg">
          <i class="fas fa-water text-3xl text-blue-500 mb-2"></i>
          <h3 class="font-semibold">Negeri Seribu Parit</h3>
          <p class="text-sm text-gray-500">Julukan khas karena banyaknya kanal dan sungai.</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <i class="fas fa-seedling text-3xl text-green-500 mb-2"></i>
          <h3 class="font-semibold">Lumbung Kelapa</h3>
          <p class="text-sm text-gray-500">Salah satu penghasil kelapa terbesar di dunia.</p>
        </div>
        <div class="bg-yellow-50 p-4 rounded-lg">
          <i class="fas fa-palette text-3xl text-yellow-500 mb-2"></i>
          <h3 class="font-semibold">Budaya Melayu</h3>
          <p class="text-sm text-gray-500">Kental dengan pengaruh adat Melayu, Banjar, & Bugis.</p>
        </div>
        <div class="bg-red-50 p-4 rounded-lg">
          <i class="fas fa-ship text-3xl text-red-500 mb-2"></i>
          <h3 class="font-semibold">Festival Unik</h3>
          <p class="text-sm text-gray-500">Rumah bagi Festival Sampan Leper yang mendunia.</p>
        </div>
      </div>
    </div>

    <div class="max-w-5xl mx-auto mt-16 px-6 space-y-16">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div
          class="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/public/assets/img/solop.jpg"
            alt="Pantai Solop"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="text-gray-700">
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Keajaiban Alam yang Tersembunyi</h3>
          <p class="mb-4">
            Dari hamparan pasir putih unik **Pantai Solop** yang terbentuk dari fosil biota laut,
            hingga pemandangan magis "negeri di atas awan" di **Bukit Condong**. Inhil menyimpan
            surga bagi para pencari ketenangan dan keindahan alam asli.
          </p>
          <ul class="list-disc list-inside space-y-1 text-gray-600">
            <li>Air Terjun Tembulon Ruso & Air Terjun 86</li>
            <li>Hutan Bakau yang Asri di Sungai Asam</li>
            <li>Ekowisata berbasis alam dan sungai</li>
          </ul>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div
          class="md:order-last rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/public/assets/img/sampan-leper.jpg"
            alt="Festival Sampan Leper"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="text-gray-700">
          <h3 class="text-2xl font-bold mb-3 text-gray-800">Kekayaan Budaya & Tradisi</h3>
          <p class="mb-4">
            Rasakan semaraknya tradisi lokal melalui festival tahunan yang unik. **Festival Sampan
            Leper**, balapan perahu di atas lumpur, adalah atraksi utama yang menunjukkan semangat
            dan kearifan lokal masyarakat pesisir.
          </p>
          <ul class="list-disc list-inside space-y-1 text-gray-600">
            <li>Festival Sampan Slodang & Menongkah</li>
            <li>Perayaan Gema Muharram yang meriah</li>
            <li>Kerajinan tangan dari anyaman pandan dan kelapa</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="max-w-5xl mx-auto mt-20 px-6">
      <div class="bg-blue-600 rounded-lg text-white p-10 text-center shadow-xl">
        <h2 class="text-3xl font-bold mb-3">Siap Memulai Petualangan Anda?</h2>
        <p class="mb-6 max-w-xl mx-auto">
          Jelajahi destinasi menakjubkan dan ikuti event seru yang telah kami siapkan untuk Anda.
        </p>
        <div class="flex justify-center gap-4">
          <RouterLink
            to="/destinasi"
            class="bg-white text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Lihat Destinasi
          </RouterLink>
          <RouterLink
            to="/event"
            class="border-2 border-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:bg-white hover:text-blue-600"
          >
            Cek Event
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.7s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Gunakan gambar yang berbeda untuk hero di halaman ini */
.hero-bg-about {
  background-image: url('/assets/img/kelapa.jpg');
  background-size: cover;
  background-position: center;
}
</style>
