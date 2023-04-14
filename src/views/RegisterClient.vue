<template>
    <q-header
    elevated
    class="header flex items-center justify-around"
    style="height: 106px"
  >
    <q-btn class="btn-regresar text-weight-bold" label="Regresar"/>
    <div class="title text-h3">Registrarse como ususario</div>
    <q-img class="logo" :src="logo" />
  </q-header>
  <q-page>
    <CardRegister />
  </q-page>
</template>

<style scoped>
.header {
  background: linear-gradient(to right, #ffdb58, #FF924D);
  font-family: 'jost';
}

.btn-regresar {
    background-color: #F48D2D;
    color: black;
    border-radius: 10px;
}

.title {
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
}

.logo {
    width: 100px;
}
</style>

<script setup>
import logo from "@/assets/logo-workersapp.svg";
import CardRegister from "../components/CardRegister.vue";
</script>
