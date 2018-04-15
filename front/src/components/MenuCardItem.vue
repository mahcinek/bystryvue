<template>
  <div>
  <q-btn @click="switchCard" style="width: 100%; padding: 0">
    <q-card square style="width: 100%">
      <q-card-media >
        <img :src=imagePath>
        <q-card-title slot="overlay">
          {{title}}
        </q-card-title>
      </q-card-media>
    </q-card>
  </q-btn>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imagePath: String,
  },
  methods: {
    switchCard(){
      return this.title = "MenuCardItemMethod"
    }
  }
};
</script>

<style>
</style>
