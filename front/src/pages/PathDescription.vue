<template>
  <q-page>
  <PathDescCard :description="description"
                  :upperImagePath="upperImagePath"
                  :lowerImagePath="lowerImagePath"></PathDescCard>
  </q-page>
</template>

<script>
  import PathDescCard from '../components/PathDescCard';

  export default {
    name: "path-description",
    data() {
      return {
        upperImagePath: '../assets/cicha-dolina.jpg',
        lowerImagePath: '../assets/mapka.jpg',
        description: "Ścieżka została wykonana w roku 2012 we współpracy z Urzędem Miasta i Gminy " +
                           "Kąty Wrocławskie. Trasa ścieżki prowadzi poprzez różnorodne ekosystemy związane" +
                            " z doliną rzeki Bystrzycy.",
        pageTitle: 'Cicha Dolina'
      };
    },
    components: {
      PathDescCard,
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = this.pageTitle;
      console.log("Opis sciezki");
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
