<template>
  <q-card
    flat
    class="card"
  >
    <q-card-section
      class="q-pa-none section bg-black"
      vertical
    >
      <q-img
        :src="image1"
        style="width: 50%; height: calc((100vh - 106px) / 2)"
      />
      <q-img
        :src="image2"
        style="width: 50%; height: calc((100vh - 106px) / 2)"
      />
    </q-card-section>
    <q-img
      class="img-logo"
      :src="logoApp"
      width="400px"
    />
  </q-card>
</template>

<style scoped>
.card {
  height: calc(100vh - 106px);
  position: relative;
  z-index: 5;
}
.section {
  display: flex;
  flex-direction: column;
  z-index: 6;
}

.img-logo {
  position: absolute;
  z-index: 10;
  top: calc(25vh / 2);
  right: calc(12.5% / 2);
}
</style>

<script setup>
import image1 from '@/assets/fondo-inicio-1.svg';
import image2 from '@/assets/fondo-inicio-2.svg';
import logoApp from '@/assets/logo-workersapp.svg';
</script>
