<template>
  <q-page>
    <MenuCardListTriPic :cards="cards"></MenuCardListTriPic>
  </q-page>
</template>

<script>
  import MenuCardListTriPic from '../components/MenuCardListTriPic';

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
      MenuCardListTriPic,
    },
  created(){
    this.$store.state.example.showBtn = true;
    this.$store.state.example.pageTitle = 'Ciekawe miejsca';
  }
    }
</script>

<style scoped>

</style>
