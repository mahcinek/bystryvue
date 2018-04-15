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
        { title: 'Jak dojechać?', imagePath: '../assets/dojazd.png' },
        { title: 'Mapa', imagePath: '../assets/mapka.jpg' },
        { title: 'Ścieżki', imagePath: '../assets/sciezki.jpg' },
        { title: 'Ciekawe miejsca', imagePath: '../assets/palac-krobielowice.jpg' },
      ],
    };
  },
  components: {
    MenuCardsList,
  },
};

</script>


<style>

</style>
