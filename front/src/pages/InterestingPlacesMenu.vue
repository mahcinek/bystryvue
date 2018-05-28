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
          { nazwa: 'Zabytki', zdjecie_link: '../assets/zabytki.jpg', destination: 'monumentsMenu' },
          { nazwa: 'Przyroda', zdjecie_link: '../assets/przyroda.jpg', destination: 'naturalAttractionsMenu' },
          { nazwa: 'Atrakcje turystyczne', zdjecie_link: '../assets/zajazd-banderoza.jpg', destination: 'touristAttractionsMenu' },
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
