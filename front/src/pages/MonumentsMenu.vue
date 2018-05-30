<template>
  <q-page>
    <MenuCardsList :cards="cards"/>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

  export default {
    computed: {
      cards: function() {
        return this.$store.state.example.monumentsMarkers;
      }
    },
    components: {
      MenuCardsList,
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Zabytki';
    }
  };
</script>

<style scoped>

</style>
