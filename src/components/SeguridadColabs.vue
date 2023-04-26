<template>
  <q-page class="page2">
    <div class="q-pa-md container">
      <q-card class="my-card">
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-icon name="security"></q-icon>
              <span class="q-ml-md">Seguridad</span>
            </q-item-section>
            <q-item-section side="right">
              <q-toggle
                v-model="securityEnabled"
                color="primary"
              ></q-toggle>
            </q-item-section>
          </q-item>
          <q-item v-if="securityEnabled">
            <q-item-section>
              <q-icon name="lock"></q-icon>
              <span class="q-ml-md">Contraseña</span>
            </q-item-section>
            <q-item-section side="right">
              <q-input
                type="password"
                v-model="password"
                dense
                outlined
                color="primary"
              ></q-input>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-icon name="privacy_tip"></q-icon>
              <span class="q-ml-md">Privacidad</span>
            </q-item-section>
            <q-item-section side="right">
              <q-toggle
                v-model="privacyEnabled"
                color="primary"
              ></q-toggle>
            </q-item-section>
          </q-item>
          <q-item v-if="privacyEnabled">
            <q-item-section>
              <q-icon name="person_pin"></q-icon>
              <span class="q-ml-md">Datos Personales</span>
            </q-item-section>
            <q-item-section side="right">
              <q-input
                type="text"
                v-model="personalData"
                dense
                outlined
                color="primary"
              ></q-input>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
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
.q-ml-md {
  margin-left: 12px;
}
</style>

<script>
export default {
  data() {
    return {
      securityEnabled: false,
      password: '',
      privacyEnabled: false,
      personalData: '',
    };
  },
};
</script>
