<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <q-table
          :rows="rows"
          :columns="columns"
          style="background: linear-gradient(to right, #ffdb58, #ff924d); font-family: 'jost'"
          separator="cell"
          hide-pagination
          row-key="name"
        >
          <template v-slot:body-cell-proveedor="props">
            <td
              :props="props"
              style="padding: 0%"
            >
              <q-card
                class="card-proveedor q-pt-lg q-pb-lg"
                style="background: linear-gradient(to right, #ffdb58, #ffcb56)"
                flat
              >
                <q-card-section
                  horizontal
                  class="items-center justify-center q-mb-sm"
                >
                  <q-avatar
                    size="5rem"
                    font-size="5rem"
                    text-color="black"
                    color="white"
                    icon="account_circle"
                    class="q-mr-md"
                    style="border-radius: 50%"
                  />
                  <div class="contenedor">
                    <div
                      class="text-h6 text-card"
                      style="font-size: 25px"
                    >
                      Jesus Eduardo
                    </div>
                    <div
                      class="text-h6 text-card"
                      style="font-size: 28px"
                    >
                      FONTANERIA
                    </div>
                  </div>
                </q-card-section>
                <q-card-actions
                  vertical
                  align="center"
                >
                  <q-btn
                    color="red-5"
                    label="información"
                    size="1rem"
                    rounded
                    style="padding: 0 18px"
                  />
                </q-card-actions>
              </q-card>
            </td>
          </template>
          <template v-slot:body-cell-material="props">
            <td
              :props="props"
              style="padding: 0%"
            >
              <div class="container-lista flex justify-center text-white">
                <ul>
                  <li>Tubos</li>
                  <li>Cinta</li>
                  <li>Otros materiales</li>
                </ul>
              </div>
            </td>
          </template>
          <template v-slot:body-cell-cantidad="props">
            <td
              :props="props"
              style="padding: 0%"
            >
              <div class="container-lista flex justify-center text-white">
                <ul>
                  <li>12 pzs</li>
                  <li>3 pzs</li>
                </ul>
              </div>
            </td>
          </template>
          <template v-slot:body-cell-precio="props">
            <td
              :props="props"
              style="padding: 0%"
            >
              <div class="container-lista flex justify-center text-white">
                <ul>
                  <li>$300 c/u</li>
                  <li>$50 c/u</li>
                </ul>
              </div>
            </td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
.my-card {
  height: calc(100vh - 106px);
}

.text-card {
  color: white;
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
}

.container-lista {
  font-size: 25px;
  text-shadow: 0px 5px 3px rgba(0, 0, 0, 0.3);
}
</style>

<script setup>
import { ref } from 'vue';

const columns = [
  {
    name: 'proveedor',
    required: true,
    label: 'Proveedor',
    align: 'center',
    field: (row) => row.name,
    headerStyle:
      'width: 400px; font-size: 35px; height: 100px; background-color: #EF9542; color: white;',
  },
  {
    name: 'material',
    align: 'center',
    label: 'Material',
    field: 'calories',
    headerStyle:
      'width: 400px; font-size: 35px; height: 100px; background-color: #EF9542; color: white;',
  },
  {
    name: 'cantidad',
    label: 'Cantidad',
    field: 'fat',
    align: 'center',
    headerStyle:
      'width: 400px; font-size: 35px; height: 100px; background-color: #EF9542; color: white;',
  },
  {
    name: 'precio',
    label: 'Precio',
    field: 'carbs',
    align: 'center',
    headerStyle:
      'width: 400px; font-size: 35px; height: 100px; background-color: #EF9542; color: white;',
  },
];

const rows = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
]);
</script>
