<template>
  <q-page>
    <MenuCardsList :cards="cards"></MenuCardsList>
  </q-page>
</template>

<script>
  import MenuCardsList from '../components/MenuCardsList';

  export default {
    name: "tourist-attractions-menu",
    data() {
      return {
        cards: [
          { title: 'Zajazd Banderoza', imagePath: '../assets/zajazd-banderoza.jpg' },
          { title: 'Straszny Dwór', imagePath: '../assets/straszny-dwor.jpg' },
          { title: 'Karczma Rzym', imagePath: '../assets/karczma-rzym.jpg' },
          { title: 'Pałac w Krobielowicach', imagePath: '../assets/palac-krobielowice-at.jpg' },
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
