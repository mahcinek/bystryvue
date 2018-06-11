<template>
  <div>
  <q-btn @click="goTo(destination)" style="width: 100%; padding: 0;">
    <q-card square style="width: 100%; height: 100%;">
      <q-card-media class="card" v-bind:class='{desktop: $q.platform.is.desktop }'>
        <img :src=imagePath style="height: 100%;">
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
    id: Number,
    title: String,
    imagePath: String,
    destination: String,
  },
  methods: {
    goTo(destination){
      this.$store.state.example.cardDetailsId = this.id;
      this.$router.push(destination);
    }
  }
};
</script>

<style scoped>


  .card{
    height: 25vh;
  }
  .desktop{
    height: 50vh;
  }
/*
  @media screen and (max-height: 500px) {
    .card{
      height: 110px;
    }
  }
  @media screen and (min-height: 501px) {
    .card{
      height: 130px;
    }
  }
  @media screen and (min-height: 551px) {
    .card{
      height: 140px;
    }
  }
  @media screen and (min-height: 601px) {
    .card{
      height: 150px;
    }
  }
  @media screen and (min-height: 651px) {
    .card{
      height: 165px;
    }
  }
  @media screen and (min-height: 701px) {
    .card{
      height: 175px;
    }
  }
  @media screen and (min-height: 751px) {
    .card{
      height: 185px;
    }
  }
  @media screen and (min-height: 801px) {
    .card{
      height: 201px;
    }
  }
  @media screen and (min-height: 900px) {
    .card{
      height: 400px;
    }
  }*/
</style>
