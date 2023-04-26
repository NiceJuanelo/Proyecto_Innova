<template>
  <q-card class="my-card">
    <q-card-section class="section-galery q-pa-none">
      <q-img
        class="img"
        :src="img1"
      />
      <q-img
        class="img"
        :src="img2"
      />
      <q-img
        class="img"
        :src="img3"
      />
    </q-card-section>
    <q-card-section class="section-options q-ml-xl q-mr-xl q-mt-lg">
      <div class="text-user text-h3 text-center">Hola Luis_alberto!</div>
      <div class="flex items-center justify-around q-mt-xl q-mb-xl">
        <q-btn
          class="btn-option"
          label="Productos o Herramientas"
        />
        <q-btn
          class="btn-option"
          label="Solicitar servicio"
        />
      </div>
    </q-card-section>
    <q-img
      class="img-logo"
      :src="logo"
      width="528px"
      height="455px"
    />
  </q-card>
</template>

<style scoped>
.my-card {
  position: relative;
  z-index: 5;
}

.section-galery {
  z-index: 6;
}

.img {
  width: calc(100% / 3);
  height: 256px;
}

.section-options {
  background: linear-gradient(to right, #ffdb58, #ff924d);
  z-index: 7;
  padding-top: calc(528px / 2);
}

.text-user {
  font-family: 'kiwi_maru';
}

.btn-option {
  background-color: rgba(255, 255, 255, 0.65);
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
  width: 450px;
  height: 168px;
  font-family: 'kanit';
  border-radius: 25px;
  font-size: 32px;
  font-weight: bold;
}
.img-logo {
  position: absolute;
  top: 47px;
  right: calc(50% - (528px / 2));
  margin-bottom: 50px;
  z-index: 8;
}
</style>

<script setup>
import logo from '@/assets/logo-workersapp.svg';
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.png';
import img3 from '@/assets/img3.png';
</script>
