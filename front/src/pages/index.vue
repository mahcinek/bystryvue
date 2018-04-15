<template>
  <q-page>
    <CardsList :cards="cards"></CardsList>
  </q-page>
</template>

<style>
</style>

<script>
import CardsList from '../components/CardsList';

export default {
  name: 'PageIndex',
  data() {
    return {
      cards: [
        { title: 'Mapa', imagePath: '../assets/mapka.jpg' },
        { title: 'Gastronomia', imagePath: '../assets/zajazd_banderoza_13.jpg' },
        { title: 'Ciekawe miejsca', imagePath: '../assets/palac-krobielowice.jpg' },
      ],
    };
  },
  components: {
    CardsList,
  },
};

</script>
