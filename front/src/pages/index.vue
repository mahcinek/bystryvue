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
        { title: 'Jak dojechać?', imagePath: '../assets/dojazd.png', destination: '/arrival' },
        { title: 'Mapa', imagePath: '../assets/mapka.jpg',  destination: '/map' },
        { title: 'Ścieżki', imagePath: '../assets/sciezki.jpg',  destination: '/officialPaths' },
        { title: 'Ciekawe miejsca', imagePath: '../assets/palac-krobielowice.jpg', destination: 'interestingPlacesMenu' },
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
