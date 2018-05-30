<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

  export default {
      components: {
        MenuCardsList,
      },
    computed:{
      cards: function(){
        return this.$store.state.example.natureMarkers;
      }
    },
    created(){
      this.$store.state.example.showBtn = true;
      this.$store.state.example.pageTitle = 'Przyroda';
    }
  };
</script>

<style scoped>
</style>
