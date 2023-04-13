<template>
  <div class="">
    <q-carousel
      animated
      autoplay="true"
      v-model="slide"
      arrows
      infinite
      height="20rem"
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
  </div>
  <q-page class="page2">
    <div class="q-pa-md container">
      <q-card
        class="my-card"
        flat
      >
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax1.jpg"
          :height="150"
        />

        <q-card-section>
          <div class="text-h4">¡Bienvenido!</div>
          <div class="text-subtitle1">Juan Antonio</div>
        </q-card-section>
      </q-card>
    </div>
    <div
      class="q-pa-md container"
      v-for="i in 10"
      :key="i"
    >
      <q-card
        class="my-card_2"
        bordered
      >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Juan</q-item-label>
            <q-item-label caption>Trabajo terminado :D</q-item-label>
          </q-item-section>
        </q-item>
        <q-card-section>
          <div class="row no-wrap items-center">
            <q-rating
              size="18px"
              v-model="stars"
              :max="5"
              color="primary"
            />
            <span class="text-caption text-grey q-ml-sm">4.0 (551)</span>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-actions align="right">
          <q-btn
            flat
            round
            color="red"
            icon="favorite"
          />
          <q-btn
            flat
            round
            color="teal"
            icon="bookmark"
          />
          <q-btn
            flat
            round
            color="primary"
            icon="share"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.page2 {
  background: linear-gradient(to right, #ffdb58, #ffba53, #ffba53, #ff924d);
  background-size: cover;
  margin-top: 2rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.my-card {
  width: 100%;
  max-width: 500px;
  text-align: center;
  background-color: transparent;
  margin-bottom: 20px;
}
.container {
  display: flex;
  justify-content: center;
}
.my-card_2 {
  width: 100%;
  max-width: 90%;
  text-align: justify;
}
</style>

<script setup>
import { ref } from 'vue';
const slide = ref(1);
const lorem = 'Mi primer trabajo ya termino me siento agusto de como quedo.';
const stars = ref();
</script>
