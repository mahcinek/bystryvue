<template>
  <q-page >
    <CardItemDetails
      :pageTitle="pageTitle"
      :imagePath="imagePath"
      :description="description">
    </CardItemDetails>
  </q-page>
</template>

<script>
  import CardItemDetails from '../components/CardItemDetails';

    export default {
      name: 'card-item-details',
      data() {
        return {
          imagePath:'../assets/karczma-rzym.jpg',
          description: "Ścieżka została wykonana w roku 2012 we współpracy z Urzędem Miasta i Gminy " +
          "Kąty Wrocławskie. Trasa ścieżki prowadzi poprzez różnorodne ekosystemy związane" +
          " z doliną rzeki Bystrzycy.",
          pageTitle: 'Cicha Dolina'
        };
      },
      components: {
          CardItemDetails
      },
      created(){
        this.$store.state.example.showBtn = true;
        this.$store.state.example.pageTitle = this.pageTitle;
      }
    }
</script>

<style scoped>

</style>
