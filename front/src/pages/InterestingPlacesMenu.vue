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
          { nazwa: 'Zabytki', link: 'https://image.ibb.co/ctHpk8/zabytki.jpg', destination: 'monumentsMenu' },
          { nazwa: 'Przyroda', link: 'https://image.ibb.co/j4q9k8/przyroda.jpg', destination: 'naturalAttractionsMenu' },
          { nazwa: 'Atrakcje turystyczne', link: 'https://image.ibb.co/dqg4JT/zajazd_banderoza.jpg', destination: 'touristAttractionsMenu' },
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
