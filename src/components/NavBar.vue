<template>
  <q-header
    elevated
    class="bg-primary text-white"
    style="height: 106px"
  >
    <div
      class="row no-wrap shadow-1"
      style="height: inherit"
    >
      <q-toolbar class="col-5 tolbar1">
        <q-toolbar-title class="text-h4 q-ml-xl title">WORKERSAPP</q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="col-7 flex justify-around tolbar2">
        <q-btn
          flat
          class="q-mr-xl transparent"
          size="2rem"
          label="Registrarse"
          @click="emit('mostrarOpciones', true)"
        >
          <q-img
            class="q-ml-md"
            :src="iconAdd"
            width="38px"
          />
        </q-btn>
        <q-btn
          flat
          class="bg-red q-mr-xl transparent"
          size="2rem"
          label="Iniciar sesión"
        >
          <q-img
            class="q-ml-sm"
            :src="iconUser"
            width="38px"
          />
        </q-btn>
      </q-toolbar>
    </div>
  </q-header>
</template>
<style scoped>
.tolbar1 {
  background: linear-gradient(to right, #ffdb58, #ffba53);
  font-family: 'jost';
}

.title {
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.4);
  font-family: 'jost';
}

.tolbar2 {
  background: linear-gradient(to right, #ffba53, #ff924d);
  font-family: 'jost';
}
</style>

<script setup>
import iconAdd from '@/assets/person-add.svg';
import iconUser from '@/assets/usuario.svg';

const emit = defineEmits(['mostrarOpciones']);
</script>
