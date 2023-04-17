<template>
  <q-page class="page2">
    <div class="q-pa-md container">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-card-section>
            <img
              style="width: 100px; height: 100px"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col-4 text-h5">
            Pedro Guzman Espinoza Paz
            <q-item-label caption>Hola me llamo Pedro y soy un cliente confiable</q-item-label>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="text-h8">Calificacion por los demas usuarios</q-card-section>
          <q-separator vertical />
          <q-rating
            v-model="star"
            size="2rem"
            color="white"
            icon="star_border"
            icon-selected="star"
            icon-half="start"
            no-dimming
          ></q-rating>
          <q-separator vertical />
          <div class="mi-clase-centrada"><q-btn>Mas información</q-btn></div>
        </q-card-section>
      </q-card>
      <q-separate />
    </div>
    <div class="q-pa-md container">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-card-section>
            <img
              style="width: 100px; height: 100px"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col-4 text-h5">
            Juan Antonio Gutierrez Hernandez
            <q-item-label caption>Hola me llamo Juan y me gusta hacer tartos</q-item-label>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="text-h8">Calificacion por los demas usuarios</q-card-section>
          <q-separator vertical />
          <q-rating
            v-model="star"
            size="2rem"
            color="white"
            icon="star_border"
            icon-selected="star"
            icon-half="start"
            no-dimming
          ></q-rating>
          <q-separator vertical />
          <div class="mi-clase-centrada"><q-btn>Mas información</q-btn></div>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-md container">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-card-section>
            <img
              style="width: 100px; height: 100px"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col-4 text-h5">
            Karla Alejandra
            <q-item-label caption>Hola me llamo Karla y soy un cliente responsable</q-item-label>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="text-h8">Calificacion por los demas usuarios</q-card-section>
          <q-separator vertical />
          <q-rating
            v-model="star"
            size="2rem"
            color="white"
            icon="star_border"
            icon-selected="star"
            icon-half="start"
            no-dimming
          ></q-rating>
          <q-separator vertical />
          <div class="mi-clase-centrada"><q-btn>Mas información</q-btn></div>
        </q-card-section>
      </q-card>
      <q-separate />
    </div>
    <div class="q-pa-md container">
      <q-card class="my-card">
        <q-card-section horizontal>
          <q-card-section>
            <img
              style="width: 100px; height: 100px"
              src="https://cdn.quasar.dev/img/boy-avatar.png"
            />
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col-4 text-h5">
            Paul Eduardo
            <q-item-label caption>Hola me llamo Paul y soy muy amigable</q-item-label>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="text-h8">Calificacion por los demas usuarios</q-card-section>
          <q-separator vertical />
          <q-rating
            v-model="star"
            size="2rem"
            color="white"
            icon="star_border"
            icon-selected="star"
            icon-half="start"
            no-dimming
          ></q-rating>
          <q-separator vertical />
          <div class="mi-clase-centrada"><q-btn>Mas información</q-btn></div>
        </q-card-section>
      </q-card>
      <q-separate />
    </div>
  </q-page>
</template>

<style scoped>
.page2 {
  background: linear-gradient(to right, #ffdb58, #ffba53, #ffba53, #ff924d);
  background-size: cover;
  margin-top: 2.8rem;
  margin-left: 2.8rem;
  margin-right: 2.8rem;
}
.mi-clase-centrada {
  display: flex;
  justify-content: center;
}
.my-card {
  width: 100%;
  height: 150px;
  text-align: center;
  background-color: transparent;
}
.container {
  display: flex;
  justify-content: center;
}
</style>

<script setup>
import { ref } from 'vue';

const star = ref(null);
</script>
