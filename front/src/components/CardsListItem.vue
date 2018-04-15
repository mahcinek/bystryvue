<template>
    <q-card >
      <q-card-media >
        <img :src=imagePath>
        <q-card-title slot="overlay">
          {{title}}
        </q-card-title>
      </q-card-media>
    </q-card>
</template>

<script>
export default {
  props: {
    title: String,
    imagePath: String,
  },
};
</script>

<style scoped>

</style>
