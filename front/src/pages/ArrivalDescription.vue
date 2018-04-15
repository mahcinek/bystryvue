<template>
  <q-card square style="width: 100%">
    <q-card-media style="width: 100%">
      <img :src=upperImagePath>
    </q-card-media>
      <p>
        {{ description }}
      </p>
    <q-card-media style="width: 100%">
      <img :src=lowerImagePath>
    </q-card-media>
  </q-card>
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
        };
      },

    }
</script>

<style scoped>
  p {
    background-color: black;
    color: white;
  }
</style>
