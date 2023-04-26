<template>
  <q-header
    elevated
    class="header flex items-center justify-between q-pl-xl q-pr-xl"
    style="height: 106px"
  >
    <q-img
      class="logo"
      :src="logo"
    />
    <div class="title text-h2 text-weight-bold">WorkersApp</div>
    <div>
      <q-btn
        class="btn-menu text-weight-bold q-mr-md"
        label="Menu"
        @click="toggleLeftDrawer"
      />
      <q-icon
        name="notifications"
        size="64px"
      />
    </div>
  </q-header>
  <q-drawer
    v-model="leftDrawerOpen"
    side="left"
    overlay
    behavior="mobile"
    :width="450"
  >
    <q-scroll-area
      class="fit"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
      <q-list
        padding
        class="menu-list"
      >
        <q-item class="q-mb-lg">
          <q-item-section
            avatar
            class="flex items-center q-ml-md q-mr-sm"
          >
            <q-icon
              name="account_circle"
              size="6rem"
              color="blue-grey-14"
            />
            <q-item-label lines="1">
              <q-btn
                color="red-14"
                flat
              >
                Mi perfil
              </q-btn>
            </q-item-label>
          </q-item-section>
          <q-item-section class="perfil-nombre">
            <q-item-label>Luis Alberto Montes Alatorre</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          class="q-mb-md"
        >
          <q-item-section
            top
            avatar
          >
            <q-avatar
              icon="home"
              text-color="white"
              size="4rem"
            />
          </q-item-section>
          <q-item-section class="section-item">Inicio</q-item-section>
        </q-item>
        <q-item
          clickable
          class="q-mb-md"
        >
          <q-item-section
            top
            avatar
          >
            <q-avatar
              icon="shopping_cart"
              text-color="white"
              size="4rem"
            />
          </q-item-section>
          <q-item-section class="section-item">Compras</q-item-section>
        </q-item>
        <q-item
          clickable
          class="q-mb-md"
        >
          <q-item-section
            top
            avatar
          >
            <q-avatar
              icon="category"
              text-color="white"
              size="4rem"
            />
          </q-item-section>
          <q-item-section class="section-item">Categorías</q-item-section>
        </q-item>
        <q-item
          clickable
          class="q-mb-md"
        >
          <q-item-section
            top
            avatar
          >
            <q-avatar
              icon="receipt_long"
              text-color="white"
              size="4rem"
            />
          </q-item-section>
          <q-item-section class="section-item">Mis contratos</q-item-section>
        </q-item>
        <q-item
          clickable
          class="q-mb-md"
        >
          <q-item-section
            top
            avatar
          >
            <q-avatar
              icon="settings"
              text-color="white"
              size="4rem"
            />
          </q-item-section>
          <q-item-section class="section-item">Configuración</q-item-section>
        </q-item>
        <q-item
          clickable
          class="q-mb-md"
        >
          <q-item-section
            top
            avatar
          >
            <q-avatar
              icon="security"
              text-color="white"
              size="4rem"
            />
          </q-item-section>
          <q-item-section class="section-item">Seguridad y Privacidad</q-item-section>
        </q-item>
        <q-item
          clickable
          class="q-mb-md"
        >
          <q-item-section
            top
            avatar
          >
            <q-avatar
              text-color="white"
              icon="help_outline"
              size="4rem"
            />
          </q-item-section>
          <q-item-section class="section-item">Ayuda</q-item-section>
        </q-item>
        <div class="flex items-center justify-center q-pt-lg q-pb-md">
          <q-btn
            style="height: 55px"
            rounded
            icon="logout"
            color="red-7"
            label="Cerrar sesión"
          />
        </div>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped>
.header {
  background: linear-gradient(to right, #ffdb58, #ff924d);
  font-family: 'jost';
}

.btn-menu {
  background-color: #e6e6e6;
  color: black;
  border-radius: 10px;
  font-size: 1.2rem;
}

.title {
  color: #330000;
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
  -webkit-text-stroke: 0.1px black;
}

.logo {
  width: 100px;
}

.fit {
  background: rgb(250, 153, 62);
  background: linear-gradient(115deg, rgba(250, 153, 62, 1) 48%, rgba(255, 167, 86, 1) 30%);
}

.perfil-nombre {
  font-size: 35px;
  color: white;
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
}

.section-item {
  color: white;
  font-size: 28px;
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
}
</style>

<script setup>
import logo from '@/assets/logo-workersapp.svg';
import { shallowRef } from 'vue';

const leftDrawerOpen = shallowRef(false);

const thumbStyle = shallowRef({
  right: '4px',
  borderRadius: '5px',
  backgroundColor: '#027be3',
  width: '5px',
  opacity: 0.75,
});

const barStyle = shallowRef({
  right: '2px',
  borderRadius: '9px',
  backgroundColor: '#027be3',
  width: '9px',
  opacity: 0.2,
});

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
