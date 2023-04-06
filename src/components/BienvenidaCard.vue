<template>
  <q-card
    flat
    class="card"
  >
    <q-card-section
      class="q-pa-none section"
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
  background-color: #000000;
  flex-direction: column;
  z-index: 6;
}

.img-logo {
  position: absolute;
  z-index: 10;
  top: calc(100vh / 6.5);
  width: calc(100vh / 1.8);
  right: calc(25% / 2.5);
}
</style>

<script setup>
import image1 from '@/assets/fondo-inicio-1.svg';
import image2 from '@/assets/fondo-inicio-2.svg';
import logoApp from '@/assets/logo-workersapp.svg';
</script>
