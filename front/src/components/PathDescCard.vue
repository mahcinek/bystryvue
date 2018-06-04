<template>
  <q-page color="primary" style="position: relative; height: 89vh;">
      <q-card color="primary" square style="width: 100%; height: 100%;">
         <q-card-media style="width: 100%; height: 45%">
      <img :src=upperImagePath style="height: 100%">
    </q-card-media>
        <p>{{description}}
        </p>

      </q-card>
  </q-page>
</template>

<script>
    export default {
      props: {
        name: String, //tytuł na pasku nawigacji
        upperImagePath: String,
        description: String,
      },
      methods:{

      }
    }
</script>

<style scoped>
  p {
    color: white;
    padding-bottom: 20px;
  }
</style>
