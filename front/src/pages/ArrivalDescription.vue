<template>
  <q-page color="primary" style="position: relative; height: 92vh;">
  <q-card color="primary" square style="width: 100%; height: 100%;">
    <q-card-media class="card-img" style="height: 35%">
      <img :src=upperImagePath style="height: 100%">
    </q-card-media>
      <p>
        {{ description }}
      </p>
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
          upperImagePath: 'https://image.ibb.co/mfa6yT/dojazd_Gora.png' ,
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
    overflow: auto;
    height: 25%;
    padding-left: 10px;
    padding-right: 10px;
    text-align: justify;
  }
  .card-img{
    width: 100%;
  }
</style>
