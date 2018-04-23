<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

  export default {
    name: "interesting-places-menu",
    data() {
      return {
        cards: [
          { title: 'Zabytki', imagePath: '../assets/zabytki.jpg', destination: 'monumentsMenu' },
          { title: 'Przyroda', imagePath: '../assets/przyroda.jpg', destination: 'naturalAttractionsMenu' },
          { title: 'Atrakcje turystyczne', imagePath: '../assets/zajazd-banderoza.jpg', destination: 'touristAttractionsMenu' },
        ],
      };
    },
    components: {
      MenuCardsList,
    },
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Ciekawe miejsca';
  }
    }
</script>

<style scoped>

</style>
