<template>
  <q-card
    class="my-card"
    flat
  >
    <q-card-section
      horizontal
      class="justify-center"
    >
      <q-list
        bordered
        class="list-contratos q-mr-xl"
      >
        <q-item
          class="q-mb-md"
          style="background-color: #f47c0c; height: 80px"
        >
          <q-item-section>
            <div class="text-h6 text-center text-white title">Contratos vigentes</div>
          </q-item-section>
        </q-item>
        <q-item class="item">
          <q-item-section
            top
            avatar
          >
            <q-avatar
              color="white"
              icon="account_circle"
              size="4rem"
              font-size="4rem"
            />
          </q-item-section>
          <q-item-section><div class="text-h5 text-white">Fontanería</div></q-item-section>
          <q-item-section>
            <q-btn
              color="white"
              text-color="black"
              label="descripción"
              class="btn-descripcion"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="flex items-end">
            <q-btn
              class="btn-actualizar"
              color="red-5"
              label="Actualizar"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <q-list
        bordered
        class="list-contratos"
      >
        <q-item style="background-color: #f47c0c; height: 80px">
          <q-item-section>
            <div class="text-h6 text-white text-center title">Contratos terminados</div>
          </q-item-section>
        </q-item>
        <q-item class="item">
          <q-item-section
            top
            avatar
          >
            <q-avatar
              color="white"
              icon="account_circle"
              size="4rem"
              font-size="4rem"
            />
          </q-item-section>
          <q-item-section><div class="text-h5 text-white">Albañilería</div></q-item-section>
          <q-item-section>
            <q-btn
              color="white"
              text-color="black"
              label="descripción"
              class="btn-descripcion"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="flex items-end">
            <q-btn
              class="btn-actualizar"
              color="red-5"
              label="Actualizar"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.my-card {
  height: calc(100vh - 106px);
  font-family: 'jost';
}

.list-contratos {
  width: 600px;
  min-height: 300px;
  background: linear-gradient(to right, #ffdb58, #ff924d);
}

.title {
  font-size: 30px;
}

.item {
  margin: 30px 20px 0px 20px;
  background-color: rgba(0, 0, 0, 0.35);
}
.btn-descripcion {
  border-radius: 10px;
  font-size: 17px;
  font-weight: bold;
}

.btn-actualizar {
  width: 280px;
  height: 50px;
  font-size: 20px;
  border-radius: 18px;
  margin: 60px 30px 50px 30px;
  font-weight: bold;
}
</style>

<script setup></script>
