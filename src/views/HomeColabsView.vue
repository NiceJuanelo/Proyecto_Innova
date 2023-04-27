<template>
  <q-header elevated>
    <q-toolbar
      class="col-5 tolbar1"
      style="height: 80px"
    >
      <q-btn
        @click="drawer = !drawer"
        dense
        color="orange"
        icon="menu"
      />
      <q-toolbar-title
        class="absolute-center"
        style="font-size: 2rem"
      >
        WorkersApp
      </q-toolbar-title>

      <img
        src="../assets/Logo_Workers.png"
        style="width: 6rem; height: 6rem; margin-left: 80rem"
      />
      <q-tabs active-color="white">
        <q-tab icon="notifications" />
      </q-tabs>
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="drawer"
    side="left"
    show-if-above
    bordered
    class="bg-grey-2"
  >
    <q-scroll-area
      style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
    >
      <q-list padding>
        <q-item
          clickable
          to="/homeColabs/inicioColabs"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item
          clickable
          to="/homeColabs/galeriaColabs"
        >
          <q-item-section avatar>
            <q-icon name="collections" />
          </q-item-section>

          <q-item-section>Galeria</q-item-section>
        </q-item>

        <q-item
          clickable
          to="/homeColabs/clientesColabs"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>

          <q-item-section>Mis clientes</q-item-section>
        </q-item>

        <q-item
          clickable
          to="/homeColabs/seguridadColabs"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="security" />
          </q-item-section>

          <q-item-section>Seguridad y privacidad</q-item-section>
        </q-item>
        <q-item
          clickable
          to="/homeColabs/configuracionColabs"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>Configuración</q-item-section>
        </q-item>
        <q-item
          clickable
          to="/homeColabs/ayudaColabs"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="help_outline" />
          </q-item-section>

          <q-item-section>Ayuda</q-item-section>
        </q-item>
        <q-btn
          style="width: 80%; margin-left: 35px; margin-top: 50px; border-radius: 100px"
          icon="logout"
          color="red-5"
          label="Cerrar Sesión"
          @click="mostrarDialogoAutorizacion()"
        ></q-btn>
      </q-list>
    </q-scroll-area>
    <q-img
      class="absolute-top"
      src="https://cdn.quasar.dev/img/material.png"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar
          size="56px"
          class="q-mb-sm"
        >
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">Juan Antonio</div>
        <div>@NiceJuanelo</div>
      </div>
    </q-img>
  </q-drawer>
  <q-footer class="sin-borde">
    <q-toolbar class="">
      <q-toolbar-title class="absolute-center">WORKERSAPP</q-toolbar-title>
    </q-toolbar>
  </q-footer>
  <q-dialog
    ref="dialogo"
    v-model="contenido"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card>
      <q-card-section style="text-align: center">
        <q-icon
          name="error_outline"
          style="color: red; font-size: 4rem"
        />
      </q-card-section>
      <q-card-section style="text-align: center">
        <div class="text-h6">
          Si deseas salir haz clic en Cerrar Sesión o en Cancelar para permanecer en la pagina
        </div>
      </q-card-section>
      <q-card-actions
        class="flex justify-center"
        align="center"
        horizontal
      >
        <q-btn
          color="blue"
          label="Cancelar"
          style="padding: 0 15px 0 15px"
          v-close-popup
        />
        <q-btn
          color="red"
          label="Cerrar Sesión"
          style="padding: 0 15px 0 15px"
          @click="login()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-page-container style="padding: 0px">
    <router-view />
  </q-page-container>
</template>

<style scoped>
.tolbar1 {
  background: linear-gradient(to right, #ffdb58, #ffba53, #ffba53, #ff924d);
}
.sin-borde {
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  background-color: #ee7327;
}
</style>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(false);
const contenido = ref(false);
const router = useRouter();

const mostrarDialogoAutorizacion = () => {
  contenido.value = true;
};

const login = () => {
  router.push('/login');
};
</script>
