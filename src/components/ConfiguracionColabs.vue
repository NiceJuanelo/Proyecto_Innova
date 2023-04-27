<template>
  <q-page class="page2">
    <div class="q-pa-md container">
      <q-card class="my-card">
        <q-form @submit.prevent="saveProfile">
          <q-input
            v-model="name"
            filled
            label="Nombre"
            required
            class="mb-3"
          />
          <q-input
            v-model="email"
            filled
            label="Correo electrónico"
            required
            class="mb-3"
          />
          <q-input
            v-model="avatar"
            filled
            label="Apodo"
            type="text"
            class="mb-3"
          />
          <q-checkbox
            v-model="publicProfile"
            label="Perfil público"
            dense
            class="mb-3"
          />
          <div class="buttons">
            <q-btn
              type="submit"
              label="Guardar"
              dense
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.profile-config {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

/* Estilos personalizados para cada campo de entrada */
.q-field--outlined {
  display: block;
  margin-bottom: 10px;
}
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
  text-align: center;
  background-color: transparent;

  align-items: center;
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  height: 100%;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
<script>
export default {
  name: 'ProfileConfig',
  data() {
    return {
      name: '',
      email: '',
      avatar: '',
      publicProfile: false,
    };
  },
  methods: {
    saveProfile() {
      const profile = {
        name: this.name,
        email: this.email,
        avatar: this.avatar,
        publicProfile: this.publicProfile,
      };
      // Aquí puedes llamar a una API para guardar el perfil del usuario
      console.log(profile);
    },
  },
};
</script>
