<template>
  <q-page color="primary" style="position: relative; height: 92vh;">
      <q-card color="primary" square style="width: 100%; height: 100%;">
        <q-card-media style="width: 100%">
          <img :src=imagePath>
        </q-card-media>
        <p>
          {{description}}
        </p>
        <q-btn
          @click="goToArrival"
          label="Zaprowadź mnie tam"
          text-color="white"
          color="secondary"
          style="width: 100%; position:fixed; bottom: 0px;">
        </q-btn>
      </q-card>
  </q-page>
</template>

<script>
    export default {
      props: {
        pageTitle: String, //tytuł na pasku nawigacji
        imagePath: String,
        description: String
      },
      methods: {
        goToArrival(){
          this.$router.replace('/map');
        }
      }
    }
</script>

<style scoped>
p {
  color: white;
}
</style>
