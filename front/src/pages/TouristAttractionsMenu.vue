<template>
  <q-page>
    <MenuCardsList :cards="cards"/>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

  export default {
    components: {
      MenuCardsList,
    },
    computed: {
      cards: function(){
        return this.$store.state.example.touristMarkers;
      }
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Atrakcje turystyczne';
    }
  }
</script>

<style scoped>
</style>
