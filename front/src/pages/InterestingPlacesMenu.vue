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
          { title: 'Zabytki', imagePath: '../assets/zabytki.jpg' },
          { title: 'Przyroda', imagePath: '../assets/przyroda.jpg' },
          { title: 'Atrakcje turystyczne', imagePath: '../assets/zajazd-banderoza.jpg' },
        ],
      };
    },
    components: {
      MenuCardsList,
    },
    }
</script>

<style scoped>

</style>
