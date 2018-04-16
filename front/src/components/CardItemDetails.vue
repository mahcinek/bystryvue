<template>
      <q-card square style="width: 100%">
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
          style="width: 100%;">
        </q-btn>
      </q-card>
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
          this.$router.replace('/arrival');
        }

      }
    }
</script>

<style scoped>
p {
  background-color: black;
  color: white;
}
</style>
