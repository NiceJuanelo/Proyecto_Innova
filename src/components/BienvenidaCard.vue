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
        style="width: 56.5%; height: calc((100vh - 106px) / 2)"
      />
      <q-img
        :src="image2"
        style="width: 56.5%; height: calc((100vh - 106px) / 2)"
      />
    </q-card-section>
    <div class="container-imgs">
      <div class="container-img_cont">
        <q-img
          class="img-logo"
          :src="logoApp"
        />
        <div class="canvas-relleno">
          <div class="canvas"></div>
        </div>
        <div class="canvas1-relleno">
          <div class="canvas1"></div>
        </div>
        <div class="canvas2"></div> 
      </div>
    </div>
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
  right: calc(25% / 1.5);
}

.container-imgs {
  z-index: 7;
  height: calc(100vh - 106px);
  width: calc(100% / 1.26);
  right: 0;
  top: 0;
  position: absolute;
}

.container-img_cont {
  width: 100;
  height: 100%;
  position: relative;
}

.canvas {
  z-index: 7;
  width: 0;
  height: 0;
  right: 100%;
  position: absolute;
  border-right: 400px solid rgba(240, 173, 78, 0.53);
  border-top: calc((100vh - 106px) / 2) solid transparent;
  border-bottom: calc((100vh - 106px) / 2) solid transparent;
}

.canvas-relleno {
  z-index: 6;
  position: absolute;
  width: 87.8px;
  right: calc(100% / 1.819);
  height: 100%;
  background-color: rgba(240, 173, 78, 0.53);
}

.canvas1 {
  z-index: 8;
  width: 0;
  height: 0;
  position: absolute;
  right: 100%;
  border-right: 400px solid #F47C0C;
  border-top: calc((100vh - 106px) / 2) solid transparent;
  border-bottom: calc((100vh - 106px) / 2) solid transparent;
}

.canvas1-relleno {
  z-index: 7;
  position: absolute;
  width: 95px;
  right: calc(100% / 2.166);
  height: 100%;
  background-color: #F47C0C;
}

.canvas2 {
  z-index: 9;
  width: 0;
  height: 0;
  position: absolute;
  right: 46%;
  border-right: 400px solid black;
  border-top: calc((100vh - 106px) / 2) solid transparent;
  border-bottom: calc((100vh - 106px) / 2) solid transparent;
}
</style>

<script setup>
import image1 from '@/assets/fondo-inicio-1.svg';
import image2 from '@/assets/fondo-inicio-2.svg';
import logoApp from '@/assets/logo-workersapp.svg';
</script>
