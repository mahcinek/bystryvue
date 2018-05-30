<template>
  <q-page >
    {{smth}}<br>
    <CardItemDetails
      :pageTitle="pageTitle"
      :imagePath="imagePath"
      :id="id"
      :description="description">

    </CardItemDetails>
  </q-page>
</template>

<script>
  import CardItemDetails from '../components/CardItemDetails';

  export default {
    data() {
      return {
        imagePath:'../assets/karczma-rzym.jpg',
        description: "Ścieżka została wykonana w roku 2012 we współpracy z Urzędem Miasta i Gminy " +
        "Kąty Wrocławskie. Trasa ścieżki prowadzi poprzez różnorodne ekosystemy związane" +
        " z doliną rzeki Bystrzycy.",
        pageTitle: 'CardItemDetails',
        id: this.$store.state.example.cardDetailsId
      };
    },
    computed: {
      smth: function () {
        return this.$store.state.example.currentObject;
      }
    },
    components: {
        CardItemDetails
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = this.pageTitle;
      var vm = this;
      this.$store.dispatch('example/getObjectById', vm, vm.$store.state.example.cardDetailsId)
    }
  }
</script>

<style scoped>

</style>
