<template>
  <NavBar @mostrarOpciones="mostrarOpciones"/>
  <q-page>
    <BienvenidaCard />
    <q-dialog v-model="confirm">
      <q-card class="q-pa-xl" style="background-color: rgba(255, 255, 255, 0.2);">
        <q-card-actions align="center" vertical>
          <q-btn class="button q-mb-xl text-white" rounded label="Registrase como cliente" to="/registro-cliente"/>
          <q-btn class="button text-white" rounded label="Registrarse como colaborador"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style scoped>
.button {
  width: 366px;
  height: 77px;
  font-family: 'jost';
  font-size: 20px;
  background-color: #F47C0C;
}
</style>

<script setup>
import NavBar from '../components/NavBar.vue';
import BienvenidaCard from '../components/BienvenidaCard.vue';
import { shallowRef } from 'vue';

const confirm = shallowRef(false)

const mostrarOpciones = (value) => confirm.value = value
</script>
