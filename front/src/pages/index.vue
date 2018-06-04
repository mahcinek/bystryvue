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
        { nazwa: 'Jak dojechać?', link: 'https://preview.ibb.co/hTGMyT/dojazd.png', destination: '/arrival' },
        { nazwa: 'Mapa', link: 'https://preview.ibb.co/kYgAso/mapka.jpg',  destination: '/map' },
        { nazwa: 'Ścieżki', link: 'https://preview.ibb.co/kpTZJT/sciezki.jpg',  destination: '/officialPaths' },
        { nazwa: 'Ciekawe miejsca', link: 'https://preview.ibb.co/mTEVso/palac_krobielowice.jpg', destination: 'interestingPlacesMenu' },
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
  },

};

</script>


<style>
</style>
