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
                  <q-card-section></q-card-section>
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
                  <q-card-section></q-card-section>
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
                  <q-card-section></q-card-section>
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
