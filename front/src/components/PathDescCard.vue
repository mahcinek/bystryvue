<template>
  <q-card color="primary" square style="width: 100%; height: 90vh;">
    <q-card-media style="width: 100%;">
      <img :src=upperImagePath>
    </q-card-media>
      <p>
        {{description}}
      </p>
    <div style="position:fixed; bottom: 0px;">
      <q-card-media>
        <img :src=lowerImagePath>
      </q-card-media>
      <q-btn label="Zaprowadź mnie tam" text-color="white" color="secondary" style="width: 100%;">
      </q-btn>
    </div>
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
    color: white;
  }
</style>
