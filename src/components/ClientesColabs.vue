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
          <q-card-section class="text-h8">
            <q-input
              label="Escribe tus comentarios aquí"
              v-model="comentario"
              dense
            />
            <q-btn
              label="Enviar"
              @click="enviarComentario()"
            />
          </q-card-section>
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
          <div class="mi-clase-centrada"><q-btn @click="mostrar()">Mas información</q-btn></div>
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
          <q-card-section class="text-h8">
            <q-input
              label="Escribe tus comentarios aquí"
              v-model="comentario"
              dense
            />
            <q-btn
              label="Enviar"
              @click="enviarComentario()"
            />
          </q-card-section>
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
          <div class="mi-clase-centrada"><q-btn @click="mostrar()">Mas información</q-btn></div>
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
          <q-card-section class="text-h8">
            <q-input
              label="Escribe tus comentarios aquí"
              v-model="comentario"
              dense
            />
            <q-btn
              label="Enviar"
              @click="enviarComentario()"
            />
          </q-card-section>
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
          <div class="mi-clase-centrada"><q-btn @click="mostrar()">Mas información</q-btn></div>
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
          <q-card-section class="text-h8">
            <q-input
              label="Escribe tus comentarios aquí"
              v-model="comentario"
              dense
            />
            <q-btn
              label="Enviar"
              @click="enviarComentario()"
            />
          </q-card-section>
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
          <div class="mi-clase-centrada"><q-btn @click="mostrar()">Mas información</q-btn></div>
        </q-card-section>
      </q-card>
      <q-separate />
    </div>
  </q-page>
  <q-dialog v-model="confirm">
    <q-card>
      <q-card-section>
        <q-avatar>
          <img
            src="https://cdn.quasar.dev/img/boy-avatar.png"
            alt="Avatar"
          />
        </q-avatar>
      </q-card-section>

      <q-card-section>
        <q-input
          label="Calle"
          v-model="calle"
          readonly
        />
        <q-input
          label="Edad"
          v-model="edad"
          readonly
        />
        <q-input
          label="Correo electrónico"
          v-model="correo"
          readonly
        />
        <q-input
          label="Numero"
          v-model="numero"
          readonly
        />
      </q-card-section>

      <q-card-actions>
        <q-btn
          label="Cerrar"
          @click="confirm = false"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
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
import { useQuasar } from 'quasar';

const star = ref(null);
const $q = useQuasar();
const confirm = ref(false);
const calle = ref('Gardenias #58');
const edad = ref(35);
const correo = ref('pedrodoe@gmail.com');
const numero = ref('3521934518');
const comentario = ref('');

const enviarComentario = () => {
  console.log(comentario.value);
  $q.notify({
    color: 'blue-grey',
    message: 'Se envio el comentario',
    position: 'top',
    timeout: 1000,
  });
};

const mostrar = () => {
  confirm.value = true;
};
</script>
