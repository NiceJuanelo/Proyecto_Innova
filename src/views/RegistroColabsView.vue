<template>
  <q-header elevated>
    <q-toolbar
      class="col-5 tolbar1"
      style="height: 80px"
    >
      <q-btn
        class="bg-orange"
        style="font-size: medium; margin-left: 3rem"
      >
        Regresar
      </q-btn>
      <q-toolbar-title
        class="absolute-center"
        style="font-size: 2rem"
      >
        Registrarse como colaborador
      </q-toolbar-title>

      <img
        src="../assets/Logo_Workers.png"
        style="width: 6rem; height: 6rem; margin-left: 72rem"
      />
    </q-toolbar>
  </q-header>

  <q-page class="flex flex-center fondo">
    <div class="container">
      <div class="align-items-center">
        <div class="col-md-10">
          <img
            src="../assets/Registro_Colabs.png"
            style="width: 3.5rem; height: 3.5rem; margin-left: 10rem; margin-top: 0.5rem"
            class="img-fluid"
          />
        </div>
      </div>
      <q-card
        style="width: 400px; background-color: transparent"
        flat
      >
        <q-separator inset />
        <q-card-section class="q-mt-sm">
          <q-form>
            <q-input
              v-model="nombre"
              type="text"
              color="orange"
              label="Nombre"
              placeholder="Ingresar su nombre"
              class="q-mb-sm"
              outlined
              :rules="[(val) => (val && val.length > 0) || 'Campo necesario']"
            >
              <template v-slot:prepend>
                <q-icon name="badge" />
              </template>
            </q-input>
            <q-input
              v-model="apellido"
              type="text"
              color="orange"
              label="Apellido"
              placeholder="Ingresar sus apellidos"
              class="q-mb-sm"
              outlined
              :rules="[(val) => (val && val.length > 0) || 'Campo necesario']"
            >
              <template v-slot:prepend>
                <q-icon name="badge" />
              </template>
            </q-input>
            <q-select
              multiple
              class="q-mb-sm"
              v-model="opciion_s"
              :options="options"
              label="Categorias"
              :rules="[(val) => (val && val.length > 0) || 'Campo necesario']"
              option-label="nombre_categoria"
            >
              <option
                v-for="opcion in opciones"
                :key="opcion"
                :selected="opcionesSeleccionadas.includes(opcion)"
              >
                {{ opcion }}
              </option>
              <template v-slot:prepend>
                <q-icon
                  name="category"
                  @click.stop.prevent="model = null"
                  class="cursor-pointer"
                />
              </template>
            </q-select>
            <q-input
              v-model="correo"
              type="email"
              color="orange"
              label="Correo"
              placeholder="Ingresar su correo"
              class="q-mb-sm"
              outlined
              :rules="[(val) => (val && val.length > 0) || 'Campo necesario']"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input
              v-model="user"
              type="text"
              color="orange"
              label="Usuario"
              placeholder="Ingresar el usuario"
              class="q-mb-sm"
              outlined
              :rules="[(val) => (val && val.length > 0) || 'Campo necesario']"
            >
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
            <q-input
              v-model="password"
              label="Contraseña"
              color="orange"
              placeholder="Ingresa la contraseña del usuario"
              outlined
              :type="show"
              :rules="[(val) => !!val || 'Campo necesario']"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-btn
                  flat
                  class="q-pa-sm"
                  @click="visiblyPassword"
                >
                  <q-icon :name="nameIcon" />
                </q-btn>
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-separator inset />
        <q-card-actions class="flex justify-center">
          <q-btn
            color="amber-12"
            text-color="black"
            label="Registrarse"
            style="padding: 0 15px 0 15px"
            :disabled="disableBtn"
            @click="cambioComponente()"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>

  <q-footer class="sin-borde">
    <q-toolbar class="">
      <q-toolbar-title class="absolute-center">WORKERSAPP</q-toolbar-title>
    </q-toolbar>
  </q-footer>
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
.fondo {
  background-image: url('../assets/Fondo_Registro.png');
  background-size: cover;
}
</style>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = ref('');
const correo = ref('');
const nombre = ref('');
const apellido = ref('');
const password = ref('');
const show = ref('password');
const options = ref(['Albañileria', 'Fontaneria', 'Herreria', 'Jardineria', 'Carpinteria']);
const opciion_s = ref([]);

const visiblyPassword = () => {
  if (show.value === 'password') {
    show.value = 'text';
  } else if (show.value === 'text') {
    show.value = 'password';
  }
};

const nameIcon = computed(() => {
  if (show.value === 'password') {
    return 'visibility_off';
  } else {
    return 'visibility';
  }
});

const disableBtn = computed(() => {
  if (user.value !== '' && password.value !== '') {
    return false;
  } else {
    return true;
  }
});
const cambioComponente = () => {
  router.push('/login');
};
</script>
