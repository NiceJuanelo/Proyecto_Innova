<template>
  <q-header elevated>
    <q-toolbar
      class="col-5 tolbar1"
      style="height: 80px"
    >
      <q-btn
        class="bg-orange"
        style="font-size: large; margin-left: 3rem"
      >
        Regresar
      </q-btn>
      <q-toolbar-title
        class="absolute-center"
        style="font-size: 3.5rem"
      >
        Iniciar Sesión
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

  <q-page class="flex flex-center fondo">
    <div class="container">
      <div class="align-items-center">
        <div class="col-md-10">
          <img
            src="../assets/Logo_Workers.png"
            style="width: 15rem; height: 15rem; margin-left: 4.5rem"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="">
        <q-card
          style="width: 400px; background-color: transparent"
          flat
        >
          <q-separator inset />
          <q-card-section class="q-mt-sm">
            <q-form>
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
              label="ENTRAR"
              style="padding: 0 15px 0 15px"
              :disabled="disableBtn"
              @click="cambioComponente()"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
  <q-footer elevated>
    <q-toolbar class="bg-orange-9">
      <q-toolbar-title></q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<style scoped>
.tolbar1 {
  background: linear-gradient(to right, #ffdb58, #ffba53, #ffba53, #ff924d);
}
.fondo {
  background-image: url('../assets/Fondo.png');
  background-size: cover;
}
</style>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const user = ref('');
const password = ref('');
const show = ref('password');

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
  router.push('/homeColabs');
};
</script>
