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
          { nazwa: 'Zabytki', link: '../assets/zabytki.jpg', destination: 'monumentsMenu' },
          { nazwa: 'Przyroda', link: '../assets/przyroda.jpg', destination: 'naturalAttractionsMenu' },
          { nazwa: 'Atrakcje turystyczne', link: '../assets/zajazd-banderoza.jpg', destination: 'touristAttractionsMenu' },
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
