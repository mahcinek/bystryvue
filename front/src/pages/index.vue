<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>


<script>
import MenuCardsList from '../components/MenuCardsList';

export default {
  name: 'PageIndex',
  data() {
    return {
      cards: [
        { nazwa: 'Jak dojechać?', link: '../assets/dojazd.png', destination: '/arrival' },
        { nazwa: 'Mapa', link: '../assets/mapka.jpg',  destination: '/map' },
        { nazwa: 'Ścieżki', link: '../assets/sciezki.jpg',  destination: '/officialPaths' },
        { nazwa: 'Ciekawe miejsca', link: '../assets/palac-krobielowice.jpg', destination: 'interestingPlacesMenu' },
      ],
      pageTitle: 'Dolina Bystrzycy'
    };
  },
  components: {
    MenuCardsList,
  },
  created(){
    this.$store.state.example.showBtn =  false;
    this.$store.state.example.pageTitle = 'Dolina Bystrzycy';
  }
};

</script>


<style>
</style>
