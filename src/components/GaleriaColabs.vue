<template>
  <q-page class="page2">
    <div class="container">
      <q-card
        class="my-card page2"
        flat
      >
        <q-card-section style="text-align: end">
          <input
            type="file"
            @change="onImageSelected"
          />
        </q-card-section>

        <div class="card-container">
          <div
            v-for="(image, index) in images"
            :key="image.id"
            class="card"
          >
            <div class="card-content">
              <div class="image-container">
                <img :src="image.url" />
                <div class="button-container">
                  <button @click="onDelete(index)">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const images = ref([]);

    const onImageSelected = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const image = {
          id: images.value.length + 1,
          name: file.name,
          url: reader.result,
          description: '',
        };
        images.value.push(image);
      };
      reader.readAsDataURL(file);
    };

    const onDelete = (index) => {
      images.value.splice(index, 1);
      for (let i = index; i < images.value.length; i++) {
        images.value[i].id = i + 1;
      }
    };

    return {
      images,
      onImageSelected,
      onDelete,
    };
  },
};
</script>

<style>
.page2 {
  background: linear-gradient(to right, #ffdb58, #ffba53, #ffba53, #ff924d);
  background-size: contain;
  color: gray;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1500px;
}

.card {
  width: calc(100% / 5);
  max-width: 300px;
  margin: 0 1rem 1rem 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.image-container {
  position: relative;
  width: 200px;
  height: 200px;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
}

.button-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.button-container button {
  margin: 0 0.5rem;
}
</style>
