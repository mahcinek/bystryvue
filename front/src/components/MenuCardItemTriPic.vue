<template>
  <div>
    <q-btn @click="goTo(destination)" style="width: 100%; padding: 0;">
      <q-card square style="width: 100%; height: 100%;">
        <q-card-media class="card">
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
        this.$router.push(destination);
      }
    }
  };
</script>

<style scoped>
  @media screen and (max-height: 500px) {
    .card{
      height: 150px;
    }
  }
  @media screen and (min-height: 501px) {
    .card{
      height: 167px;
    }
  }
  @media screen and (min-height: 551px) {
    .card{
      height: 184px;
    }
  }
  @media screen and (min-height: 601px) {
    .card{
      height: 200px;
    }
  }
  @media screen and (min-height: 651px) {
    .card{
      height: 218px;
    }
  }
  @media screen and (min-height: 701px) {
    .card{
      height: 235px;
    }
  }
  @media screen and (min-height: 751px) {
    .card{
      height: 250px;
    }
  }
  @media screen and (min-height: 801px) {
    .card{
      height: 270px;
    }
  }
  @media screen and (min-height: 900px) {
    .card {
      height: 400px;
    }
  }
</style>
