<template>
  <q-page color="primary" style="position: relative;  height: 92vh;">
  <q-card color="primary" square style="width: 100%; height: 100%;">
    <q-card-media class="card-img">
      <img :src=upperImagePath>
    </q-card-media>
      <p>
        {{ description }}
      </p>
    <q-card-media class="card-img" style="position: absolute; bottom: 0px;">
      <img :src=lowerImagePath>
    </q-card-media>
  </q-card>
  </q-page>
</template>

<script>
    export default {
      name: "arrival-description",
      data() {
        return {
          description: "Park Krajobrazowy \"Dolina Bystrzycy\" obejmuje tereny Kątów Wrocławskich, Miękinii, " +
                        "Mietkowa oraz Sobótki. Na teren Parku można dojechać koleją (stacja kolejowa w Kątach " +
                        "Wrocławskich), liniami wrocławskiego MPK nr 109, 609 i 917, samochodem oraz rowerem.",
          upperImagePath: '../assets/dojazdGora.png' ,
          lowerImagePath: '../assets/dojazdDol.png' ,
          pageTitle: ''
        };
      },
      created(){
        this.$store.state.example.showBtn = true;
        this.$store.state.example.pageTitle =  'Jak dojechać';
      }
    }
</script>

<style scoped>
  p {
    color: white;
  }
  .card-img{
    width: 100%;
  }
</style>
