<template>
  <q-card square style="width: 100%">
    <q-card-media style="width: 100%;">
      <img :src=upperImagePath>
    </q-card-media>
      <p>
        {{description}}
      </p>
    <q-card-media>
      <img :src=lowerImagePath>
    </q-card-media>
    <q-btn label="Zaprowadź mnie tam" text-color="white" color="secondary">
    </q-btn>
  </q-card>
</template>

<script>
    export default {
      props: {
        name: String, //tytuł na pasku nawigacji
        upperImagePath: String,
        lowerImagePath: String,
        description: String
      },
    }
</script>

<style scoped>
  p {
    background-color: black;
    color: white;
  }
</style>
