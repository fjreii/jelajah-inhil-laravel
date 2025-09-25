<template>
  <section class="animate-fade-in">
    <div
      class="hero-txt hero-bg rounded-xl text-white h-[40vh] md:h-[50vh] flex flex-col justify-center items-center text-center p-8 bg-gray-800 bg-blend-overlay bg-opacity-50"
    >
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Tentang kami</h1>
    </div>
    <div class="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/resources/img/solop.jpg" alt="Tim Jelajah Nusantara" class="rounded-lg" />
        </div>
        <div class="text-gray-700 space-y-4">
          <p class="text-lg">
            <strong>Jelajah Inhil</strong> lahir dari kecintaan kami terhadap kekayaan alam dan
            budaya Indonesia. Misi kami adalah untuk memperkenalkan pesona Indonesia kepada dunia,
            sambil mendukung pariwisata yang berkelanjutan dan bertanggung jawab.
          </p>
          <p>
            Kami percaya bahwa setiap perjalanan adalah cerita. Oleh karena itu, kami berdedikasi
            untuk menciptakan pengalaman liburan yang bukan hanya indah, tetapi juga bermakna bagi
            setiap pelanggan kami.
          </p>
          <p>
            Tim kami terdiri dari para profesional di bidang pariwisata yang siap membantu Anda
            merencanakan petualangan impian Anda di negeri ini.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak ada logika JavaScript yang diperlukan untuk halaman ini
// karena semua kontennya statis.
</script>

<style scoped>
/* Animasi fade-in yang sama untuk konsistensi antar halaman */
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
