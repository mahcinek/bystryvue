<template>
  <div>
  <q-btn @click="switchCard(destination)" style="width: 100%; padding: 0;" >
    <q-card square style="width: 100%;">
      <q-card-media class="card">
        <img :src=imagePath style="height: 100%">
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
    destination: String,
  },
  methods: {
    switchCard(destination){
      this.$router.push(destination);
    }
  }
};
</script>

<style scoped>
  .card{
    height: 120px;
  }
  @media screen and (max-height: 500px) {
    .card{
      height: 100px;
    }
  }
</style>
