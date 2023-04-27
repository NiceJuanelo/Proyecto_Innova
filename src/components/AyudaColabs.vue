<template>
  <q-page class="page2">
    <div class="container">
      <q-card
        class="my-card page2"
        flat
      >
        <q-card-section>
          <div
            class="text-h4"
            style="height: 70px; text-align: center; color: white"
          >
            ¿Como podemos ayudarte?
          </div>
        </q-card-section>
        <q-card-section>
          <div
            class="q-pa-md"
            style="background-color: orange"
          >
            <q-list
              bordered
              class="rounded-borders"
            >
              <q-expansion-item
                class="text-h5"
                expand-icon-toggle
                expand-separator
                icon="help_outline"
                label="¿Preguntas frecuentes?"
                header-class="text-white"
              >
                <q-card class="page2">
                  <q-card-section>
                    <q-item clickable>
                      <q-item-section>
                        ¿Cómo inicio sesión en la aplicación? Para iniciar sesión en la aplicación,
                        dirígete a la página de inicio de sesión y proporciona tu correo electrónico
                        y contraseña.
                      </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      v-ripple
                    >
                      <q-item-section>
                        ¿Cómo recupero mi contraseña si la he olvidado? Si has olvidado tu
                        contraseña, puedes hacer clic en el enlace "¿Olvidaste tu contraseña?" en la
                        página de inicio de sesión y seguir los pasos para restablecerla.
                      </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      v-ripple
                    >
                      <q-item-section>
                        ¿Cómo actualizo mi información de perfil? Para actualizar tu información de
                        perfil, inicia sesión en la aplicación y navega a la sección de
                        "Configuración" o "Perfil" y haz los cambios necesarios.
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-icon-toggle
                class="text-h5"
                expand-separator
                icon="psychology"
                label="¿Como funciona la app?"
                header-class="text-white"
              >
                <q-card class="page2">
                  <q-card-section>
                    <q-item clickable>
                      <q-item-section>
                        ¿Cómo creo una cuenta? Para crear una cuenta, haz clic en el botón
                        "Regístrate" en la página de inicio y sigue los pasos para proporcionar la
                        información necesaria y crear una cuenta.
                      </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      v-ripple
                    >
                      <q-item-section>
                        ¿Cómo cancelo mi suscripción o elimino mi cuenta? Para cancelar una
                        suscripción o eliminar una cuenta, inicia sesión en la aplicación y navega a
                        la sección de "Configuración" o "Cuenta" y sigue los pasos para cancelar la
                        suscripción o eliminar la cuenta.
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>

              <q-expansion-item
                expand-icon-toggle
                expand-separator
                class="text-h5"
                icon="bug_report"
                label="¿Problemas con la cuenta?"
                header-class="text-white"
              >
                <q-card class="page2">
                  <q-card-section>
                    <q-item
                      clickable
                      v-ripple
                    >
                      <q-item-section>
                        ¿Cómo contacto al soporte técnico si tengo problemas con la aplicación? Para
                        contactar al soporte técnico, busca la sección de "Soporte" o "Ayuda" en la
                        aplicación y sigue los pasos para enviar un mensaje o solicitar asistencia
                        técnica.
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="btn">
      <q-btn style="background-color: aliceblue">Contactanos</q-btn>
    </div>
  </q-page>
</template>

<style scoped>
.page2 {
  background: linear-gradient(to right, #ffdb58, #ffba53, #ffba53, #ff924d);
  background-size: contain;
  color: gray;
}
.btn {
  margin-top: 100px;
  text-align: center;
}
</style>

<script setup></script>
